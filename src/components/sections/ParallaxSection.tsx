import Image from 'next/image';

interface ParallaxSectionProps {
  image?: string;
  words?: [string, string, string];
  quote?: string;
  author?: string;
  grainy?: boolean;
}

export function ParallaxSection({
  image = '/images/parallax-gym.jpg',
  words,
  quote,
  author,
  grainy = false,
}: ParallaxSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image - optimized with Next/Image */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        quality={75}
        priority={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Grain effect overlay - lightweight CSS pattern */}
      {grainy && (
        <div className="absolute inset-0 noise-light pointer-events-none" />
      )}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        {quote ? (
          <div className="text-center max-w-5xl">
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span className="text-brand-yellow">"</span>
              {quote}
              <span className="text-brand-yellow">"</span>
            </blockquote>
            {author && (
              <cite className="block mt-8 text-xl md:text-2xl lg:text-3xl text-brand-yellow font-display not-italic">
                — {author}
              </cite>
            )}
          </div>
        ) : words ? (
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wider text-center flex flex-col md:flex-row items-center gap-6 md:gap-0">
            <span>{words[0]}</span>
            <span className="text-brand-yellow text-3xl md:text-6xl lg:text-7xl xl:text-8xl md:mx-6">•</span>
            <span>{words[1]}</span>
            <span className="text-brand-yellow text-3xl md:text-6xl lg:text-7xl xl:text-8xl md:mx-6">•</span>
            <span>{words[2]}</span>
          </h2>
        ) : null}
      </div>
    </section>
  );
}
