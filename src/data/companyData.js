export const companyInfo = {
  name: "ENOMRA Group",
  brandName: "ENOMRA",
  tagline: "Geleceğin Teknolojisi, Kurumsal Güven ve İnovasyon",
  subTagline: "Doğu Anadolu'dan Türkiye geneline uzanan kurumsal teknoloji, güvenlik, otomasyon ve dijital dönüşüm ortağınız.",
  executive: "Azat ÖLGEN",
  executiveRole: "Kurucu & Genel Müdür",
  phone: "0532 678 75 13",
  phoneRaw: "+905326787513",
  email: "destek@enomra.com",
  website: "enomra.com",
  address: "Tuğ Mahallesi Pınarbaşı Caddesi Kılıçkıran İş Merkezi No: 3 İç Kapı No: 18, Tatvan / Bitlis",
  locationShort: "Tatvan / Bitlis",
  workingHours: "Pazartesi - Cumartesi: 08:30 - 18:30",
  emergencySupport: "7/24 Acil Nöbetçi Teknik Destek",
  stats: [
    { value: "500+", label: "Tamamlanan Proje", desc: "Güvenlik, yazılım ve otomasyon" },
    { value: "%99.4", label: "Müşteri Memnuniyeti", desc: "Garantili hizmet standartları" },
    { value: "10+", label: "Yıllık Tecrübe & Altyapı", desc: "Sektörel uzmanlık" },
    { value: "7/24", label: "Kesintisiz Destek", desc: "Uzaktan ve yerinde anında müdahale" }
  ]
};

