import React from 'react';
import { ShieldCheck, Cpu, Sliders, ArrowRight, PhoneCall, CheckCircle2, Sparkles, Building2, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[400px] bg-brand-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateDark-900 border border-brand-500/30 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-xs font-semibold text-brand-300 uppercase tracking-widest font-display">
                ENOMRA GROUP
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-400" /> Tatvan / Bitlis
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Geleceğin Teknolojisi,{' '}
              <span className="gold-gradient-text block mt-1">
                Kurumsal Güven & İnovasyon
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Kamera güvenlik altyapılarından endüstriyel otomasyona, kurumsal bilgisayar bakımından özel yazılım çözümleri ve dijital prodüksiyona kadar işletmenizin tüm teknolojik ihtiyaçlarına tek çatı altında profesyonel mühendislik güvencesi sunuyoruz.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Ücretsiz Yerinde Keşif</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Garantili Orijinal Donanım</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>7/24 Teknik Servis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-slateDark-950 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 hover:from-brand-400 hover:to-brand-300 shadow-xl shadow-brand-500/25 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-slateDark-950 fill-current" />
                <span>Hemen Fiyat & Teklif Al</span>
                <ArrowRight className="w-4 h-4 text-slateDark-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#hizmetler"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slateDark-850 hover:bg-slateDark-800 border border-white/10 hover:border-brand-500/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Hizmetlerimizi İnceleyin</span>
              </a>

              <a
                href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=Merhaba%20Azat%20Bey,%20Enomra%20hizmetleri%20hakk%C4%B1nda%20bilgi%20ve%20teklif%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>WhatsApp İle İletişim</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-brand-400 font-semibold">Yetkili Yönetici:</span>
              <span className="text-slate-300">{companyInfo.executive}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Tel:</span>
              <a href={`tel:${companyInfo.phoneRaw}`} className="text-slate-300 hover:text-brand-400 transition-colors underline font-medium">
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase / Interactive Feature Deck */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-brand-500/40 via-white/10 to-transparent shadow-2xl">
                <div className="bg-slateDark-900/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-7 border border-white/10 space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-slateDark-950 font-black shadow-lg shadow-brand-500/30">
                        E
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-white tracking-wide">ENOMRA TEKNOLOJİ MERKEZİ</h2>
                        <p className="text-[11px] text-brand-400 font-medium">Kurumsal Mühendislik Portalı</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider">
                      AKTİF & ÇEVRİMİÇİ
                    </span>
                  </div>

                  {/* 6 Core Cards in Modern Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5 hover:border-brand-500/30 transition-all group">
                      <div className="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-white leading-tight">Kamera Güvenlik</h3>
                      <p className="text-[10px] text-slate-400 mt-1">4K IP & Plaka Tanıma</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5 hover:border-brand-500/30 transition-all group">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-white leading-tight">Bilgisayar & Ağ</h3>
                      <p className="text-[10px] text-slate-400 mt-1">Sunucu & Donanım Bakımı</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5 hover:border-brand-500/30 transition-all group">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-white leading-tight">Otomasyon</h3>
                      <p className="text-[10px] text-slate-400 mt-1">PLC, SCADA & Geçiş</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5 hover:border-brand-500/30 transition-all group">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-white leading-tight">Endüstriyel Yazılım</h3>
                      <p className="text-[10px] text-slate-400 mt-1">Özel ERP & Stok Takip</p>
                    </div>
                  </div>

                  {/* Operational Stats Counter */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-slateDark-800 to-slateDark-850 border border-brand-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-white font-display">500+</p>
                      <p className="text-[11px] text-slate-400">Başarılı Saha Kurulumu</p>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10" />
                    <div>
                      <p className="text-2xl font-black text-brand-400 font-display">%99.4</p>
                      <p className="text-[11px] text-slate-400">Memnuniyet Oranı</p>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10" />
                    <div>
                      <p className="text-2xl font-black text-sky-400 font-display">7/24</p>
                      <p className="text-[11px] text-slate-400">Nöbetçi Teknik Ekip</p>
                    </div>
                  </div>

                  {/* Quick Action Prompt */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
                      Hemen Bize Danışın
                    </span>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="text-brand-300 hover:text-white font-bold transition-colors flex items-center gap-1"
                    >
                      <span>{companyInfo.phone}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating aesthetic pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-slateDark-900/95 border border-brand-500/30 backdrop-blur-xl shadow-2xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Tatvan & Doğu Anadolu</p>
                  <p className="text-[10px] text-brand-400 font-medium">Bölgesel Çözüm Lideri</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
