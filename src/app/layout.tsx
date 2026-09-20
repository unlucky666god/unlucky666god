import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SlideNav from "@/components/layout/SlideNav";
import ShaderBackground from "@/components/layout/ShaderBackground";

const jetbrains = JetBrains_Mono({ subsets: ["latin", "cyrillic"], weight: ['400', '500', '600', '700', '800'], variable: "--font-jetbrains" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "cyrillic-ext"], weight: ['400', '500', '600', '700', '800'], variable: "--font-jakarta" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "unlucky666god | Developer Portfolio",
  description: "Next.js & C++ High-Performance Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className={`${jetbrains.variable} ${jakarta.variable} ${space.variable} bg-surface text-on-surface font-body text-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container`}>
        <Header />
        <SlideNav />
        <main className="snap-container overflow-x-hidden">
          {children}
        </main>
        <ShaderBackground />
      </body>
    </html>
  );
}