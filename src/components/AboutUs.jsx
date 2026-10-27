import React from 'react';
import { companyInfo } from '../data/companyData';
import { Building, MapPin, Award, ShieldCheck, Target, Eye, Users, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function AboutUs() {
  return (
    <section id="kurumsal" className="py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Brand Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-brand-500/30 via-white/5 to-transparent p-1 shadow-2xl">
              <div className="rounded-[22px] bg-slateDark-900/95 p-8 border border-white/10 space-y-7">
                
                {/* Brand Logo Highlight */}
                <div className="pb-6 border-b border-white/10 flex justify-center">
                  <Logo className="h-20 sm:h-24" />
                </div>

                {/* Management Info */}
                <div className="p-4 rounded-2xl bg-slateDark-800/80 border border-brand-500/20 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-slateDark-950 text-xl shadow-lg shadow-brand-500/25">
                    AÖ
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block">Yönetim</span>
                    <h4 className="text-base font-bold text-white">{companyInfo.executive}</h4>
                    <p className="text-xs text-slate-400">{companyInfo.executiveRole}</p>
                  </div>
                </div>

                {/* HQ Office Location */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Merkez Ofis:</span>
                      <span>{companyInfo.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2">
                    <Building className="w-4 h-4 text-brand-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Çalışma Saatleri: </span>
                      <span>{companyInfo.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Key Pillars Checklist */}
                <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Bitlis & Doğu Anadolu'da Bölgesel Saha Hakimiyeti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Uluslararası Kalite Standartlarında Donanım</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Resmi Faturalı ve Sözleşmeli Kurumsal Garanti</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Mission & Vision */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Kurumsal Profilimiz</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Güvenilir Mühendislik,{' '}
              <span className="gold-gradient-text">Yüksek Teknoloji Standartları</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">ENOMRA Group</strong>; Bitlis Tatvan merkezli olarak kurulan, modern dünyanın en kritik gereksinimleri olan güvenlik sistemleri, bilişim teknolojileri, endüstriyel otomasyon, özel yazılım çözümleri ve dijital prodüksiyon alanlarında anahtar teslim mühendislik hizmeti sunan öncü bir teknoloji kuruluşudur.
              </p>
              <p>
                Kurucumuz <strong className="text-white">{companyInfo.executive}</strong> liderliğinde; küçük işletmelerden organize sanayi fabrikalarına, kamu kurumlarından modern iş merkezlerine kadar yüzlerce projeyi başarıyla hayata geçirdik. Yalnızca montaj yapan bir firma değil, sahanın gereksinimlerine göre en doğru mimariyi tasarlayan bir teknoloji çözüm ortağıyız.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slateDark-850/80 border border-white/10 hover:border-brand-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Misyonumuz</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  İşletmeleri en son teknoloji ve akıllı otomasyonla buluşturup, iş süreçlerindeki riskleri ve maliyetleri minimuma indiren güvenilir sistemler kurmak.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slateDark-850/80 border border-white/10 hover:border-brand-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Vizyonumuz</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Doğu Anadolu'dan doğan yenilikçi mühendislik gücünü Türkiye çapında referans alınan entegre bir kurumsal teknoloji markası haline getirmek.
                </p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {companyInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-black text-brand-400 font-display">{stat.value}</p>
                  <p className="text-xs font-bold text-white">{stat.label}</p>
                  <p className="text-[11px] text-slate-400">{stat.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
