"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Обёртка, которая плавно показывает содержимое, когда оно появляется в области видимости.
 *
 * Параметры:
 *  - variant: тип анимации ("up" | "left" | "right" | "zoom" | "fade")
 *  - delay:   задержка в мс (например, для эффекта каскада у карточек)
 *  - as:      какой HTML-тег использовать (по умолчанию div)
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Если у пользователя включён режим "уменьшить движение" — показываем сразу
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Проверяет, попал ли элемент в область видимости
    const check = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      // Элемент считается "видимым", когда его верх ниже верха экрана
      // и он зашёл в кадр хотя бы на 60 пикселей
      if (rect.top < viewH - 60 && rect.bottom > 0) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          check();
          ticking = false;
        });
      }
    };

    check(); // проверяем сразу при монтировании
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${variant} ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
