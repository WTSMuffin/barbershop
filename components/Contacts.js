import Reveal from "./Reveal";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 bg-graphite">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Контакты</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">Ждём вас по будням и выходным.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <Reveal variant="left" delay={100}>
            <div className="rounded-sm overflow-hidden border border-cream/10 h-[420px]">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Moscow,%20Tverskaya%201&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal variant="right" delay={100}>
              <div className="bg-[#1f1f1f] border border-cream/10 p-6 rounded-sm transition-all hover:border-copper hover:-translate-y-1 duration-300">
                <div className="text-copper text-xs uppercase tracking-widest">Адрес</div>
                <div className="text-cream mt-2">Москва, ул. Тверская, 1</div>
                <a href="#" className="text-sm text-copper hover:underline mt-2 inline-block">
                  Построить маршрут →
                </a>
              </div>
            </Reveal>

            <Reveal variant="right" delay={200}>
              <div className="bg-[#1f1f1f] border border-cream/10 p-6 rounded-sm transition-all hover:border-copper hover:-translate-y-1 duration-300">
                <div className="text-copper text-xs uppercase tracking-widest">Часы работы</div>
                <div className="text-cream mt-2">Пн–Пт: 10:00 — 22:00</div>
                <div className="text-cream">Сб–Вс: 11:00 — 21:00</div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={300}>
              <div className="bg-[#1f1f1f] border border-cream/10 p-6 rounded-sm transition-all hover:border-copper hover:-translate-y-1 duration-300">
                <div className="text-copper text-xs uppercase tracking-widest">Телефон</div>
                <a href="tel:+74951234567" className="text-cream text-xl font-display mt-2 block hover:text-copper">
                  +7 (495) 123-45-67
                </a>
              </div>
            </Reveal>

            <Reveal variant="right" delay={400}>
              <div className="flex gap-3">
                {["Instagram", "Telegram", "VK"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="flex-1 text-center py-3 border border-cream/15 rounded-sm text-cream/70 hover:border-copper hover:text-copper hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