export const servicesData = [
  {
    id: "kamera-guvenlik",
    title: "Kamera Güvenlik Sistemleri",
    category: "Güvenlik & İzleme",
    iconName: "ShieldCheck",
    shortDesc: "Yüksek çözünürlüklü IP, AHD, plaka tanıma, termal ve yapay zeka destekli akıllı güvenlik ve kamera altyapıları.",
    highlight: "Yapay Zeka & Gece Görüş Teknolojisi",
    features: [
      "4K Ultra HD Gece Görüşlü IP Kamera Sistemleri",
      "Yapay Zeka Destekli Kişi, Araç ve Plaka Tanıma",
      "Mobil ve Web Üzerinden Kesintisiz Uzaktan Canlı İzleme",
      "Kurumsal NVR / DVR ve Bulut Yedekli Kayıt Çözümleri",
      "Fabrika, Şantiye, Mağaza ve Konut Çevre Güvenlik Çitleri",
      "7/24 Teknik Servis ve Periyodik Bakım Sözleşmeleri"
    ],
    fullDesc: "Enomra Güvenlik Sistemleri olarak; işletmeler, kamu binaları, sanayi tesisleri, siteler ve özel mülkler için uluslararası standartlarda kamera ve çevre izleme mimarisi kuruyoruz. Kör nokta bırakmayan projelendirme anlayışımız, akıllı hareket algılama ve anlık bildirim sistemleriyle mülklerinizi 24 saat güvence altına alıyoruz.",
    specs: [
      { key: "Kamera Tipleri", val: "IP Bullet, Dome, PTZ 360°, Termal, Balıkgözü" },
      { key: "Çözünürlük", val: "2MP Full HD'den 12MP 4K Ultra HD'ye kadar" },
      { key: "Kayıt Depolama", val: "H.265+ Sıkıştırma, RAID Destekli NVR ve Hibrit Bulut" },
      { key: "Erişim", val: "iOS, Android, Windows, Mac uzaktan anlık erişim" }
    ]
  },
  {
    id: "bilgisayar-tamir-bakim",
    title: "Bilgisayar Tamir ve Bakımı",
    category: "Bilişim & Donanım",
    iconName: "Cpu",
    shortDesc: "Kurumsal bilişim altyapıları, sunucu (server) yönetimi, network kurulumu, veri kurtarma ve periyodik sistem bakımları.",
    highlight: "Kurumsal Bakım Anlaşmaları & Hızlı Müdahale",
    features: [
      "Kurumsal ve Bireysel Donanım Tamiri & Chipset Onarımı",
      "Server (Sunucu), Active Directory ve NAS Depolama Kurulumu",
      "Yapısal Kablolama, Patch Panel, Router ve Firewall Güvenliği",
      "Bozulan veya Silinen Disklerden Profesyonel Veri Kurtarma",
      "Lisanslama, Antivirüs & Siber Tehdit Engelleme Çözümleri",
      "Düzenli Termal Macun, Fan Temizliği ve Donanım Upgrade"
    ],
    fullDesc: "İşletmenizin iş sürekliliğini riske atmayın. Enomra Bilişim Ekibi; masaüstü, dizüstü ve sunucu donanımlarınızda meydana gelen arızaları laboratuvar ortamında orijinal parçalarla onarır. Kurumsal bakım sözleşmelerimizle arıza oluşmadan önce önleyici tedbirler alıyor, kesinti sürelerini sıfıra indiriyoruz.",
    specs: [
      { key: "Müdahale Süresi", val: "Acil çağrılarda 2 saat içinde yerinde tespit" },
      { key: "Parça Garantisi", val: "Değiştirilen tüm yedek parçalarda 12-24 ay resmi garanti" },
      { key: "Ağ Altyapısı", val: "Cat6/Cat7 fiber optik ve gigabit ethernet mimarisi" },
      { key: "Veri Güvenliği", val: "ISO standartlarında gizlilik ve şifreli veri yedekleme" }
    ]
  },
  {
    id: "otomasyon-sistemleri",
    title: "Otomasyon Sistemleri",
    category: "Mühendislik & Akıllı Sistemler",
    iconName: "Sliders",
    shortDesc: "Akıllı bina yönetimleri, endüstriyel PLC otomasyonu, kartlı/biyometrik geçiş kontrol ve IoT uzaktan kumanda sistemleri.",
    highlight: "Maksimum Verimlilik, Sıfır Hata Oranı",
    features: [
      "Fabrika ve Üretim Hatları PLC / SCADA Otomasyonu",
      "Akıllı Bina & Tesis Aydınlatma, İklimlendirme ve Enerji Yönetimi",
      "Turnike, Bariyer, Yüz Tanıma ve Parmak İzi Geçiş Kontrol (PDKS)",
      "IoT Sensör Ağları ile Sıcaklık, Nem ve Basınç İzleme",
      "Motor Hız Kontrol (Inverter) ve Pano Tasarım & Montajı",
      "Uzaktan Telemetri ve Arıza Erken Uyarı Entegrasyonları"
    ],
    fullDesc: "İnsan hatasını minimuma indirip enerji tasarrufunu ve üretkenliği maksimize eden modern otomasyon çözümleri sunuyoruz. PLC programlama, pano dizaynı ve anahtar teslimi saha devreye alma hizmetlerimizle işletmenizi Endüstri 4.0 çağına taşıyoruz.",
    specs: [
      { key: "Desteklenen Markalar", val: "Siemens, Schneider, Delta, Omron, Mitsubishi" },
      { key: "Protokoller", val: "Modbus, Profinet, MQTT, CANbus, Ethernet/IP" },
      { key: "Geçiş Sistemleri", val: "RFID, Mifare, Biyometrik Yüz/Parmak İzi" },
      { key: "Yedeklilik", val: "Çift kaynaklı UPS destekli kesintisiz otomasyon" }
    ]
  },
  {
    id: "endustriyel-yazilimlar",
    title: "Endüstriyel Yazılımlar",
    category: "Yazılım & Dijital Çözümler",
    iconName: "Code2",
    shortDesc: "İşletmenizin ihtiyaçlarına özel ERP/CRM entegrasyonları, üretim takip sistemleri, depo-stok yönetimi ve bulut platformları.",
    highlight: "Şirketinize Özel Terzi Usulü Yazılım Mimarisi",
    features: [
      "Özel Üretim Takip, Reçete ve Kalite Kontrol Yazılımları",
      "Barkod / QR Kod Destekli Depo ve Stok Yönetim Sistemleri",
      "B2B Bayi Portalları ve Saha Satış Otomasyon Yazılımları",
      "Mikro, Logo vb. Muhasebe/ERP Sistemleriyle Çift Yönlü Entegrasyon",
      "Yönetici Gösterge Paneli (Dashboard) ve Raporlama Modülleri",
      "Yüksek Güvenlikli Bulut Veritabanı ve Mobil Uyumlu Arayüzler"
    ],
    fullDesc: "Standart paket yazılımların iş akışınızı kısıtlamasına izin vermeyin. Enomra Yazılım Ekibi, firmanızın benzersiz iş modelini analiz eder ve milimetrik uyum sağlayan ölçeklenebilir, modern web ve masaüstü yazılımlar geliştirir.",
    specs: [
      { key: "Teknoloji Altyapısı", val: "React, Node.js, .NET Core, Python, PostgreSQL, Redis" },
      { key: "Entegrasyon", val: "RESTful API, Webhook, ERP/CRM & Muhasebe Köprüleri" },
      { key: "Platformlar", val: "Web, Masaüstü (Windows/Linux), Mobil (Android/iOS)" },
      { key: "Yedekleme", val: "Günlük otomatik şifreli bulut yedekleme" }
    ]
  },
  {
    id: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    category: "Dijital Medya & Pazarlama",
    iconName: "Share2",
    shortDesc: "Markanızı dijitalde zirveye taşıyan stratejik sosyal medya planlaması, Meta/Google reklam yönetimi ve topluluk etkileşimi.",
    highlight: "Dönüşüm Odaklı Dijital İtibar & Büyüme",
    features: [
      "Detaylı Rakip ve Sektörel Hedef Kitle Analizi",
      "Aylık İçerik Takvimi, Görsel Tasarım ve Metin Yazarlığı",
      "Instagram, Facebook, LinkedIn, TikTok Profesyonel Yönetimi",
      "Meta Ads ve Google Sponsorlu Reklam Kampanya Yönetimi",
      "Müşteri Mesajları, Yorumlar ve Kriz İletişimi Yönetimi",
      "Aylık Şeffaf Performans, Etkileşim ve ROI Raporlaması"
    ],
    fullDesc: "Markanızın dijital vitrinini Enomra Medya ekibine emanet edin. Tutarlı, estetik ve profesyonel içeriklerle hedef kitlenizin güvenini kazanırken, optimize edilmiş hedefli reklamlarla potansiyel müşterilerinizi satışa dönüştürüyoruz.",
    specs: [
      { key: "Kanallar", val: "Instagram, LinkedIn, Facebook, TikTok, YouTube" },
      { key: "Reklam Yönetimi", val: "Meta Business Suite, Google Ads, Pixel Kurulumu" },
      { key: "Tasarım Kalitesi", val: "Vektörel grafikler, kurumsal renk paleti ve tipografi" },
      { key: "Raporlama", val: "Aylık grafiksel büyüme ve dönüşüm analizi" }
    ]
  },
  {
    id: "icerik-uretimi",
    title: "İçerik Üretimi & Prodüksiyon",
    category: "Kreatif & Prodüksiyon",
    iconName: "Video",
    shortDesc: "Profesyonel kurumsal tanıtım filmleri, 4K drone hava çekimleri, ürün ve fabrika fotoğrafçılığı, yaratıcı video kurgu.",
    highlight: "Sinematik 4K Çekimler & Etkileyici Hikayeler",
    features: [
      "Kurumsal Şirket ve Fabrika Tanıtım Filmleri",
      "Sivil Havacılık Lisanslı 4K Drone Hava Çekimleri",
      "Stüdyo ve Mekan Ürün, Mimari ve Katalog Fotoğrafçılığı",
      "Reels, Shorts ve TikTok İçin Dinamik Dikey Video Prodüksiyonu",
      "Profesyonel Seslendirme (Voice-Over) ve Ses Tasarımı",
      "Renk Düzenleme (Color Grading), 2D/3D Hareketli Grafik (Motion Art)"
    ],
    fullDesc: "Görsel hafızalarda kalıcı iz bırakın. Yüksek prodüksiyon kalitesine sahip kamera ekipmanlarımız, lisanslı drone operatörlerimiz ve usta kurgu ekibimizle markanızın hikayesini büyüleyici bir sinematik deneyime dönüştürüyoruz.",
    specs: [
      { key: "Kamera & Ekipman", val: "Sony FX serisi, 4K 10-bit Raw, Gimbal Stabilizasyon" },
      { key: "Hava Çekimi", val: "DJI Mavic / Inspire 4K HDR Drone Sistemleri" },
      { key: "Işık & Ses", val: "Kablosuz yaka mikrofonları, stüdyo softbox aydınlatma" },
      { key: "Kurgu Yazılımları", val: "DaVinci Resolve Studio, Adobe Premiere, After Effects" }
    ]
  }
];

