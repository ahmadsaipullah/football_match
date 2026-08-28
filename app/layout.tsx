import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakampus — Live Football Scores & Streaming",
  description:
    "Live football scores, fixtures, standings, and streaming from 1,200+ leagues worldwide. Your ultimate football companion.",
  keywords: ["football", "soccer", "live scores", "fixtures", "standings", "streaming"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0b0e14] text-[#f1f5f9] font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1e2433] py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#10b981] font-bold text-lg">⚽ Jakampus</span>
              <span className="text-[#64748b] text-sm">
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>
            <div className="flex items-center gap-6 text-[#64748b] text-sm">
              <span>Powered by API-Football</span>
              <span>•</span>
              <span>1,200+ Leagues</span>
              <span>•</span>
              <span>Real-time Data</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
