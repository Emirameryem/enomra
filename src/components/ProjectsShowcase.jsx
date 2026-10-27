import React, { useState } from 'react';
import { portfolioProjects } from '../data/companyData';
import { Briefcase, MapPin, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function ProjectsShowcase({ onOpenQuoteModal }) {
  const [filter, setFilter] = useState('Tümü');

  const categories = ['Tümü', 'Kamera Güvenlik', 'Bilgisayar & Donanım', 'Otomasyon Sistemleri', 'Endüstriyel Yazılımlar', 'İçerik Üretimi', 'Sosyal Medya'];

  const filtered = filter === 'Tümü' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="projeler" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Referanslarımız & Çözüm Vitrini</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Başarıyla Teslim Edilen{' '}
            <span className="gold-gradient-text">Kurumsal Projelerimiz</span>
          </h2>

          <p className="text-base text-slate-300">
            Güvenlikten otomasyona, endüstriyel yazılımdan kreatif prodüksiyona kadar sahada değer ürettiğimiz örnek çalışmalarımız.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-500 text-slateDark-950 font-bold shadow-md shadow-brand-500/20'
                  : 'bg-slateDark-850 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-slateDark-850/80 border border-white/10 hover:border-brand-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-brand-400 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20">
                    {proj.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-400" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors mb-3 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-2 rounded-xl">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Sonuç: {proj.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