export const whyChooseUsData = [
  {
    icon: "Layers",
    title: "Uçtan Uca Entegre Çözümler",
    desc: "Güvenlikten otomasyona, bilişimden dijital medyaya kadar şirketinize tek çatı altında eksiksiz teknolojik çözüm ortaklığı."
  },
  {
    icon: "ShieldAlert",
    title: "Yerinde ve Hızlı Müdahale",
    desc: "Tatvan ve çevre illerde saha ekiplerimizle en kritik sistem arızalarında dakikalar içinde yanınızdayız."
  },
  {
    icon: "Award",
    title: "Orijinal ve Sertifikalı Donanım",
    desc: "Yalnızca global standartlara uygun, faturalı, üretici garantili ve test edilmiş kaliteli ekipmanlar kullanıyoruz."
  },
  {
    icon: "UsersCheck",
    title: "Deneyimli Mühendis & Uzman Kadro",
    desc: "Bilişim, güvenlik ve otomasyon alanında sertifikalı, yenilikleri sürekli takip eden eğitimli teknik personel."
  },
  {
    icon: "Headphones",
    title: "7/24 Kesintisiz Teknik Destek",
    desc: "Mesai saatleriyle sınırlı kalmayan acil nöbetçi ve uzaktan destek hizmetimizle işiniz asla duraksamaz."
  },
  {
    icon: "Handshake",
    title: "Şeffaf Fiyat & Güvenilir Ortaklık",
    desc: "Gizli maliyetler olmadan, keşif sonrası net tekliflendirme ve sözleşmeli resmi kurumsal güvence."
  }
];

