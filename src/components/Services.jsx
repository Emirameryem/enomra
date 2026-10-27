import React, { useState } from 'react';
import { servicesData, companyInfo } from '../data/companyData';
import { 
  ShieldCheck, 
  Cpu, 
  Sliders, 
  Code2, 
  Share2, 
  Video, 
  ArrowRight, 
  Check, 
  Sparkles, 
  MessageSquare
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Cpu,
  Sliders,
  Code2,
  Share2,
  Video
};

export default function Services({ onSelectService, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const categories = [
    "Tümü",
    "Güvenlik & İzleme",
    "Bilişim & Donanım",
    "Mühendislik & Akıllı Sistemler",
    "Yazılım & Dijital Çözümler",
    "Dijital Medya & Pazarlama",
    "Kreatif & Prodüksiyon"
  ];

  const filteredServices = activeCategory === "Tümü" 
    ? servicesData 
    : servicesData.filter(s => s.category.includes(activeCategory));

  return (
    <section id="hizmetler" className="py-24 relative bg-slateDark-900/60 border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hizmetlerimiz</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            İşletmenizin İhtiyacı Olan Tüm{' '}
            <span className="gold-gradient-text">Teknolojik Altyapı</span>
          </h2>

          <p className="text-base text-slate-300">
            Kamera güvenlik sistemlerinden endüstriyel otomasyona, kurumsal sunucu bakımından özel yazılımlara ve dijital medyaya kadar anahtar teslim çözümler.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-500 text-slateDark-950 shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-slateDark-800/80 text-slate-300 hover:text-white hover:bg-slateDark-750 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slateDark-850/90 border border-white/10 hover:border-brand-500/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col justify-between"
              >
                {/* Top Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500 transition-all duration-500 rounded-t-2xl" />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">
                      {service.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Enomra Güvencesi
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slateDark-800 border border-brand-500/30 text-brand-400 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-slateDark-950 transition-colors shadow-lg">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-500/20 px-2.5 py-1 rounded-full inline-block">
                      ⚡ {service.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {service.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slateDark-800 hover:bg-slateDark-750 text-slate-100 hover:text-white border border-white/10 hover:border-brand-500/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5 group-hover:bg-brand-500 group-hover:text-slateDark-950 group-hover:border-transparent"
                  >
                    <span>Detay & Şartname</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=Merhaba%20Azat%20Bey,%20Enomra%20"${encodeURIComponent(service.title)}"%20hizmetiniz%20hakk%C4%B1nda%20teklif%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
                    title="WhatsApp'tan Hızlı Fiyat İste"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slateDark-850 via-slateDark-800 to-slateDark-850 border border-brand-500/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">Özel Bir Projeniz veya Kurumsal Şartnameniz mi Var?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tatvan ve çevre illerde ücretsiz yerinde keşif yapıyoruz. Şirketinizin ölçeğine özel çözümler üretiyoruz.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-500 text-slateDark-950 font-bold text-xs sm:text-sm hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
          >
            <span>Ücretsiz Keşif İste</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
