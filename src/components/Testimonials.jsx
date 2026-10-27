import React from 'react';
import { testimonials } from '../data/companyData';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-slateDark-900/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Müşteri Deneyimleri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            İş Ortaklarımız{' '}
            <span className="gold-gradient-text">Enomra İçin Ne Diyor?</span>
          </h2>

          <p className="text-base text-slate-300">
            Güven veren iş ahlakımız ve titiz mühendislik yaklaşımımızla bölgenin saygın kuruluşlarıyla uzun vadeli çalışıyoruz.
          </p>
        </div>

        {/* Testimonials 3 Column */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slateDark-850 border border-white/10 hover:border-brand-500/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-brand-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-500/20" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} • <span className="text-brand-400/90">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
