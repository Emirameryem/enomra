import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { companyInfo, servicesData } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Kamera Güvenlik Sistemleri',
    notes: '',
    city: 'Tatvan / Bitlis'
  });
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 2800);
  };

  const whatsappMsg = `*ENOMRA GRUP - KEŞİF & TEKLİF TALEBİ*
--------------------------------
• Ad Soyad: ${formData.name || '-'}
• Telefon: ${formData.phone || '-'}
• Şehir/İlçe: ${formData.city}
• İlgilendiği Hizmet: ${formData.service}
• Detay / Not: ${formData.notes || 'Hemen keşif randevusu talep ediyorum.'}
--------------------------------`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slateDark-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-slateDark-900 border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slateDark-850 to-slateDark-800 p-6 sm:p-7 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slateDark-950/60 text-slate-400 hover:text-white hover:bg-slateDark-950 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ücretsiz Keşif & Hızlı Fiyat</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Kurumsal Teklif Formu
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            İhtiyacınızı bildirin, en geç 30 dakika içinde teknik şartname ve fiyat ile dönüş yapalım.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isDone ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-white">Talebiniz Alındı!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Sayın <strong>{formData.name}</strong>, bilgileriniz Enomra Grup Genel Müdürü Azat ÖLGEN ve saha ekibimize iletilmiştir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon Numaranız *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hizmet Seçimi</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Diğer / Birden Fazla Hizmet">Diğer / Komple Altyapı</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Şehir / Lokasyon</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Tatvan, Bitlis, Van..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slateDark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Projeniz Hakkında Kısa Bilgi</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Kamera sayısı, işletme büyüklüğü, yazılım gereksinimleri vb."
                  className="w-full px-4 py-2.5 rounded-xl bg-slateDark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slateDark-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Teklif Talebini İlet</span>
                </button>

                <a
                  href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp İle İletişim</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slateDark-950 p-4 px-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-brand-400 font-bold hover:underline">
              {companyInfo.phone}
            </a>
          </span>
          <span>Kaçkıran İş Merkezi • Tatvan/Bitlis</span>
        </div>
      </div>
    </div>
  );
}
