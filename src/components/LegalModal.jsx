import React from 'react';
import { X, Shield } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isKvkk = type === 'kvkk';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slateDark-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slateDark-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slateDark-850">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-brand-400" />
            <h3 className="text-lg font-bold text-white">
              {isKvkk ? 'KVKK Aydınlatma Metni' : 'Gizlilik ve Güvenlik Politikası'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slateDark-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-300 max-h-[60vh] overflow-y-auto leading-relaxed">
          {isKvkk ? (
            <>
              <p>
                <strong>6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU (KVKK) AYDINLATMA METNİ</strong>
              </p>
              <p>
                <strong>ENOMRA Group</strong> (Veri Sorumlusu: Sayın Azat ÖLGEN) olarak; web sitemiz (enomra.com), telefon (0532 678 75 13) veya ofisimiz (Tuğ Mahallesi Pınarbaşı Caddesi Kılıçkıran İş Merkezi No: 3 İç Kapı No: 18 Tatvan/Bitlis) aracılığıyla tarafımıza ilettiğiniz ad, soyad, telefon, e-posta gibi kişisel verilerinizi 6698 sayılı KVKK uyarınca titizlikle koruyoruz.
              </p>
              <p>
                <strong>Veri İşleme Amaçları:</strong> Toplanan veriler, talep ettiğiniz güvenlik sistemleri, bilgisayar bakım, otomasyon, endüstriyel yazılım veya dijital medya hizmetlerinin projelendirilmesi, tekliflendirilmesi ve teknik servis desteğinin sağlanması amacıyla işlenir.
              </p>
              <p>
                <strong>Verilerin Paylaşımı:</strong> Kişisel verileriniz yasal zorunluluklar haricinde hiçbir 3. kişi, şirket veya reklam platformu ile paylaşılmaz ve satılmaz.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>GİZLİLİK VE VERİ GÜVENLİĞİ POLİTİKASI</strong>
              </p>
              <p>
                ENOMRA Group olarak, müşterilerimizin ve iş ortaklarımızın kurumsal ve bireysel verilerinin gizliliğine azami hassasiyet gösteriyoruz.
              </p>
              <p>
                <strong>Teknik Güvenlik Standartları:</strong> Web sitemiz SSL/TLS şifreleme sertifikası ile korunmaktadır. Kamera sistemleri ve sunucu altyapısı kurulumlarında uçtan uca şifreleme ve güçlü parola protokolleri uygulanmaktadır.
              </p>
              <p>
                Her türlü soru ve talebiniz için <strong>destek@enomra.com</strong> adresi üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slateDark-950 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-500 text-slateDark-950 font-bold text-xs hover:bg-brand-400"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
