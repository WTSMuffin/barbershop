import Reveal from "./Reveal";

const masters = [
  {
    name: "Артём Волков",
    role: "Топ-барбер",
    exp: "10 лет опыта",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Даниил Орлов",
    role: "Барбер",
    exp: "7 лет опыта",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Михаил Соколов",
    role: "Мастер бритья",
    exp: "12 лет опыта",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Руслан Ким",
    role: "Барбер",
    exp: "5 лет опыта",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Masters() {
  return (
    <section id="masters" className="py-24 px-6 bg-graphite">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Наши мастера</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">
            Каждый — профессионал с собственным стилем. Выбирайте по настроению.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {masters.map((m, i) => (
            <Reveal key={m.name} variant="zoom" delay={i * 120}>
              <div className="group relative overflow-hidden rounded-sm">
                <div className="aspect-[3/4] overflow-hidden bg-[#0f0f0f]">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite via-graphite/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-copper text-xs uppercase tracking-widest">{m.role}</div>
                  <div className="font-display text-xl uppercase tracking-wider text-cream mt-1">{m.name}</div>
                  <div className="text-cream/60 text-sm mt-1">{m.exp}</div>
                  <a
                    href="#booking"
                    className="mt-4 inline-block text-sm text-copper border-b border-copper/50 hover:border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    Записаться →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
