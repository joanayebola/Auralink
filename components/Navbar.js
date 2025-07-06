'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/solutions", label: "Our Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/company", label: "Company" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 relative z-50">
    
      <Link href="/" className="flex items-center gap-2" aria-label="Auralink Home">
        <Image
          src="/logo.png"
          alt="Auralink Logo"
          width={120}
          height={32}
          priority
        />
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[#4E2E1D] relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4E2E1D] after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </Link>
        ))}
      </div>

      <Link href="/get-started" passHref>
        <button className="hidden md:inline-block bg-[#4E2E1D] text-white px-6 py-2 text-sm rounded-full hover:opacity-90 transition cursor-pointer">
          Get started
        </button>
      </Link>

      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute top-16 left-0 w-full bg-[#FFFDEA] border-t border-[#4E2E1D]/20 shadow-md flex flex-col items-start px-6 py-4 gap-4 text-[#4E2E1D] text-sm z-40 md:hidden transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/get-started" onClick={() => setMenuOpen(false)}>
          <button className="bg-[#4E2E1D] text-white px-5 py-2 rounded-full text-sm w-full text-center">
            Get started
          </button>
        </Link>
      </div>
    </nav>
  );
}
