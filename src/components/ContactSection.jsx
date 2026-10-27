import React, { useState } from 'react';
import { companyInfo } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  UserCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Kamera Güvenlik Sistemleri',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = `*ENOMRA İLETİŞİM FORMU MESAJI*
--------------------------------
• Ad Soyad: ${formData.name || '-'}
• Telefon: ${formData.phone || '-'}
• E-posta: ${formData.email || '-'}
• İlgilendiği Hizmet: ${formData.service}
• Mesaj: ${formData.message || 'Hizmet hakkında bilgi almak istiyorum.'}
--------------------------------`;

  return (
    <section id="iletisim" className="py-24 relative bg-slateDark-900/80 border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bize Ulaşın</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projenizi Birlikte{' '}
            <span className="gold-gradient-text">Hayata Geçirelim</span>
          </h2>

          <p className="text-base text-slate-300">
            Ücretsiz yerinde keşif, teknik şartname teklifi veya acil arıza desteği için 7/24 bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info from Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card Info Box */}
            <div className="rounded-3xl bg-slateDark-850 border border-brand-500/30 p-7 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full pointer-events-none" />

              <div className="border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block">Şirket Yetkilisi</span>
                <h3 className="text-2xl font-black text-white">{companyInfo.executive}</h3>
                <p className="text-xs text-slate-400 mt-0.5">Enomra Grup Şirketleri Genel Yönetimi</p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 text-sm">
                
                {/* Phone */}
                <a 
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slateDark-800/80 hover:bg-slateDark-800 border border-white/5 hover:border-brand-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Doğrudan Telefon Hattı</span>
                    <span className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                      {companyInfo.phone}
                    </span>
                    <span className="text-[11px] text-emerald-400 block font-medium">Hemen Arayın (Tek tıkla bağlan)</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slateDark-800/80 hover:bg-slateDark-800 border border-white/5 hover:border-brand-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Kurumsal E-Posta</span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                      {companyInfo.email}
                    </span>
                    <span className="text-[11px] text-slate-400 block">Teklif & Şartname Talepleri</span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Merkez Ofis & Servis</span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {companyInfo.address}
                    </p>
                    <span className="text-[11px] text-brand-400 block mt-1 font-medium">Reşadiye Durağı Yanı</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slateDark-800/80 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Çalışma Saatleri</span>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      {companyInfo.workingHours}
                    </span>
                    <span className="text-[11px] text-emerald-400 block font-bold">
                      {companyInfo.emergencySupport}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent('Merhaba Azat Bey, web siteniz üzerinden ulaşıyorum. Hizmetleriniz hakkında görüşmek istiyorum.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Canlı Destek Başlat</span>
                </a>
              </div>

            </div>

            {/* Embedded Interactive Map for Tatvan */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-lg h-60 bg-slateDark-800 relative">
              <iframe
                title="Enomra Tatvan Konum"
                src="https://maps.google.com/maps?q=Tatvan,%20Bitlis,%20Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-slateDark-950/90 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                <span>📍 Kaçkıran İş Merkezi • Reşadiye Durağı</span>
                <a 
                  href="https://maps.google.com/?q=Tatvan+Bitlis+Kaçkıran+İş+Merkezi" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-brand-400 font-bold hover:underline"
                >
                  Yol Tarifi
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slateDark-850 border border-white/10 p-7 sm:p-10 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Bize Mesaj Gönderin
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Formu doldurarak proje detaylarınızı iletebilirsiniz. En geç 1 saat içinde geri dönüş sağlıyoruz.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mesajınız Alındı!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Teşekkürler Sayın <strong>{formData.name}</strong>. Enomra ekibi ve Sayın Azat ÖLGEN en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', service: 'Kamera Güvenlik Sistemleri', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slateDark-800 text-slate-200 hover:text-white text-xs font-semibold"
                  >
                    Yeni Bir Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-3 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0532 XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-Posta Adresiniz (Opsiyonel)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ornek@sirketiniz.com"
                        className="w-full px-4 py-3 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        İlgilendiğiniz Hizmet Alanı
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        <option value="Kamera Güvenlik Sistemleri">Kamera Güvenlik Sistemleri</option>
                        <option value="Bilgisayar Tamir ve Bakımı">Bilgisayar Tamir ve Bakımı</option>
                        <option value="Otomasyon Sistemleri">Otomasyon Sistemleri</option>
                        <option value="Endüstriyel Yazılımlar">Endüstriyel Yazılımlar</option>
                        <option value="Sosyal Medya Yönetimi">Sosyal Medya Yönetimi</option>
                        <option value="İçerik Üretimi & Drone">İçerik Üretimi & Drone Çekimi</option>
                        <option value="Genel / Diğer">Genel Danışmanlık / Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Proje Detayları / Notunuz *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="İş yeriniz veya projeniz hakkında kısa bilgi veriniz..."
                      className="w-full px-4 py-3 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-brand-500 hover:bg-brand-400 text-slateDark-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Formu Gönder</span>
                    </button>

                    <a
                      href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp'tan Hızlı İlet</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 Bilgileriniz KVKK kapsamında gizli tutulur, 3. şahıslarla asla paylaşılmaz.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
