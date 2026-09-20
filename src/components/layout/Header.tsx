"use client";

import Link from "next/link";
import Image from 'next/image';
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const navItems = [
    { id: "hero", label: "01 Hero" },
    { id: "stack", label: "02 Stack" },
    { id: "projects", label: "03 Projects" },
    { id: "connect", label: "04 Connect" },
  ];
  
  const activeSection = useActiveSection(navItems.map(item => item.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/70 backdrop-blur-2xl shadow-[0_1px_16px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-4 md:px-8 xl:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="#hero" className="flex items-center gap-1 font-code text-code-md font-semibold text-primary-fixed tracking-tight hover:text-primary-container transition-colors">
            <span className="text-primary-container font-headline text-headline-md leading-none">&lt;</span>
            <span>dev</span>
            <span className="text-secondary">/&gt;</span>
          </Link>
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_12px_rgba(0,248,155,0.12)]">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
            <span className="font-code text-label-caps text-tertiary font-semibold uppercase tracking-wider">OPEN TO WORK</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-xl bg-surface-container/60 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-lg font-code text-code-sm transition-all ${
                activeSection === item.id
                  ? "bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container/40 backdrop-blur-md">
            <span className="font-code text-code-sm text-on-surface-variant">&lt;sys: C++ | Next.js &gt;</span>
          </div>
          <Link href="https://github.com/unlucky666god" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg font-headline text-code-sm font-medium text-on-surface bg-surface-container-high/60 hover:bg-surface-variant transition-all">
            Source
          </Link>
          <Link href="#connect" className="inline-flex items-center justify-center px-4 md:px-6 py-2 rounded-lg font-headline text-code-sm font-semibold bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:bg-primary-fixed-dim transition-all">
            Contact
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Link href="https://github.com/unlucky666god" target="_blank" rel="noopener noreferrer">
                <Image className="rounded-full" src="/githubLogo.jpeg" height={140} width={140} alt="github logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}