interface ParallaxSectionProps {
  image?: string;
  words?: [string, string, string];
}

export function ParallaxSection({
  image = '/images/parallax-gym.jpg',
  words = ['Discipline', 'Dedication', 'Victory'],
}: ParallaxSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background with CSS fixed attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed grayscale"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wider text-center flex flex-col md:flex-row items-center gap-6 md:gap-0">
          <span>{words[0]}</span>
          <span className="text-brand-yellow text-3xl md:text-6xl lg:text-7xl xl:text-8xl md:mx-6">•</span>
          <span>{words[1]}</span>
          <span className="text-brand-yellow text-3xl md:text-6xl lg:text-7xl xl:text-8xl md:mx-6">•</span>
          <span>{words[2]}</span>
        </h2>
      </div>
    </section>
  );
}
