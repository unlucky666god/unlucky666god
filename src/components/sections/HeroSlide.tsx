"use client";

import { useState } from "react";
import { Gauge, Cpu, Zap, ArrowDown, Copy } from "lucide-react";
import CodeWindow from "@/components/ui/CodeWindow";

export default function HeroSlide() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx run-cv");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="hero" className="slide-section px-4 md:px-8 xl:px-10 pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-20 w-[20rem] md:w-[38rem] h-[20rem] md:h-[38rem] rounded-full bg-primary-container/10 blur-[100px] md:blur-[130px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-[20rem] md:w-[42rem] h-[20rem] md:h-[42rem] rounded-full bg-secondary-container/15 blur-[100px] md:blur-[150px]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Левая колонка с текстом */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container/70 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-code font-bold text-label-caps tracking-widest text-primary-fixed uppercase hidden sm:inline">
              [ FULLSTACK & SYSTEMS ARCHITECT ]
            </span>
            <span className="h-3 w-px bg-outline-variant/60 hidden sm:block" />
            <span className="font-code text-code-sm text-tertiary-container">C++ • NEXT.JS</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-headline text-display-hero-mobile md:text-display-hero tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container via-35% to-secondary break-words">
              NEXT-LEVEL WEB & HIGH-PERFORMANCE SYSTEMS
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Специализируюсь на <span className="text-primary-fixed font-semibold">Next.js</span> (Server Components, PWA, WebGL) и низкоуровневом <span className="text-secondary font-semibold">C++</span> (Multi-threading, Object Oriented Programming, Smart Pointers).
            </p>
          </div>

          <div className="md: hidden grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
            <MetricCard title="Lighthouse" value="99.9%" subtitle="Perf Core Vitals" icon={Gauge} colorClass="text-primary-container" glowColor="bg-primary-container/10" />
            <MetricCard title="Compute Frame" value="<14µs" subtitle="Engine Core" icon={Cpu} colorClass="text-secondary" glowColor="bg-secondary-container/20" />
            <MetricCard title="Runtime" value="Next.js" subtitle="RSC + Edge SIMD" icon={Zap} colorClass="text-tertiary-container" glowColor="bg-tertiary-container/15" />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 pt-3">
            <a href="#projects" className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-headline text-code-md font-semibold shadow-[0_0_24px_rgba(0,240,255,0.4)] hover:shadow-[0_0_36px_rgba(0,240,255,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto justify-center focus-visible:ring-2 focus-visible:ring-primary outline-none">
              <span>Исследовать проекты</span>
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            </a>
            
            <button 
              onClick={handleCopy}
              className="relative inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md shadow-inner text-on-surface-variant hover:text-primary-container transition-colors group cursor-pointer w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-primary-container outline-none"
            >
              <span className="font-code text-code-sm text-primary-container font-semibold">$</span>
              <span className="font-code text-code-sm tracking-tight text-on-surface">npx create-next-app@latest</span>
              <Copy className="w-4 h-4 text-outline group-hover:text-primary-container transition-colors" />
              
              <span className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-code text-[11px] font-semibold transition-opacity pointer-events-none shadow-md whitespace-nowrap ${copied ? 'opacity-100' : 'opacity-0'}`}>
                Скопировано!
              </span>
            </button>
          </div>
        </div>

        {/* Правая колонка: Вставка окна с кодом напрямую */}
        <div className="hidden md:flex lg:col-span-5 flex-col justify-center w-full">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, subtitle, icon: Icon, colorClass, glowColor }: any) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-2xl p-4 shadow-lg hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] transition-all duration-300 group">
      <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full ${glowColor} blur-xl group-hover:scale-150 transition-transform`} />
      <div className="flex items-center justify-between">
        <span className="font-code text-code-sm text-on-surface-variant uppercase tracking-wider">{title}</span>
        <Icon className={`w-[18px] h-[18px] ${colorClass}`} />
      </div>
      <div className={`mt-2 font-headline text-headline-md font-bold ${colorClass} tracking-tight`}>{value}</div>
      <div className="mt-0.5 font-code text-code-sm text-on-surface-variant/80 flex items-center gap-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colorClass.replace('text-', 'bg-')}`} /> {subtitle}
      </div>
    </div>
  );
}