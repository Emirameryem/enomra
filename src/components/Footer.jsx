import React from 'react';
import Logo from './Logo';
import { companyInfo, servicesData } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenQuoteModal, onOpenLegalModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slateDark-950 border-t border-white/10 text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo className="h-12" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Kamera güvenlik sistemleri, endüstriyel otomasyon, kurumsal bilişim bakımı, özel yazılımlar ve kreatif dijital medya çözümleriyle işletmenizin geleceğini inşa ediyoruz.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-white">Genel Yönetim:</strong> {companyInfo.executive}</p>
              <p><strong className="text-white">Merkez:</strong> {companyInfo.locationShort} / Türkiye</p>
            </div>
          </div>

          {/* Hizmetlerimiz Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a href="#hizmetler" className="text-slate-400 hover:text-brand-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı Bağlantılar Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Kurumsal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#kurumsal" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#neden-biz" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Neden Enomra?
                </a>
              </li>
              <li>
                <a href="#surec" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Çalışma Sürecimiz
                </a>
              </li>
              <li>
                <a href="#projeler" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Referans Projeler
                </a>
              </li>
              <li>
                <a href="#fiyat-hesapla" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Fiyat & Teklif Sihirbazı
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-slate-400 hover:text-brand-400 transition-colors">
                  İletişim & Lokasyon
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Bize Ulaşın
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a 
                href={`tel:${companyInfo.phoneRaw}`} 
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>

              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{companyInfo.address}</span>
              </div>

              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                  ● 7/24 Teknik Servis Desteği
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-200">ENOMRA Grup Şirketleri</strong>. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => onOpenLegalModal('kvkk')} 
              className="hover:text-white transition-colors"
            >
              KVKK Aydınlatma
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('gizlilik')} 
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slateDark-850 hover:bg-slateDark-800 text-slate-300 hover:text-brand-400 border border-white/10 transition-colors flex items-center gap-1"
              title="Yukarı Çık"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
