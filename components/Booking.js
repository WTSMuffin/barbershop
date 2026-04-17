"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const servicesList = ["Стрижка", "Моделирование бороды", "Бритьё опасной бритвой", "Королевский ритуал"];
const mastersList = ["Артём Волков", "Даниил Орлов", "Михаил Соколов", "Руслан Ким"];
const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ service: "", master: "", date: "", time: "", name: "", phone: "" });
  const [sent, setSent] = useState(false);

  const update = (k, v) => setData({ ...data, [k]: v });
  const canNext = () =>
    (step === 1 && data.service) ||
    (step === 2 && data.master) ||
    (step === 3 && data.date && data.time) ||
    (step === 4 && data.name && data.phone);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Онлайн-запись</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">4 простых шага — и кресло ваше.</p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-[1fr_320px] gap-8">
          <Reveal variant="left" delay={100}>
          <form onSubmit={submit} className="bg-[#1f1f1f] border border-cream/10 p-8 rounded-sm">
            {/* Прогресс */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`flex-1 h-1 rounded-full transition-colors ${
                    step >= n ? "bg-copper" : "bg-cream/15"
                  }`}
                />
              ))}
            </div>

            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-display text-2xl uppercase text-copper">Заявка отправлена</h3>
                <p className="text-cream/70 mt-3">Мы перезвоним в течение 10 минут для подтверждения.</p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-xl uppercase text-cream mb-5">1. Выберите услугу</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {servicesList.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => update("service", s)}
                          className={`p-4 border rounded-sm text-left transition ${
                            data.service === s
                              ? "border-copper bg-copper/10 text-cream"
                              : "border-cream/15 text-cream/70 hover:border-cream/40"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl uppercase text-cream mb-5">2. Выберите мастера</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {mastersList.map((m) => (
                        <button
                          type="button"
                          key={m}
                          onClick={() => update("master", m)}
                          className={`p-4 border rounded-sm text-left transition ${
                            data.master === m
                              ? "border-copper bg-copper/10 text-cream"
                              : "border-cream/15 text-cream/70 hover:border-cream/40"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-display text-xl uppercase text-cream mb-5">3. Дата и время</h3>
                    <input
                      type="date"
                      value={data.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="w-full bg-graphite border border-cream/15 text-cream p-3 rounded-sm mb-4 focus:border-copper outline-none"
                    />
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {times.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => update("time", t)}
                          className={`py-2 border rounded-sm transition ${
                            data.time === t
                              ? "border-copper bg-copper/10 text-cream"
                              : "border-cream/15 text-cream/70 hover:border-cream/40"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="font-display text-xl uppercase text-cream mb-5">4. Контакты</h3>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full bg-graphite border border-cream/15 text-cream p-3 rounded-sm mb-4 focus:border-copper outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full bg-graphite border border-cream/15 text-cream p-3 rounded-sm focus:border-copper outline-none"
                    />
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                    className="btn-ghost text-sm py-2 px-5 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Назад
                  </button>
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => canNext() && setStep(step + 1)}
                      disabled={!canNext()}
                      className="btn-primary text-sm py-2 px-5 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Далее
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canNext()}
                      className="btn-primary text-sm py-2 px-5 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Записаться
                    </button>
                  )}
                </div>
              </>
            )}
          </form>
          </Reveal>

          {/* Сводка */}
          <Reveal variant="right" delay={250}>
          <aside className="bg-[#1f1f1f] border border-cream/10 p-6 rounded-sm h-fit">
            <h4 className="font-display text-sm uppercase tracking-widest text-copper mb-5">Ваш выбор</h4>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-cream/10 pb-2">
                <dt className="text-cream/50">Услуга</dt>
                <dd className="text-cream text-right">{data.service || "—"}</dd>
              </div>
              <div className="flex justify-between border-b border-cream/10 pb-2">
                <dt className="text-cream/50">Мастер</dt>
                <dd className="text-cream text-right">{data.master || "—"}</dd>
              </div>
              <div className="flex justify-between border-b border-cream/10 pb-2">
                <dt className="text-cream/50">Дата</dt>
                <dd className="text-cream text-right">{data.date || "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream/50">Время</dt>
                <dd className="text-cream text-right">{data.time || "—"}</dd>
              </div>
            </dl>
          </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
