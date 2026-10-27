import React from 'react';
import { whyChooseUsData } from '../data/companyData';
import { Layers, ShieldAlert, Award, UserCheck, Headphones, Handshake, CheckCircle } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  ShieldAlert: ShieldAlert,
  Award: Award,
  UsersCheck: UserCheck,
  Headphones: Headphones,
  Handshake: Handshake
};

export default function WhyChooseUs() {
  return (
    <section id="neden-biz" className="py-24 relative bg-slateDark-900/40 border-t border-b border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Neden Enomra Group?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            İşletmenizi Geleceğe Taşıyan{' '}
            <span className="gold-gradient-text">6 Güçlü Neden</span>
          </h2>

          <p className="text-base text-slate-300">
            Sadece donanım satan değil; kurulan her sistemin arkasında duran, 7/24 teknik sorumluluk üstlenen profesyonel bir yol arkadaşıyız.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slateDark-850/80 border border-white/10 hover:border-brand-500/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slateDark-800 to-slateDark-750 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slateDark-950 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-400 group-hover:text-brand-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                  <span>Enomra Standartları</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
