"use client";

import { useState } from "react";
import { 
  ArrowUpRight, 
  Zap, 
  Lock, 
  Loader2, 
  Send,
  MessageSquare,
  Sparkles
} from "lucide-react";

const socialLinks = [
  {
    title: "Telegram",
    handle: "@@unlucky666root",
    desc: "~15 мин отклик • Основной канал связи",
    href: "https://t.me/@unlucky666root",
    icon: Send,
    color: "bg-tertiary-container",
    badge: "FASTEST"
  },
  {
    title: "GitHub",
    handle: "github.com/unlucky666god",
    desc: "C++, WebAssembly, Next.js & Pet-projects",
    href: "https://github.com/unlucky666god",
    icon: MessageSquare,
    color: "bg-primary-container",
    badge: "CODE"
  },
  {
    title: "VKontakte",
    handle: "vk.com/unlucky666root",
    desc: "Социальный профиль и связь",
    href: "https://vk.com/unlucky666root",
    icon: MessageSquare,
    color: "bg-secondary",
    badge: "SOCIAL"
  },
  {
    title: "Status",
    handle: "Open for Collaborations",
    desc: "Готов к сложным системам и pet-проектам",
    href: "#hero",
    icon: Sparkles,
    color: "bg-primary-fixed-dim",
    badge: "ACTIVE"
  }
];

export default function ConnectSlide() {
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState("System online. Ready for direct socket transmission.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus("Handshake initiated...");
    
    setTimeout(() => {
      setIsSending(false);
      setFormStatus("Packet ACK received. I will reply shortly.");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("System online. Ready for direct socket transmission."), 3500);
    }, 1100);
  };

  return (
    <section id="connect" className="slide-section px-4 md:px-8 xl:px-10 pt-20 md:pt-28 pb-12 overflow-hidden min-h-dvh flex items-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-4xl mb-4 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-xl w-fit border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            <span className="font-code text-label-caps text-primary-fixed tracking-widest uppercase">CONNECTION HUB • 04</span>
          </div>
          <h1 className="font-headline text-headline-lg md:text-display-hero text-on-surface tracking-tight uppercase font-bold break-words">
            LET’S BUILD <span className="text-primary-container drop-shadow-[0_0_24px_rgba(0,240,255,0.4)]">TOGETHER</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Social Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a 
                    key={i} 
                    href={item.href}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group relative p-5 rounded-xl bg-surface-container/40 backdrop-blur-2xl border border-outline-variant/20 transition-all duration-300 hover:bg-surface-container-high/60 hover:border-outline-variant/50 shadow-lg flex flex-col justify-between min-h-[150px] focus-visible:ring-2 focus-visible:ring-primary-container outline-none"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="font-code text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container-highest/60 text-on-surface-variant">
                          {item.badge}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary-fixed group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <div className="mt-2 lg:mt-4">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary-fixed" />
                        <span className="font-headline text-headline-sm text-on-surface font-semibold group-hover:text-primary-fixed transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="font-code text-code-sm text-primary-fixed/90 mt-1 font-medium">{item.handle}</div>
                      <div className="font-code text-[12px] text-on-surface-variant mt-1 leading-snug">{item.desc}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Live Terminal Status Bar */}
            <div className="hidden p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-2xl border border-outline-variant/20 lg:flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 font-code text-code-sm text-on-surface-variant overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-tertiary-container shrink-0" />
                <span className="text-tertiary uppercase font-mono text-[11px] shrink-0">[STATUS]</span>
                <span className="text-on-surface/80 text-[12px] truncate">{formStatus}</span>
              </div>
            </div>
          </div>

          {/* Right: Dispatch Form 
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-xl bg-surface-container-lowest/80 backdrop-blur-3xl p-6 shadow-2xl relative overflow-hidden border border-outline-variant/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-secondary to-tertiary-container" />
              
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-outline-variant/15">
                <span className="font-code text-code-sm text-on-surface font-mono font-semibold flex items-center gap-2">
                  <span className="text-primary-container">&gt;</span> quick_dispatch.sh
                </span>
                <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-surface-container-high font-code text-label-caps text-tertiary">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse" /> STREAM_READY
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 my-auto">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-code text-code-sm text-primary-fixed uppercase font-semibold text-[11px]">$ IDENT // NAME</label>
                  <input 
                    id="name" 
                    required 
                    className="w-full px-3.5 py-2 rounded-lg bg-surface-container/60 text-on-surface font-code text-code-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high border border-transparent focus:border-primary-container/40 transition-colors shadow-inner focus-visible:ring-1 focus-visible:ring-primary-container" 
                    placeholder="e.g. Alex" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="contact" className="font-code text-code-sm text-primary-fixed uppercase font-semibold text-[11px]">$ SOCKET // CONTACT</label>
                  <input 
                    id="contact" 
                    required 
                    className="w-full px-3.5 py-2 rounded-lg bg-surface-container/60 text-on-surface font-code text-code-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high border border-transparent focus:border-primary-container/40 transition-colors shadow-inner focus-visible:ring-1 focus-visible:ring-primary-container" 
                    placeholder="e.g. @telegram_handle or VK link" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="payload" className="font-code text-code-sm text-primary-fixed uppercase font-semibold text-[11px]">$ PAYLOAD // INQUIRY</label>
                  <textarea 
                    id="payload" 
                    required 
                    rows={3} 
                    className="w-full px-3.5 py-2 rounded-lg bg-surface-container/60 text-on-surface font-code text-code-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high border border-transparent focus:border-primary-container/40 transition-colors shadow-inner resize-none focus-visible:ring-1 focus-visible:ring-primary-container" 
                    placeholder="Project scope or questions..." 
                  />
                </div>
                
                <div className="flex items-center justify-between text-on-surface-variant font-code text-[11px] pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-tertiary" />
                    <span>Direct message dispatch</span>
                  </span>
                  <span className="font-mono text-secondary text-[10px]">NO_SPAM</span>
                </div>

                <button 
                  disabled={isSending} 
                  type="submit"
                  className="relative w-full py-3 px-5 rounded-xl bg-primary-container text-on-primary-container font-headline text-code-md font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:bg-primary-fixed transition-all duration-200 cursor-pointer disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-primary outline-none mt-1"
                >
                  {isSending ? (
                    <><span>TRANSMITTING...</span><Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <><span>SEND MESSAGE</span><Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>*/}

        </div>
      </div>
    </section>
  );
}