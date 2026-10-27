import React from 'react';
import { workProcess } from '../data/companyData';
import { GitBranch, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenQuoteModal }) {
  return (
    <section id="surec" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Çalışma Metodolojimiz</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Fikirden Canlıya:{' '}
            <span className="gold-gradient-text">4 Adımda Çözüm</span>
          </h2>

          <p className="text-base text-slate-300">
            Projenin ilk keşif dakikasından yıllar sonraki periyodik bakımına kadar şeffaf, öngörülebilir ve profesyonel bir süreç yönetimi sunuyoruz.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {workProcess.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slateDark-850/70 border border-white/10 hover:border-brand-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black text-brand-400/80 font-display group-hover:text-brand-400 group-hover:scale-105 transition-all">
                  {item.step}
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-slateDark-800 border border-white/5">
                  Adım {idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-400">
                <span className="font-semibold">Titiz Uygulama</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
