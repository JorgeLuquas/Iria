'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'La Méthode', href: '/methode' },
    { label: 'L’Accompagnement', href: '/accompagnement' },
    { label: 'Power Tear Lab', href: '/power-tear-lab' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Le Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#635634]/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#635634]/20 group-hover:border-[#4A1521]/40 transition-colors">
            <img
              src="/images/iria-logo.png"
              alt="IRIA Lab Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.18em] font-medium text-[#1A1412] uppercase group-hover:text-[#4A1521] transition-colors">
              IRIA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#635634]/70 -mt-1">
              Lab · Genève
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1412]/80 hover:text-[#4A1521] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#4A1521] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - Prendre rendez-vous (NO login button as requested) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/accompagnement#reserver"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Prendre rendez-vous</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1412] hover:text-[#4A1521] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#FBF9F5] border-b border-[#635634]/15 px-6 py-8 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#1A1412] hover:text-[#4A1521] transition-colors py-2 border-b border-[#635634]/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/accompagnement#reserver"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 rounded-full text-xs font-medium tracking-widest uppercase bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-all"
          >
            Prendre rendez-vous (15 min)
          </a>
        </div>
      )}
    </header>
  );
};
