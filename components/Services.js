import Reveal from "./Reveal";

const services = [
  {
    title: "Стрижка",
    desc: "Классическая или современная — под форму головы и стиль.",
    price: "2000 ₽",
    time: "45 мин",
    icon: "M6 12h12M9 6h6M9 18h6",
  },
  {
    title: "Моделирование бороды",
    desc: "Форма, длина, линии — чёткий силуэт вашей бороды.",
    price: "1500 ₽",
    time: "30 мин",
    icon: "M8 3v6a4 4 0 0 0 8 0V3M6 13c0 4 2 8 6 8s6-4 6-8",
  },
  {
    title: "Бритьё опасной бритвой",
    desc: "Горячее полотенце, масла, идеально гладкая кожа.",
    price: "1800 ₽",
    time: "40 мин",
    icon: "M4 20l16-16M10 20h10v-4",
  },
  {
    title: "Королевский ритуал",
    desc: "Стрижка + борода + бритьё + уход. Полный сервис.",
    price: "3500 ₽",
    time: "90 мин",
    icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-graphite">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Наши услуги</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">
            Фиксированные цены без скрытых доплат. Запись онлайн или по телефону.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 120}>
              <article className="group relative bg-graphite border border-cream/10 p-8 rounded-sm transition-all duration-300 hover:border-copper hover:-translate-y-2 hover:shadow-xl hover:shadow-copper/10 h-full">
                <div className="w-14 h-14 rounded-full border border-copper/40 flex items-center justify-center mb-6 text-copper group-hover:bg-copper group-hover:text-graphite group-hover:rotate-12 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-cream">{s.title}</h3>
                <p className="text-cream/60 text-sm mt-3 min-h-[3rem]">{s.desc}</p>
                <div className="flex items-end justify-between mt-6 pt-6 border-t border-cream/10">
                  <span className="font-display text-2xl text-copper">{s.price}</span>
                  <span className="text-cream/50 text-sm">{s.time}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
