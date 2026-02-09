import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920; // Max width for most images
const QUALITY_JPEG = 80;
const QUALITY_WEBP = 80;
const QUALITY_PNG = 80;

async function getFiles(dir) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const path = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getFiles(path));
    } else {
      const ext = extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        files.push(path);
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;
    const ext = extname(filePath).toLowerCase();

    // Skip small files (under 100KB)
    if (originalSize < 100 * 1024) {
      console.log(`⏭️  Skipping ${filePath} (${(originalSize / 1024).toFixed(0)}KB - already small)`);
      return { skipped: true };
    }

    let image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too wide
    if (metadata.width > MAX_WIDTH) {
      image = image.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Apply format-specific compression
    let outputBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await image.jpeg({ quality: QUALITY_JPEG, mozjpeg: true }).toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await image.webp({ quality: QUALITY_WEBP }).toBuffer();
    } else if (ext === '.png') {
      outputBuffer = await image.png({ quality: QUALITY_PNG, compressionLevel: 9 }).toBuffer();
    }

    const newSize = outputBuffer.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    // Only save if we actually reduced the size
    if (newSize < originalSize) {
      await sharp(outputBuffer).toFile(filePath);
      console.log(`✅ ${filePath}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${savings}%)`);
      return { originalSize, newSize, saved: originalSize - newSize };
    } else {
      console.log(`⏭️  ${filePath}: No improvement possible`);
      return { skipped: true };
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { error: true };
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  const files = await getFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let optimized = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result.saved) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      optimized++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   Optimized: ${optimized} images`);
  if (optimized > 0) {
    console.log(`   Total saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Reduction: ${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%`);
  }
}

main().catch(console.error);
