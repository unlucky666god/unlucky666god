"use client";

import { useState } from "react";
import { 
  Cpu, Play, RotateCcw, Download, 
  ArrowUpRight, Code2, BookOpen, ChevronLeft, ChevronRight, 
  MousePointer2, Radio, Server, Gamepad2
} from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "pacman",
    title: "Pacman Canvas Engine",
    subtitle: "NEXT.JS 15 / HTML5 CANVAS / TS",
    badge: "INTERACTIVE CANVAS GAME",
    description: "Рендеринг классической механики Pacman на HTML5 Canvas с оптимизированным Game Loop, алгоритмами поиска путей для призраков и обработкой столкновений.",
    stack: ["Next.js 15", "TypeScript", "Canvas API", "Tailwind CSS"],
    metrics: [
      { value: "60 FPS", label: "smooth loop" },
      { value: "Canvas", label: "2D rendering" },
      { value: "0 ms", label: "input lag" }
    ],
    github: "https://github.com/unlucky666god/pacman",
    demo: "https://pacman-phi-pink.vercel.app/pacman"
  },
  {
    id: "esp32-deauther",
    title: "ESP32 WiFi Deauther & Frame Injector",
    subtitle: "C++ / ESP-IDF / FREERTOS",
    badge: "HARDWARE & EMBEDDED",
    description: "Низкоуровневая прошивка для ESP32, реализующая внедрение сырых 802.11 management-кадров (Deauthentication / Disassociation) и сканирование эфира в реальном времени.",
    stack: ["C++", "ESP-IDF", "FreeRTOS", "802.11 Stack"],
    metrics: [
      { value: "2.4 GHz", label: "band control" },
      { value: "Raw", label: "frame injection" },
      { value: "FreeRTOS", label: "multithreading" }
    ],
    github: "https://github.com/unlucky666god/ESP32-WiFi-deauther",
    demo: "https://github.com/unlucky666god/ESP32-WiFi-deauther"
  },
  {
    id: "ftp-server",
    title: "C++ Multi-Client FTP Server",
    subtitle: "C++20 / POSIX SOCKETS / CMAKE",
    badge: "LOW-LEVEL NETWORKING",
    description: "Многопоточный FTP-сервер на C++20 с обработкой сокетов, парсингом протокольных команд RFC 959, авторизацией и параллельной передачей файлов.",
    stack: ["C++20", "POSIX Sockets", "CMake", "TCP/IP"],
    metrics: [
      { value: "TCP/IP", label: "raw sockets" },
      { value: "Multi", label: "client handling" },
      { value: "RFC 959", label: "protocol standard" }
    ],
    github: "https://github.com/unlucky666god/FTPServer",
    demo: "https://github.com/unlucky666god/FTPServer"
  }
];

export default function ProjectsSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = PROJECTS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <section 
      id="projects" 
      className="slide-section px-4 md:px-8 xl:px-10 pt-16 pb-6 md:pt-20 md:pb-8 overflow-hidden"
      aria-label="Selected Projects Showcase"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center h-full">

        {/* --- ВЕРХНИЙ ЗАГОЛОВОК --- */}
        <div className="mb-3 md:mb-4 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/60 backdrop-blur-xl shadow-[0_0_12px_rgba(0,240,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="font-code text-label-caps text-primary-fixed uppercase tracking-widest">
              03 / FEATURED PROJECTS
            </span>
          </div>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight leading-tight">
            High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary-fixed to-secondary">Engines & Systems</span>
          </h2>
        </div>

        {/* --- MAIN SHOWCASE GRID --- */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* LEFT: Interactive / Visual Showcase Panel */}
          <div className="hidden md:flex lg:col-span-7 flex-col rounded-xl bg-surface-container/40 backdrop-blur-2xl p-3.5 md:p-4 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary-container/15 rounded-full blur-[90px] pointer-events-none" />
            
            {/* HUD Ribbon */}
            <div className="relative z-10 w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest/80 backdrop-blur-xl mb-2.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-container shadow-[0_0_8px_#00f89b]" />
                </span>
                <span className="font-code text-code-sm font-semibold text-tertiary tracking-wide uppercase">ACTIVE ENGINE</span>
              </div>
              <div className="font-code text-code-sm text-primary-fixed font-semibold uppercase">
                {currentProject.id}
              </div>
            </div>

            {/* Visual Viewport Placeholder */}
            <div className="relative w-full flex-1 min-h-[250px] md:min-h-[300px] lg:min-h-[320px] rounded-lg overflow-hidden flex items-center justify-center bg-surface-container-lowest shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-[#0d162b] to-surface-container-lowest opacity-95" />
              
              <div className="relative z-10 flex flex-col items-center gap-3 p-4 text-center">
                {currentProject.id === "pacman" && <Gamepad2 className="w-16 h-16 text-primary-container animate-pulse" />}
                {currentProject.id === "esp32-deauther" && <Radio className="w-16 h-16 text-secondary animate-pulse" />}
                {currentProject.id === "ftp-server" && <Server className="w-16 h-16 text-tertiary animate-pulse" />}
                
                <span className="font-headline text-headline-md text-on-surface font-bold">
                  {currentProject.title}
                </span>
                <span className="font-code text-code-sm text-on-surface-variant max-w-md">
                  Интерактивный предпросмотр или схематичный вектор модуля
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Architecture & Specs Panel */}
          <div className="p-4 lg:p-5 lg:col-span-5 flex flex-col justify-between rounded-xl bg-surface-container/30 backdrop-blur-2xl relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-secondary-container/20 text-secondary font-code text-code-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {currentProject.badge}
                </div>
                <div className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-highest text-primary-fixed font-code text-code-sm">
                  {currentProject.subtitle}
                </div>
              </div>

              <div>
                <h3 className="font-headline text-headline-md lg:text-headline-lg text-on-surface tracking-tight leading-tight mb-2">
                  {currentProject.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-code text-label-caps text-on-surface-variant uppercase tracking-wider">Tech Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.stack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-surface-container-high/80 font-code text-code-sm text-on-surface">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {currentProject.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest/60 backdrop-blur-md">
                    <span className="font-headline text-headline-md text-primary-container font-bold tracking-tight">{m.value}</span>
                    <span className="font-code text-code-sm text-on-surface-variant mt-0.5 leading-snug">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Navigation */}
            <div className="flex flex-col gap-3 pt-3 mt-4 border-t border-outline-variant/20">
              <div className="flex flex-wrap items-center gap-2.5">
                <a href={currentProject.demo} className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-primary-container text-on-primary-container font-headline text-code-md font-semibold shadow-[0_0_24px_rgba(0,240,255,0.45)] hover:bg-primary-fixed-dim transition-all">
                  <span>Live / Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href={currentProject.github} className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-high/70 hover:bg-surface-variant text-on-surface font-code text-code-sm font-medium transition-all">
                  <Code2 className="w-4 h-4 text-primary-fixed" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-code text-code-sm text-on-surface-variant uppercase">PROJECT:</span>
                  <span className="font-code text-code-md font-bold text-primary-fixed">0{currentIndex + 1}</span>
                  <span className="font-code text-code-sm text-outline-variant">/ 0{PROJECTS_DATA.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.3)] hover:bg-primary-fixed-dim transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}