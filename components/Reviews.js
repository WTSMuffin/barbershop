"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Алексей",
    text: "Хожу сюда уже 3 года. Артём всегда делает именно то, что нужно. Атмосфера топ, виски — отдельный плюс.",
    rating: 5,
  },
  {
    name: "Дмитрий",
    text: "Первый раз попробовал королевский ритуал — это другой уровень. Час сплошного кайфа, вышел другим человеком.",
    rating: 5,
  },
  {
    name: "Сергей",
    text: "Запись онлайн удобная, мастера внимательные. Борода наконец-то выглядит как надо, а не как щетина.",
    rating: 5,
  },
  {
    name: "Иван",
    text: "Михаил — маг бритвы. Гладко, аккуратно, без раздражения. Рекомендую всем друзьям.",
    rating: 5,
  },
];

export default function Reviews() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((idx + 1) % reviews.length);

  const r = reviews[idx];

  return (
    <section id="reviews" className="py-24 px-6 bg-graphite">
      <div className="max-w-4xl mx-auto">
        <Reveal variant="up">
          <h2 className="section-title underline-grow">Отзывы клиентов</h2>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <p className="section-sub">Что о нас говорят постоянные гости.</p>
        </Reveal>

        <Reveal variant="zoom" delay={200} className="mt-14 block">
          <div className="bg-[#1f1f1f] border border-cream/10 p-10 md:p-14 rounded-sm relative">
          <svg className="absolute top-6 left-6 text-copper/30" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7h3v3H7v5H3v-5c0-2.2 1.8-4 4-4zm10 0h3v3h-3v5h-4v-5c0-2.2 1.8-4 4-4z" />
          </svg>

          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: r.rating }).map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#B87333">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            ))}
          </div>

          <p key={`text-${idx}`} className="text-cream/80 text-center text-lg md:text-xl leading-relaxed italic fade-in">
            «{r.text}»
          </p>
          <div key={`name-${idx}`} className="text-center mt-6 font-display text-copper uppercase tracking-widest fade-in">
            — {r.name}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-cream/30 rounded-full flex items-center justify-center hover:border-copper hover:text-copper transition"
              aria-label="Предыдущий"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-cream/30 rounded-full flex items-center justify-center hover:border-copper hover:text-copper transition"
              aria-label="Следующий"
            >
              →
            </button>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
