export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/70 to-graphite" />

      <div className="relative z-10 text-center px-6 max-w-4xl fade-in">
        <p className="font-display text-copper uppercase tracking-[0.4em] text-sm md:text-base mb-6">
          Barbershop · с 2017
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider text-cream leading-tight">
          Мужская стрижка
          <span className="block text-copper">с характером</span>
        </h1>
        <p className="text-cream/70 text-lg md:text-xl mt-8 max-w-xl mx-auto">
          Атмосфера, крепкий кофе и виски, бритва в опытной руке. Мы делаем из стрижки ритуал.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking" className="btn-primary">Записаться онлайн</a>
          <a href="#services" className="btn-ghost">Посмотреть услуги</a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 text-cream/60 animate-float"
        aria-label="Прокрутить вниз"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
