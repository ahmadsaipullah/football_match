"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Trophy,
  Globe,
  Tv,
  Menu,
  X,
  Activity,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Matches", icon: Activity },
  { href: "/countries", label: "Countries", icon: Globe },
  { href: "/streaming", label: "Streaming", icon: Tv },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0e14]/90 backdrop-blur-xl border-b border-[#1e2433]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">⚽</span>
          <span className="text-xl font-bold bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
            Jakampus Soccer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                  ? "bg-[#10b981]/10 text-[#10b981]"
                  : "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5"
                  }`}
              >
                <Icon size={16} />
                {item.label}
                {item.label === "Matches" && (
                  <span className="flex items-center gap-1 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse-live" />
                    <span className="text-[0.65rem] text-[#ef4444] font-bold">
                      LIVE
                    </span>
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f1219] border-t border-[#1e2433] animate-slide-up">
          <nav className="flex flex-col p-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                    ? "bg-[#10b981]/10 text-[#10b981]"
                    : "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5"
                    }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
