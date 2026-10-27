import React, { useState } from 'react';
import { X, Check, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ServiceDetailModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const whatsappMessage = `Merhaba Azat Bey, Enomra "${service.title}" hizmetiniz hakkında teklif almak istiyorum.
Ad Soyad: ${formData.name || '-'}
Firma: ${formData.company || '-'}
Telefon: ${formData.phone || '-'}
Not: ${formData.notes || '-'}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slateDark-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slateDark-900 border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-slateDark-850 via-slateDark-800 to-slateDark-850 p-6 sm:p-8 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slateDark-950/60 text-slate-400 hover:text-white hover:bg-slateDark-950 transition-all"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold">
              {service.category}
            </span>
            <span className="text-xs text-slate-400">• Enomra Kurumsal Çözümleri</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-brand-300 font-medium mt-1">
            ⚡ {service.highlight}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Hizmet Açıklaması & Kapsamı
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-slateDark-850/60 p-4 rounded-2xl border border-white/5">
              {service.fullDesc}
            </p>
          </div>

          {/* Technical Specs */}
          {service.specs && service.specs.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Teknik Standartlar & Donanım Nitelikleri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.specs.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slateDark-850 border border-white/5 flex flex-col justify-between">
                    <span className="text-xs font-medium text-brand-400">{item.key}</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Paket ve Çözüm Özellikleri
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slateDark-800/60 border border-white/5">
                  <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Fast Quote Form */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slateDark-850 to-slateDark-800 border border-brand-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <span>Bu Hizmet İçin Hızlı Fiyat & Keşif Talebi</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Bilgilerinizi bırakın, uzman mühendisimiz 15 dakika içinde arasın.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-bold text-sm">
                ✓ Talebiniz başarıyla alındı! Azat ÖLGEN veya teknik ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Telefon Numaranız *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Firma / Kurum Adı (Varsa)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Proje Yeri (Örn: Tatvan / Ahlat / Bitlis)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slateDark-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Hemen Teklif İsteği Gönder</span>
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp İle Anında İletişim</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slateDark-950 p-4 px-6 sm:px-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Doğrudan Arama: <a href={`tel:${companyInfo.phoneRaw}`} className="text-brand-400 font-bold underline">{companyInfo.phone}</a></span>
          <button onClick={onClose} className="text-slate-400 hover:text-white font-semibold">
            Pencereyi Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