export const workProcess = [
  {
    step: "01",
    title: "Ücretsiz Keşif & İhtiyaç Analizi",
    desc: "Uzmanlarımız işletmenizi, sahanızı veya dijital altyapınızı yerinde inceler, eksikleri ve hedefleri belirler."
  },
  {
    step: "02",
    title: "Mühendislik & Şeffaf Projelendirme",
    desc: "İhtiyacınıza en uygun bütçe-performans dengesine sahip kurumsal çözüm planı ve resmi teklif hazırlanır."
  },
  {
    step: "03",
    title: "Profesyonel Kurulum & Entegrasyon",
    desc: "Belirlenen takvim doğrultusunda titiz montaj, yazılım kurulumu ve sistem testleri eksiksiz tamamlanır."
  },
  {
    step: "04",
    title: "Kullanıcı Eğitimi & Sürekli Destek",
    desc: "Sistem personelinize teslim edilir, detaylı eğitim verilir ve 7/24 garanti & bakım güvencemiz başlar."
  }
];

export const portfolioProjects = [
  {
    title: "Tekstil Üretim Tesisi 64 Kameralı Akıllı İzleme",
    category: "Kamera Güvenlik",
    location: "Bitlis Sanayi Bölgesi",
    desc: "64 adet 4K Gece Görüşlü IP kamera, plaka okuma bariyer sistemi ve RAID yedekli NVR merkezi altyapısı.",
    results: "%100 Saha Hakimiyeti & 60 Gün Kesintisiz Kayıt"
  },
  {
    title: "Bölge Hastanesi Ağ & Sunucu Altyapı Yenileme",
    category: "Bilgisayar & Donanım",
    location: "Tatvan",
    desc: "Fiber optik omurga, 10G patch panel kablolama, yedekli server mimarisi ve siber güvenlik duvarı kurulumu.",
    results: "Sıfır Kesinti & %300 Hız Artışı"
  },
  {
    title: "Gıda Paketleme Tesisi SCADA & PLC Otomasyonu",
    category: "Otomasyon Sistemleri",
    location: "Van / Tatvan",
    desc: "Siemens S7-1200 PLC tabanlı tam otomatik tartım, paketleme ve uzaktan dokunmatik HMI panel yönetimi.",
    results: "Üretim Hızında %45 Artış & Sıfır Hata"
  },
  {
    title: "Toptan Dağıtım Şirketi Özel ERP & Depo Yazılımı",
    category: "Endüstriyel Yazılımlar",
    location: "Doğu Anadolu Dağıtım Ağı",
    desc: "Barkodlu el terminalleri ile entegre, anlık stok takip eden, muhasebe köprülü özel bulut ERP platformu.",
    results: "Sayım Süresinde 4 Kat Hızlanma"
  },
  {
    title: "Lüks Rezidans & İş Merkezi Tanıtım Filmi & Drone",
    category: "İçerik Üretimi",
    location: "Van Gölü Sahili",
    desc: "4K sinematik hava çekimi, iç mekan mimari fotoğrafçılık ve sosyal medya viral video kurgusu.",
    results: "450K+ İzlenme & Rekor Ön Satış"
  },
  {
    title: "Bölgesel Zincir Mağazalar Sosyal Medya Yönetimi",
    category: "Sosyal Medya",
    location: "Bitlis / Tatvan / Muş",
    desc: "Kreatif görsel tasarımlar, Meta reklam dönüşüm optimizasyonu ve aylık büyüme stratejisi.",
    results: "3 Ayda %280 Etkileşim Artışı"
  }
];

