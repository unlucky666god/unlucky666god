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
  // metadataBase обязателен для формирования абсолютных ссылок на картинку на Vercel
  metadataBase: new URL("https://unlucky666god.vercel.app/"), 

  title: "unlucky666god | Developer Portfolio",
  description: "Next.js & C++ High-Performance Systems",

  // Настройки Open Graph (Telegram, VK, WhatsApp, LinkedIn)
  openGraph: {
    title: "unlucky666god | Developer Portfolio",
    description: "Next.js & C++ High-Performance Systems",
    url: "https://unlucky666god.vercel.app/",
    siteName: "unlucky666god | Developer Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg", // Файл лежит в папки public/og-image.png
        width: 1200,
        height: 630,
        alt: "unlucky666god Developer Portfolio",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  // Настройки карточки для Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "unlucky666god | Developer Portfolio",
    description: "Next.js & C++ High-Performance Systems",
    images: ["/opengraph-image.jpg"],
  },
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