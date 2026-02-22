const posters = [
  "/posters/poster1.jpg",
  "/posters/poster2.png",
  "/posters/poster3.jpg",
  "/posters/poster4.jpg",
  "/posters/poster5.jpg",
  "/posters/poster6.jpg",
  "/posters/poster7.jpg",
];

export default function BackgroundCarousel() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="flex w-max whitespace-nowrap animate-carousel will-change-transform">
        {[...posters, ...posters].map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="poster"
            className="w-[200px] h-screen object-cover opacity-80 brightness-60"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
}