export const testimonials = [
  {
    name: "Murat Çelik",
    company: "Çelikler Grup Sanayi A.Ş.",
    role: "Fabrika Müdürü",
    comment: "Üretim tesisimizin tüm kamera ve otomasyon panolarını Enomra ekibi yaptı. Azat Bey ve ekibinin titizliği, zamanında teslimatı ve satış sonrası ilgisi gerçekten Doğu Anadolu'da örnek gösterilecek seviyede.",
    rating: 5
  },
  {
    name: "Hakan Yıldırım",
    company: "Yıldırım İnşaat & Proje",
    role: "Yönetim Kurulu Başkanı",
    comment: "İş merkezimizin hem güvenlik mimarisini hem de kurumsal tanıtım filmini Enomra'ya emanet ettik. Drone çekimleri ve montaj kalitesi ulusal kanallarla yarışır nitelikteydi. Kesinlikle tavsiye ederim.",
    rating: 5
  },
  {
    name: "Selin Erdem",
    company: "Erdemler Lojistik",
    role: "Operasyon Direktörü",
    comment: "Bilgisayar ağımızın sürekli çökmesinden bıkmıştık. Enomra ile kurumsal bakım anlaşması yaptık, sunucularımızı baştan kurdular. 1 yıldır tıkır tıkır çalışıyor, herhangi bir sorunda 15 dakikada bağlanıp çözüyorlar.",
    rating: 5
  }
];

export const faqList = [
  {
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "Merkezimiz Bitlis / Tatvan'da bulunmaktadır. Tatvan, Bitlis, Ahlat, Güroymak, Van, Muş başta olmak üzere tüm Doğu Anadolu bölgesine yerinde saha keşfi ve kurulum hizmeti sağlıyoruz. Endüstriyel Yazılım ve Sosyal Medya Yönetimi hizmetlerimizde ise tüm Türkiye geneline uzaktan kesintisiz hizmet vermekteyiz."
  },
  {
    q: "Kamera ve güvenlik sistemlerinde uzaktan izleme nasıl çalışır?",
    a: "Kurduğumuz tüm modern IP ve AHD sistemler; iOS, Android, Windows ve Mac uygulamalarıyla entegredir. İnternet bağlantınız olan dünyanın her yerinden sabit IP gerektirmeden, şifreli P2P bulut bağlantısıyla akıllı telefonunuzdan kameralarınızı anlık ve geçmişe dönük izleyebilirsiniz."
  },
  {
    q: "Kurumsal bilgisayar bakım anlaşması neleri kapsar?",
    a: "Bakım anlaşmamız kapsamında; düzenli aylık periyodik donanım/yazılım kontrolleri, virüs ve siber güvenlik taramaları, sunucu yedekleme doğrulaması, mesai saatlerinde sınırsız uzaktan destek ve acil durumlarda yerinde fiziksel müdahale garantisi yer alır."
  },
  {
    q: "Özel endüstriyel yazılım geliştirme süreci ne kadar sürer?",
    a: "Projenin kapsamına göre değişmekle birlikte; küçük ve orta ölçekli depo/üretim takip modülleri ortalama 2-4 hafta içinde teslim edilirken, kapsamlı ERP/CRM entegrasyonları ihtiyaç analizine göre 1-3 ay arasında anahtar teslim olarak canlıya alınır."
  },
  {
    q: "Ücretsiz keşif hizmetiniz var mı?",
    a: "Evet! Kamera sistemleri, otomasyon ve bilişim altyapısı projeleriniz için Tatvan ve çevre ilçelerde yerinize gelerek tamamen ücretsiz keşif yapıyor ve bütçenize en uygun mühendislik raporunu sunuyoruz."
  },
  {
    q: "Arıza durumunda acil teknik destek alabilir miyim?",
    a: "Kesinlikle. 0532 678 75 13 numaralı telefonumuz ve 7/24 WhatsApp hattımız üzerinden acil nöbetçi teknik destek birimimize anında ulaşabilirsiniz."
  }
];
