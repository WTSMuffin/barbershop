import Reveal from "./Reveal";

export default function About() {
  const stats = [
    { num: "8", label: "лет на рынке" },
    { num: "12K+", label: "довольных клиентов" },
    { num: "6", label: "мастеров в команде" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal variant="left">
          <div>
            <p className="font-display text-copper uppercase tracking-[0.3em] text-sm">О нас</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-cream mt-4">
              Не просто стрижка — история
            </h2>
            <p className="text-cream/70 mt-6 leading-relaxed">
              BRUTUS открылся в 2017 году как камерное место для мужчин, ценящих классику и внимание к
              деталям. За годы мы собрали команду, которую объединяет одно — любовь к ремеслу. Здесь
              не просто подстригают, здесь встречают как старого друга.
            </p>
            <p className="text-cream/70 mt-4 leading-relaxed">
              Кожаные кресла, винтажные зеркала, запах тоника и горячего полотенца. Тот самый
              барбершоп, в который возвращаются.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-cream/10">
              {stats.map((s, i) => (
                <Reveal key={s.label} variant="up" delay={i * 150}>
                  <div>
                    <div className="font-display text-4xl md:text-5xl text-copper">{s.num}</div>
                    <div className="text-cream/60 text-sm mt-2">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={200}>
          <div className="relative h-[500px] rounded-sm overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1521490878406-db748bbfdc4e?auto=format&fit=crop&w=1200&q=80"
              alt="Интерьер барбершопа"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-copper/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
