import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenQuoteModal }) {
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
    { name: "Hizmetlerimiz", href: "#hizmetler" },
    { name: "Kurumsal", href: "#kurumsal" },
    { name: "Neden Enomra?", href: "#neden-biz" },
    { name: "Nasıl Çalışırız?", href: "#surec" },
    { name: "Projeler", href: "#projeler" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar with contact info */}
      <div className={`bg-slateDark-900/90 backdrop-blur-md border-b border-white/5 text-xs text-slate-300 py-1.5 px-4 hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-brand-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>{companyInfo.locationShort} • Kılıçkıran İş Merkezi No: 3 D:18</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-brand-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-500" />
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              7/24 Kesintisiz Teknik Servis
            </span>
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slateDark-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
          : 'bg-slateDark-950/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Logo className="h-12 sm:h-14" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slateDark-800 text-slate-200 hover:bg-slateDark-700 border border-white/10 transition-all flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400 group-hover:rotate-12 transition-transform" />
              <span>{companyInfo.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden px-4 py-2 text-xs font-semibold rounded-lg text-slateDark-950 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 hover:from-brand-400 hover:to-brand-300 shadow-lg shadow-brand-500/20 transition-all duration-300 flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-slateDark-950 fill-current" />
              <span>Hemen Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5 text-slateDark-950 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-500 text-slateDark-950"
            >
              Teklif Al
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slateDark-850 text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slateDark-950/98 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-slate-200 hover:bg-white/5 font-medium text-sm flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-400 opacity-60" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full py-3 px-4 rounded-xl bg-slateDark-850 text-slate-200 border border-white/10 flex items-center justify-center gap-2 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              <span>Ara: {companyInfo.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 text-slateDark-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ücretsiz Keşif & Teklif İste</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
