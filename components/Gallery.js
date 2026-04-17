import Reveal from "./Reveal";

const images = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593702288056-f173a7a3bc4b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Галерея работ</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">Наши работы говорят лучше слов.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
          {images.map((src, i) => (
            <Reveal
              key={i}
              variant="zoom"
              delay={i * 80}
              className={i % 5 === 0 ? "row-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                  i % 5 === 0 ? "aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Работа ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5F1E8" strokeWidth="2" className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
