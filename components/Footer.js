export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-cream/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-2xl tracking-widest text-cream">BRUTUS</div>
          <p className="text-cream/50 text-sm mt-3">Мужской барбершоп в сердце Москвы с 2017 года.</p>
        </div>
        <div>
          <div className="font-display uppercase text-copper text-sm tracking-widest mb-4">Навигация</div>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><a href="#services" className="hover:text-copper">Услуги</a></li>
            <li><a href="#masters" className="hover:text-copper">Мастера</a></li>
            <li><a href="#gallery" className="hover:text-copper">Галерея</a></li>
            <li><a href="#booking" className="hover:text-copper">Запись</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display uppercase text-copper text-sm tracking-widest mb-4">Контакты</div>
          <ul className="space-y-2 text-sm text-cream/60">
            <li>Москва, Тверская, 1</li>
            <li>+7 (495) 123-45-67</li>
            <li>hello@brutus.ru</li>
          </ul>
        </div>
        <div>
          <div className="font-display uppercase text-copper text-sm tracking-widest mb-4">Соцсети</div>
          <div className="flex gap-3">
            {["IG", "TG", "VK"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 border border-cream/15 rounded-full flex items-center justify-center text-xs text-cream/60 hover:border-copper hover:text-copper"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/40">
        <div>© 2026 BRUTUS Barbershop. Все права защищены.</div>
        <a href="#" className="hover:text-copper">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
