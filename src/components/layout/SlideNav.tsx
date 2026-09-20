"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { ChevronDown } from "lucide-react";

const SLIDES = [
  { id: "hero", label: "Главная" },
  { id: "stack", label: "Стек" },
  { id: "projects", label: "Проекты" },
  { id: "connect", label: "Контакты" },
];

export default function SlideNav() {
  const activeSection = useActiveSection(SLIDES.map((s) => s.id));

  const activeIndex = SLIDES.findIndex((s) => s.id === activeSection);
  const currentIndex = activeIndex !== -1 ? activeIndex + 1 : 1;
  const isLastSlide = currentIndex === SLIDES.length;

  const formatNum = (num: number) => String(num).padStart(2, "0");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextSlide = () => {
    if (!isLastSlide) {
      scrollToSection(SLIDES[currentIndex].id);
    }
  };

  return (
    <aside
      aria-label="Навигация по слайдам"
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center p-3 rounded-full bg-surface-container/40 backdrop-blur-xl border border-outline-variant/10 shadow-lg select-none transition-all duration-500 ease-in-out"
    >
      {/* 1. Счётчик */}
      <div className="flex flex-col items-center gap-1 font-code text-code-sm mb-4">
        <span className="font-semibold text-primary-fixed transition-all duration-300">
          {formatNum(currentIndex)}
        </span>
        <span className="w-3 h-px bg-outline-variant/50" />
        <span className="text-on-surface-variant/70">
          {formatNum(SLIDES.length)}
        </span>
      </div>

      {/* 2. Точки навигации */}
      <nav className="flex flex-col items-center gap-3">
        {SLIDES.map((slide, index) => {
          const isActive = activeSection === slide.id;
          return (
            <button
              key={slide.id}
              onClick={() => scrollToSection(slide.id)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive
                  ? "w-2.5 h-2.5 bg-primary-container shadow-[0_0_8px_rgba(0,240,255,0.8)] scale-110"
                  : "w-1.5 h-1.5 bg-outline-variant hover:bg-on-surface-variant hover:scale-125"
              }`}
              title={slide.label}
              aria-label={`Перейти к разделу ${index + 1}: ${slide.label}`}
              aria-current={isActive ? "step" : undefined}
            />
          );
        })}
      </nav>

      {/* 3. Плавный контейнер стрелки */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isLastSlide
            ? "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            : "grid-rows-[1fr] opacity-100 mt-4"
        }`}
      >
        <div className="overflow-hidden flex items-center justify-center">
          <button
            onClick={handleNextSlide}
            aria-label="Перейти к следующему слайду"
            className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </aside>
  );
}