# ENOMRA GRUP ŞİRKETLERİ - Kurumsal Web Sitesi

**ENOMRA Grup Şirketleri** için kartvizit kurumsal kimliğine, renk paletine (Titanyum Koyu Gri & Altın Sarısı) ve tüm hizmet alanlarına tam uyumlu olarak geliştirilmiş modern, lüks ve yüksek performanslı kurumsal web sitesi.

---

## 🌟 Öne Çıkan Özellikler

1. **Özgün Vektörel Marka Logosu (SVG)**:
   - Kartvizitteki geometrik 'E' ve yukarı yönlü altın oklu 'N' / sonsuzluk döngüsü monogramı ve özel tipografi sıfırdan SVG olarak kodlandı.

2. **6 Temel Hizmet Alanı (Kartvizit ile Birebir)**:
   - **Kamera Güvenlik Sistemleri**: 4K IP, AHD, plaka tanıma, gece görüşü ve uzaktan canlı izleme.
   - **Bilgisayar Tamir ve Bakımı**: Kurumsal bakım anlaşmaları, sunucu/network kurulumu, veri kurtarma.
   - **Otomasyon Sistemleri**: PLC/SCADA, kartlı/yüz tanıma geçiş sistemleri, bina & tesis otomasyonu.
   - **Endüstriyel Yazılımlar**: Özel ERP/CRM, üretim ve depo-stok takip yazılımları, entegrasyonlar.
   - **Sosyal Medya Yönetimi**: Aylık kreatif içerik, Meta & Google reklam yönetimi, dönüşüm odaklı pazarlama.
   - **İçerik Üretimi & Prodüksiyon**: 4K drone hava çekimi, kurumsal tanıtım filmi, stüdyo ve mimari fotoğrafçılık.

3. **Hizmet Detay & Şartname Modalleri**:
   - Her hizmet için teknik spesifikasyonlar, paket kapsamları ve doğrudan o hizmete özel hızlı teklif formu.

4. **Kurumsal İletişim & Lokasyon**:
   - **Yetkili**: Azat ÖLGEN
   - **Telefon**: [0532 678 75 13](tel:+905326787513) (Tek tıkla arama & WhatsApp)
   - **E-Posta**: [destek@enomra.com](mailto:destek@enomra.com)
   - **Adres**: Tuğ Mahallesi Pınarbaşı Caddesi Kılıçkıran İş Merkezi No: 3 İç Kapı No: 18, Tatvan / Bitlis
   - **Web**: enomra.com
   - **7/24 Kesintisiz Teknik Destek & Tatvan İnteraktif Harita Entegrasyonu**.

5. **Hukuki Güvence (KVKK & Gizlilik)**:
   - Açılır KVKK Aydınlatma Metni ve Gizlilik Sözleşmesi modalleri.

---

## 🚀 Başlatma & Kurulum

Proje kök dizininde (`c:\Users\eemir\OneDrive\Masaüstü\enomra`):

```bash
# Geliştirme sunucusunu başlatmak için:
npm run dev

# Canlıya (Production) derlemek için:
npm run build

# Canlı derlemeyi önizlemek için:
npm run preview
```

Web sitesi yerel olarak **`http://localhost:5173/`** adresinde çalışmaktadır.

---

## 📁 Proje Dosya Yapısı

```
enomra/
├── dist/                     # Üretime hazır optimize edilmiş dağıtım dosyaları
├── public/
│   └── logo-icon.svg         # Vektörel favicon
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # Kurumsal Profil, Yönetim (Azat ÖLGEN) ve Misyon/Vizyon
│   │   ├── ContactSection.jsx# Kartvizit iletişim bilgileri, form ve Tatvan haritası
│   │   ├── FAQSection.jsx    # Sıkça sorulan sorular akordeonu
│   │   ├── Footer.jsx        # Kurumsal alt bilgi, yasal linkler ve hızlı menü
│   │   ├── Hero.jsx          # Lüks giriş alanı, kurumsal istatistikler ve butonlar
│   │   ├── LegalModal.jsx    # KVKK ve Gizlilik Politikası penceresi
│   │   ├── Logo.jsx          # Kartvizitteki özgün ENOMRA logotype & monogramı
│   │   ├── Navbar.jsx        # Yapışkan cam efekti menü çubuğu ve acil çağrı
│   │   ├── ProcessSection.jsx# 4 adımlı çalışma süreci (Keşif -> Destek)
│   │   ├── ProjectsShowcase.jsx # Referans işler ve başarı vitrini
│   │   ├── QuickContactFloating.jsx # Sabit WhatsApp ve Hızlı Arama butonu
│   │   ├── QuoteModal.jsx    # Ücretsiz keşif talep penceresi
│   │   ├── ServiceDetailModal.jsx # Hizmet teknik şartname ve detay penceresi
│   │   ├── Services.jsx      # 6 temel hizmetin kategorili sergilenmesi
│   │   ├── Testimonials.jsx  # Müşteri yorumları ve güven puanı
│   │   └── WhyChooseUs.jsx   # Enomra'yı öne çıkaran 6 kurumsal avantaj
│   ├── data/
│   │   └── companyData.js    # Kartvizitten alınan tüm kurumsal metinler & veriler
│   ├── App.jsx               # Ana uygulama bileşeni
│   ├── index.css             # Tailwind CSS & Lüks altın/antrasit efektleri
│   └── main.jsx              # React giriş noktası
├── index.html                # SEO meta etiketleri ve Google Fonts
├── package.json              # Bağımlılıklar ve komutlar
├── tailwind.config.js        # Marka renk paleti ve tipografi yapılandırması
└── vite.config.js            # Vite derleyici yapılandırması
```

---

## 🎨 Tasarım Standartları & Renk Paleti

- **Brand Gold**: `#C59A3F` / `#E5C058` (Kartvizitteki altın tonları)
- **Deep Slate Dark**: `#0B0D11` / `#11141B` / `#161B24` (Kartvizitteki antrasit-titanyum zemin)
- **Yazı Tipleri**: Plus Jakarta Sans & Outfit (Modern, güven veren kurumsal tipografi)
