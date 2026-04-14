"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBackground = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBackground
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3">
          {!isHome && (
            <Link
              href="/"
              className="text-text-muted hover:text-text transition-colors mr-2"
              aria-label="Terug naar home"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
          )}
          <Link
            href="/"
            className="font-serif text-lg md:text-xl font-semibold text-text tracking-tight"
          >
            Ilonka de Vos
          </Link>
        </div>

        <Image
          src="/AVIG.png"
          alt="AVIG - Artsenvereniging voor Integrale Geneeskunde"
          width={100}
          height={37}
          className="h-7 md:h-9 w-auto"
        />
      </div>
    </header>
  );
}
