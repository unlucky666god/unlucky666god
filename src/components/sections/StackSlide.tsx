"use client";

import { useState } from "react";
import { FileCode, Cpu, Gauge, SlidersHorizontal, Play } from "lucide-react";

export default function StackSlide() {
  const [isRunning, setIsRunning] = useState(false);
  const [latency, setLatency] = useState("0.4ms avg");
  const [status, setStatus] = useState("Ready: 1,000,000 parallel entities");

  const runBenchmark = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStatus("Executing SIMD transform...");
    
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      setLatency((0.28 + Math.random() * 0.18).toFixed(2) + "ms avg");
      if (counter > 4) {
        clearInterval(interval);
        setStatus("Finished: 1M items in 0.31ms");
        setIsRunning(false);
        setTimeout(() => setStatus("Ready: 1,000,000 parallel entities"), 3000);
      }
    }, 120);
  };

  return (
    <section id="stack" className="slide-section px-4 md:px-8 xl:px-10 pt-24 pb-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6 z-10 mb-2 xl:mb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container/60 backdrop-blur-xl shadow-[0_0_16px_rgba(0,240,255,0.12)]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="font-code text-label-caps text-primary-fixed uppercase tracking-widest">02 / CORE STACK & EXPERTISE</span>
          </div>
          <h1 className="font-headline text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-none">
            Full-Stack Velocity <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary-fixed to-secondary">& Systems Control</span>
          </h1>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 gap-1 xl:grid-cols-12 lg:gap-6 items-stretch z-10">
        {/* Next.js Panel */}
        <div className="xl:col-span-5 rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 rounded-full blur-[80px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <FileCode className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-headline text-headline-md text-on-surface">Next.js</h2>
                <p className="font-body text-body-sm text-on-surface-variant">Reactive High-Throughput Frontend</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["App Router", "Server Actions", "Turbopack", "Edge Compute", "WebGL"].map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface-variant font-code text-label-caps hover:text-primary-fixed transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-surface-container-lowest/80 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="font-code text-code-sm text-on-surface font-semibold flex items-center gap-1.5">
                <Gauge className="w-[18px] h-[18px] text-tertiary-container" /> Core Performance
              </span>
              <span className="font-code text-code-md text-tertiary-fixed font-bold">98 / 100</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary-container via-tertiary-container to-tertiary shadow-[0_0_12px_rgba(0,248,155,0.7)] w-[98%]" />
            </div>
          </div>
        </div>

        {/* Center Connector */}
        <div className="hidden md:flex xl:col-span-2 flex-col justify-center items-center py-6 relative min-h-[160px]">
          <div className="absolute inset-0 hidden xl:flex items-center justify-center pointer-events-none">
            <svg className="w-full h-24 overflow-hidden" preserveAspectRatio="none" viewBox="0 0 200 100">
              <line stroke="#3b494b" strokeDasharray="4 4" strokeWidth="2" x1="0" x2="200" y1="50" y2="50" />
              <line opacity="0.8" stroke="#00f0ff" strokeWidth="2.5" x1="0" x2="200" y1="50" y2="50">
                <animate attributeName="stroke-dashoffset" dur="2s" from="100" repeatCount="indefinite" to="0" />
              </line>
            </svg>
          </div>
          <div className="relative z-20 w-full max-w-xs rounded-xl bg-surface-container/80 backdrop-blur-2xl p-4 shadow-2xl flex flex-col items-center text-center space-y-2">
            <div className="px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-secondary-fixed font-code text-label-caps uppercase">WASM Bridge</div>
            <div className="font-headline text-headline-sm text-on-surface flex items-center justify-center gap-1">
              <span className="text-primary-fixed font-code text-code-md">8.4</span> <span className="text-on-surface-variant font-code text-code-sm">GB/s</span>
            </div>
            <span className="font-code text-label-caps text-outline">SharedArrayBuffer</span>
          </div>
        </div>

        {/* C++ Panel */}
        <div className="xl:col-span-5 rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary-container/15 rounded-full blur-[80px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(220,184,255,0.3)]">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-headline text-headline-md text-on-surface">C++ Power</h2>
                <p className="font-body text-body-sm text-on-surface-variant">Deterministic Memory & Compute</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["C++20 / STL", "Smart Pointers", "Object Oriented Programming", "Multithreading"].map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface-variant font-code text-label-caps hover:text-secondary-fixed transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-surface-container-lowest/80 shadow-inner flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-code text-code-sm text-on-surface font-semibold flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-secondary" /> Compute Dispatches
              </span>
              <p className={`font-code text-code-sm transition-colors ${status.includes("Finished") ? "text-tertiary-fixed" : "text-on-surface-variant"}`}>
                {status}
              </p>
            </div>
            <button 
              onClick={runBenchmark}
              disabled={isRunning}
              className="px-4 py-2 rounded-lg bg-secondary-container text-secondary-fixed font-code text-code-sm font-semibold hover:bg-secondary hover:text-on-secondary shadow-[0_0_16px_rgba(119,1,208,0.4)] transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-secondary outline-none"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Run Micro-Bench</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}