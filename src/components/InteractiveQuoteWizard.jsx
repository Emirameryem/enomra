import React, { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, Check, Sparkles, MessageSquare, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function InteractiveQuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('Kamera Güvenlik Sistemleri');
  const [selectedScale, setSelectedScale] = useState('5-8 Kameralı İşyeri/Bina Paketi');
  const [location, setLocation] = useState('Tatvan / Bitlis');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactNote, setContactNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { id: 'cam', name: 'Kamera Güvenlik Sistemleri', icon: '📹', defaultScale: '5-8 Kameralı İşyeri/Bina Paketi' },
    { id: 'pc', name: 'Bilgisayar & Ağ Bakımı', icon: '💻', defaultScale: 'Kurumsal Aylık Bakım Sözleşmesi' },
    { id: 'auto', name: 'Otomasyon Sistemleri', icon: '⚙️', defaultScale: 'Akıllı Tesis & Turnike/Geçiş Sistemi' },
    { id: 'soft', name: 'Endüstriyel Yazılımlar', icon: '⚡', defaultScale: 'Özel Stok/Üretim & ERP Modülü' },
    { id: 'sm', name: 'Sosyal Medya Yönetimi', icon: '📱', defaultScale: 'Profesyonel Aylık Yönetim + Reklam' },
    { id: 'video', name: 'İçerik Üretimi & Drone', icon: '🎬', defaultScale: '4K Drone & Kurumsal Tanıtım Filmi' }
  ];

  const scaleOptionsMap = {
    'Kamera Güvenlik Sistemleri': [
      '1 - 4 Kameralı Küçük İşyeri Paketi',
      '5 - 8 Kameralı Standart İşyeri / Apartman',
      '9 - 16 Kameralı Orta Ölçekli İşletme / Tesis',
      '16+ Kameralı Fabrika / Şantiye / Plaka Tanıma Entegre'
    ],
    'Bilgisayar & Ağ Bakımı': [
      'Tek Seferlik Arıza / Onarım / Parça Değişimi',
      'Kurumsal Aylık Bakım Sözleşmesi (1-10 PC)',
      'Kurumsal Ağ & Sunucu (Server) Kurulumu',
      'Kapsamlı Veri Kurtarma & Siber Güvenlik'
    ],
    'Otomasyon Sistemleri': [
      'Bina & Ofis Akıllı Aydınlatma / İklimlendirme',
      'Turnike, Bariyer & Kartlı/Yüz Tanıma (PDKS)',
      'PLC & SCADA Endüstriyel Pano Otomasyonu',
      'IoT Sensör & Uzaktan Kontrol Çözümleri'
    ],
    'Endüstriyel Yazılımlar': [
      'Barkodlu Depo & Stok Takip Yazılımı',
      'Üretim Reçete & İş Emri Takip Sistemi',
      'Logo/Mikro Muhasebe Entegre B2B Portali',
      'Şirkete Özel Sıfırdan Bulut ERP / CRM Platformu'
    ],
    'Sosyal Medya Yönetimi': [
      'Aylık 12 Post + Reels İçerik & Tasarım',
      'Kapsamlı İçerik + Meta & Google Reklam Yönetimi',
      'Kurumsal İtibar & Kriz İletişimi Yönetimi',
      'Tam Kapsamlı Dijital Pazarlama Danışmanlığı'
    ],
    'İçerik Üretimi & Drone': [
      '4K Lisanslı Drone Hava Çekimi',
      'Kurumsal Şirket / Fabrika Tanıtım Filmi',
      'Mekan / Mimari & Profesyonel Ürün Çekimleri',
      'Reels & Sosyal Medya Viral Video Paketi'
    ]
  };

  const currentScales = scaleOptionsMap[selectedService] || scaleOptionsMap['Kamera Güvenlik Sistemleri'];

  const handleServiceSelect = (item) => {
    setSelectedService(item.name);
    setSelectedScale(item.defaultScale);
    setStep(2);
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = `*ENOMRA GRUP - HIZLI TEKLİF TALEBİ*
--------------------------------
• *Hizmet:* ${selectedService}
• *Ölçek / Kapsam:* ${selectedScale}
• *Lokasyon:* ${location}
• *Ad Soyad:* ${contactName || 'Belirtilmedi'}
• *Telefon:* ${contactPhone || 'Belirtilmedi'}
• *Not:* ${contactNote || 'Belirtilmedi'}
--------------------------------
Merhaba Azat Bey, web sitenizdeki teklif sihirbazı üzerinden bu proje için fiyat ve keşif randevusu almak istiyorum.`;

  return (
    <section id="fiyat-hesapla" className="py-24 relative bg-slateDark-900/50 border-t border-b border-white/5">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>İnteraktif Fiyat & Teklif Sihirbazı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projenizi Seçin,{' '}
            <span className="gold-gradient-text">Anında Teklif Alın</span>
          </h2>

          <p className="text-sm text-slate-300">
            İhtiyacınız olan hizmet ve ölçeği 3 adımda belirleyin, WhatsApp veya form aracılığıyla en uygun fiyatlandırmayı anında iletelim.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-slateDark-850 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Step Progress Indicator */}
          <div className="flex items-center justify-between max-w-md mx-auto mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step >= s 
                      ? 'bg-brand-500 text-slateDark-950 shadow-lg shadow-brand-500/25' 
                      : 'bg-slateDark-800 text-slate-500 border border-white/5'
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4 stroke-[3]" /> : s}
                </div>
                <span className={`text-xs font-semibold hidden sm:inline ${step >= s ? 'text-white' : 'text-slate-500'}`}>
                  {s === 1 && 'Hizmet Seçimi'}
                  {s === 2 && 'Ölçek & Kapsam'}
                  {s === 3 && 'İletişim & Onay'}
                </span>
                {s < 3 && <div className={`w-8 sm:w-16 h-[2px] mx-1 ${step > s ? 'bg-brand-500' : 'bg-slateDark-800'}`} />}
              </div>
            ))}
          </div>

          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-center text-lg font-bold text-white">
                Hangi alanda çözüm arıyorsunuz?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceOptions.map((item) => {
                  const isSelected = selectedService === item.name;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleServiceSelect(item)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-4 group ${
                        isSelected 
                          ? 'bg-brand-500/15 border-brand-500 shadow-lg shadow-brand-500/10' 
                          : 'bg-slateDark-800/80 border-white/5 hover:border-brand-500/40 hover:bg-slateDark-800'
                      }`}
                    >
                      <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-brand-400 font-medium">
                          Özelleştir →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-xl bg-brand-500 text-slateDark-950 font-bold text-xs sm:text-sm hover:bg-brand-400 transition-all flex items-center gap-2"
                >
                  <span>Devam Et</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Scale & Scope */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center space-y-1">
                <span className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
                  Seçilen Hizmet: {selectedService}
                </span>
                <h3 className="text-lg font-bold text-white">
                  İhtiyacınıza en uygun paket ve ölçeği seçin:
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto">
                {currentScales.map((scale, i) => {
                  const isSelected = selectedScale === scale;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedScale(scale)}
                      className={`p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-brand-500 text-slateDark-950 border-brand-500 shadow-md font-bold' 
                          : 'bg-slateDark-800 border-white/5 text-slate-200 hover:border-brand-500/30'
                      }`}
                    >
                      <span>{scale}</span>
                      {isSelected ? (
                        <Check className="w-4 h-4 shrink-0 text-slateDark-950 stroke-[3]" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-white/20 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="max-w-md mx-auto pt-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Proje Lokasyonu / İlçe:
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                >
                  <option value="Tatvan / Bitlis">Tatvan / Bitlis (Merkez Şubemiz)</option>
                  <option value="Bitlis Merkez">Bitlis Merkez</option>
                  <option value="Ahlat / Bitlis">Ahlat / Bitlis</option>
                  <option value="Güroymak / Bitlis">Güroymak / Bitlis</option>
                  <option value="Adilcevaz / Hizan / Mutki">Adilcevaz / Hizan / Mutki</option>
                  <option value="Van / Muş ve Çevre İller">Van / Muş ve Çevre İller</option>
                  <option value="Türkiye Geneli (Uzaktan / Yazılım / Medya)">Türkiye Geneli (Uzaktan / Yazılım / Medya)</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl bg-slateDark-800 text-slate-300 font-semibold text-xs sm:text-sm hover:text-white flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri</span>
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-slateDark-950 font-bold text-xs sm:text-sm hover:bg-brand-400 transition-all flex items-center gap-2"
                >
                  <span>Teklife İlerle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Output */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Teklif Talebiniz Başarıyla Alındı!</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Sayın <strong>{contactName}</strong>, <strong>{selectedService}</strong> ({selectedScale}) projeniz için Enomra teknik ekibimiz ve Azat ÖLGEN en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp'ta Hemen Yanıt Al</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                      className="px-5 py-3 rounded-xl bg-slateDark-800 text-slate-300 hover:text-white text-xs sm:text-sm"
                    >
                      Yeni Teklif Hesapla
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-slateDark-900 border border-brand-500/30 grid sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Hizmet:</span>
                      <span className="font-bold text-white">{selectedService}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Kapsam:</span>
                      <span className="font-bold text-brand-400">{selectedScale}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Lokasyon:</span>
                      <span className="font-bold text-white">{location}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Adınız Soyadınız *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Ad Soyad"
                          className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon Numaranız *</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="05XX XXX XX XX"
                          className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Varsa Ek Notunuz veya Şartname</label>
                      <textarea
                        rows={2}
                        value={contactNote}
                        onChange={(e) => setContactNote(e.target.value)}
                        placeholder="Örn: 2 katlı depo binası için keşif talep ediyoruz..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slateDark-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slateDark-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Teklifi Gönder & Keşif İste</span>
                      </button>

                      <a
                        href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp'tan Anında Gönder</span>
                      </a>
                    </div>
                  </form>

                  <div className="flex justify-start">
                    <button
                      onClick={handlePrevStep}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Seçimi Değiştir</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
