// CV içeriği (TR + EN). Sitede yayımlanan PDF'ler bu dosyadan üretilir.
// Telefon ve referans bilgileri burada YOK: yalnızca `npm run cv -- --private <dosya.json>`
// ile verilen ve depoya girmeyen yerel bir dosyadan okunur (bkz. scripts/build-cv.mjs).

export const SITE = 'https://melisayalcinkaya.github.io/portfolio/'

const shared = {
  name: 'Melisa YALÇINKAYA',
  email: 'melisa.yky2001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/melisa-yal%C3%A7%C4%B1nkaya-273966233',
  github: 'https://github.com/melisayalcinkaya',
  site: SITE,
}

export const cv = {
  tr: {
    ...shared,
    lang: 'tr',
    title: 'Junior Software Engineer',
    location: 'Erzurum, Türkiye',
    siteLabel: 'Portfolyo',
    sections: {
      summary: 'Özet',
      work: 'İş Deneyimi',
      education: 'Eğitim',
      skills: 'Yetenekler',
      projects: 'Projeler',
      certs: 'Sertifikalar',
      publications: 'Akademik Yayınlar',
      references: 'Referanslar',
    },
    techLabel: 'Teknolojiler',
    referencesOnRequest: 'Talep üzerine sağlanır.',
    summary:
      'Atatürk Üniversitesi Yazılım Mühendisliği 2026 mezunu, LLM tabanlı yapay zekâ asistanı geliştirme deneyimi olan junior yazılım mühendisi. Django, Django REST Framework ve React ile uçtan uca web uygulamaları; Python ile makine öğrenmesi ve doğal dil işleme modelleri geliştirir. Canlı demosu bulunan QR menü ve QR yoklama sistemlerinde API tasarımı, güvenlik, otomatik testler (CI) ve Docker ile yayın süreçlerini yürüttü. Sahte haber tespiti üzerine yazılan bildiride %99,24 doğruluğa ulaşan bir sınıflandırma modeli geliştirdi.',
    work: [
      {
        title: 'Yapay Zekâ Geliştirici',
        org: 'BRN Teknoloji',
        date: '09/2026 – 10/2026',
        place: 'Uzaktan, yarı zamanlı',
        points: [
          'Medikal ürün ihracatı yapan bir şirketin iç iletişimi için, toplantı transkriptlerinden yapılandırılmış kayıt üreten ve görevleri ardışık toplantılarda takip eden yapay zekâ asistanı geliştirdi (OpenAI API, Pydantic, Streamlit).',
          'Model çıktısını şema ile doğrulayan ve personel onayından geçiren bir akış kurdu; onaylanan kayıtları Notion ile iki yönlü senkronize etti.',
          "Prompt sürümlerini sentetik senaryolarda beşer çalıştırmayla ölçerek kusursuz sonuç oranını %60'tan %100'e çıkardı.",
        ],
      },
      {
        title: 'Stajyer',
        org: 'Berk Yazılım / Barkodcu',
        url: 'https://berkyazilim.com/',
        date: '07/2025 – 09/2025',
        place: 'Erzurum, Türkiye',
        points: [
          'Restoran otomasyonları ve barkod çözümleri geliştiren firmada, "QR Menü Uygulaması" projesinin full-stack geliştirilmesinde görev aldı.',
          'Web tabanlı müşteri arayüzleri, backend API servisleri ve masaüstü yönetim araçları geliştirerek müşteri deneyimini dijitalleştiren operasyonları yürüttü.',
        ],
      },
    ],
    education: [
      {
        title: 'Lisans, Yazılım Mühendisliği',
        org: 'Atatürk Üniversitesi',
        date: '2022 – 2026',
        place: 'Erzurum, Türkiye',
        points: [
          "Mezun. Lisans eğitiminin ilk yılı Gümüşhane Üniversitesi'nde (2021 – 2022) tamamlandı; agno ile yatay geçiş yapılarak son 3 yılı burada okundu.",
        ],
      },
    ],
    skills: [
      ['Programlama Dilleri', 'Python, JavaScript, HTML5, CSS'],
      ['Veri Bilimi & Yapay Zeka', 'Makine Öğrenmesi, Doğal Dil İşleme (NLP), Derin Öğrenme, LLM ve Prompt Mühendisliği, OpenAI API, TensorFlow.js'],
      ['Web Geliştirme', 'Django, Django REST Framework, React.js, RESTful API, JWT'],
      ['Araçlar', 'Git, GitHub, GitHub Actions (CI), Docker, pytest, Streamlit, Notion API, PySide6 / PyQt5, Figma, Unity, Claude'],
    ],
    projects: [
      {
        name: 'Kurumsal İletişim Asistanı',
        tech: 'Python, OpenAI API, Pydantic, Streamlit, Notion API',
        points: [
          'Toplantı transkriptlerinden yapılandırılmış kayıt üreten, görev değişikliklerini mevcut görev kaydına bağlayan ve onaylanan kayıtları Notion ile iki yönlü senkronize eden insan onaylı bir LLM uygulaması geliştirildi.',
          'OpenAI Responses API ve Pydantic şemasıyla (strict mode) doğrulanabilir JSON çıktı alındı; her görev ve karar dayandığı transkript satırlarını gösterir.',
          'Değerlendirmede referans cevaplar, sürüm başına 5 tekrarlı çalıştırma ve kaynak satırlarının Jaccard benzerliğiyle görev eşleştirme kullanıldı; görülmemiş senaryoda %100 kusursuz sonuç alındı.',
        ],
      },
      {
        name: 'QR Menü',
        url: 'https://github.com/melisayalcinkaya/qr_menus',
        tech: 'Django REST Framework, React.js, Docker, PySide6',
        points: [
          'Restoranlar için masaya özel QR kodla açılan, garson çağırma ve hesap isteme özellikli dijital menü ve işletme paneli geliştirildi; 14 alerjen filtresi, TR/EN içerik ve üç menü teması sunuldu.',
          'API; JWT kimlik doğrulama, sahiplik bazlı yetkilendirme ve hız sınırlarıyla korundu. 90+ otomatik test ve GitHub Actions CI ile %90 kapsam alt sınırı sağlandı.',
          'Aynı API ile çalışan PySide6 masaüstü çağrı ekranı geliştirildi ve Windows .exe olarak otomatik yayımlandı. Canlı demo: qr-menus.onrender.com',
        ],
      },
      {
        name: 'QR Kod Tabanlı Yoklama Sistemi',
        url: 'https://github.com/melisayalcinkaya/qr_yoklama',
        tech: 'Django, Python, SQLite, Docker',
        points: [
          '5 saniyede yenilenen ve en fazla 15 saniye geçerli QR kodlar, isteğe bağlı konum doğrulama ve cihaz başına tek kayıt ile kopyaya dayanıklı bir yoklama sistemi geliştirildi.',
          'Canlı katılım listesi, Excel çıktısı ve devam istatistikleri eklendi. Canlı demo: qr-yoklama-e9u9.onrender.com',
        ],
      },
      {
        name: 'LockNet',
        tech: 'JavaScript, TensorFlow.js, NLP, Chrome Extensions API',
        points: [
          'Web sayfalarındaki toksik metinleri NLP teknikleriyle gerçek zamanlı tespit edip sansürleyen gizlilik odaklı bir Chrome eklentisi geliştirildi.',
          'Model tarayıcı içinde çevrimdışı çalıştırılarak verilerin dış sunucuya aktarılması engellendi.',
        ],
      },
      {
        name: 'ATASENG Kulüp Web Sitesi',
        url: 'https://www.ataseng.com/',
        tech: 'React.js, Figma',
        points: [
          'Bir öğrenci kulübü için kullanıcı deneyimi odaklı, modern bir web platformu oluşturuldu.',
          "Figma'da hazırlanan arayüz tasarımları React.js ile dinamik ve etkileşimli bir yapıya dönüştürüldü.",
        ],
      },
    ],
    certs: [
      ['Yapay Zeka & Veri Bilimi', 'Python ile Makine Öğrenmesi Uygulamaları, Derin Öğrenmeye Giriş, Yapay Zekaya Giriş, Makine Öğrenmesi — BTK Akademi'],
      ['Sistem & Oyun Geliştirme', 'İşletim Sistemlerine Giriş, Unity ile Dijital Oyun Geliştirmeye Giriş — BTK Akademi'],
      ['Web & Yazılım Geliştirme', 'HTML5 ile Web Geliştirme, CSS Temelleri — BTK Akademi'],
    ],
    publications: [
      {
        name: 'Tf-Idf Vektör Modeli ve Yapay Zekâ Teknikleriyle Sahte Haber Tespiti',
        url: 'https://as-proceeding.com/index.php/icada/home',
        meta: 'Karcıoğlu, A. A., Kara, Ş., & Yalçınkaya, M. — Bildiri, ICADA — 14/03/2024',
        points: [
          'Toplumsal bilgi kirliliğini önlemek amacıyla ISOT veri seti üzerinde metin madenciliği ve ön işleme teknikleri uygulanarak makine öğrenmesi destekli bir sınıflandırma aracı geliştirildi.',
          'K=5 çapraz doğrulama ve 70/30 veri ayrımı stratejileriyle test edilen dört algoritma arasından Karar Ağaçları modeli ile %99,24 doğruluk oranı elde edildi.',
        ],
      },
    ],
  },

  en: {
    ...shared,
    lang: 'en',
    title: 'Junior Software Engineer',
    location: 'Erzurum, Türkiye',
    siteLabel: 'Portfolio',
    sections: {
      summary: 'Summary',
      work: 'Work Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      certs: 'Certificates',
      publications: 'Publications',
      references: 'References',
    },
    techLabel: 'Technologies',
    referencesOnRequest: 'Available on request.',
    summary:
      'Junior software engineer, graduated in Software Engineering from Atatürk University in 2026, with recent experience building LLM-based AI assistants. Builds end-to-end web applications with Django, Django REST Framework and React, and machine learning and natural language processing models with Python. Owned API design, security, automated testing (CI) and Docker deployment for QR menu and QR attendance systems that run as live demos. Co-authored a conference paper on fake news detection with a classifier reaching 99.24% accuracy.',
    work: [
      {
        title: 'AI Developer',
        org: 'BRN Teknoloji',
        date: '09/2026 – 10/2026',
        place: 'Remote, part-time',
        points: [
          'Built an AI assistant for the internal communication of a medical products exporter that turns meeting transcripts into structured records and tracks tasks across meetings (OpenAI API, Pydantic, Streamlit).',
          'Designed a schema-validated, human-approved flow; approved records sync both ways with Notion.',
          'Evaluated prompt versions with five runs per synthetic scenario, raising the flawless-run rate from 60% to 100%.',
        ],
      },
      {
        title: 'Intern',
        org: 'Berk Yazılım / Barkodcu',
        url: 'https://berkyazilim.com/',
        date: '07/2025 – 09/2025',
        place: 'Erzurum, Türkiye',
        points: [
          'At a company building restaurant automation and barcode solutions, worked on the full-stack development of the "QR Menu" application.',
          'Built web-based customer interfaces, backend API services and desktop management tools that digitalised customer-facing operations.',
        ],
      },
    ],
    education: [
      {
        title: 'BSc, Software Engineering',
        org: 'Atatürk University',
        date: '2022 – 2026',
        place: 'Erzurum, Türkiye',
        points: ['Graduated. Completed the first year at Gümüşhane University (2021 – 2022) and transferred based on GPA for the final three years.'],
      },
    ],
    skills: [
      ['Programming Languages', 'Python, JavaScript, HTML5, CSS'],
      ['Data Science & AI', 'Machine Learning, Natural Language Processing (NLP), Deep Learning, LLMs and Prompt Engineering, OpenAI API, TensorFlow.js'],
      ['Web Development', 'Django, Django REST Framework, React.js, RESTful APIs, JWT'],
      ['Tools', 'Git, GitHub, GitHub Actions (CI), Docker, pytest, Streamlit, Notion API, PySide6 / PyQt5, Figma, Unity, Claude'],
    ],
    projects: [
      {
        name: 'Corporate Communication Assistant',
        tech: 'Python, OpenAI API, Pydantic, Streamlit, Notion API',
        points: [
          'Built a human-in-the-loop LLM application that turns meeting transcripts into structured records, links task changes to the existing task registry and syncs approved records both ways with Notion.',
          'Used the OpenAI Responses API with a strict Pydantic schema for verifiable JSON output; every task and decision cites its transcript lines.',
          'Evaluated with reference answers, five repeated runs per prompt version and task matching by Jaccard similarity of source lines; reached 100% flawless runs on an unseen scenario.',
        ],
      },
      {
        name: 'QR Menu',
        url: 'https://github.com/melisayalcinkaya/qr_menus',
        tech: 'Django REST Framework, React.js, Docker, PySide6',
        points: [
          'Built a digital menu and owner panel for restaurants, opened from table-specific QR codes, with waiter calls and bill requests, filters for 14 allergen groups, Turkish/English content and three menu themes.',
          'Secured the API with JWT authentication, ownership-based authorisation and rate limits; 90+ automated tests and GitHub Actions CI enforce a 90% coverage floor.',
          'Built a PySide6 desktop call screen on the same API, released automatically as a Windows .exe. Live demo: qr-menus.onrender.com',
        ],
      },
      {
        name: 'QR Code Attendance System',
        url: 'https://github.com/melisayalcinkaya/qr_yoklama',
        tech: 'Django, Python, SQLite, Docker',
        points: [
          'Built a cheat-resistant attendance system with QR codes that refresh every 5 seconds and expire within 15, an optional location check and one check-in per device.',
          'Added a live attendance list, Excel export and attendance statistics. Live demo: qr-yoklama-e9u9.onrender.com',
        ],
      },
      {
        name: 'LockNet',
        tech: 'JavaScript, TensorFlow.js, NLP, Chrome Extensions API',
        points: [
          'Built a privacy-first Chrome extension that detects and censors toxic text on web pages in real time using NLP.',
          'The model runs offline in the browser, so no page content is sent to an external server.',
        ],
      },
      {
        name: 'ATASENG Club Website',
        url: 'https://www.ataseng.com/',
        tech: 'React.js, Figma',
        points: [
          'Created a modern, user-experience-focused web platform for a student club.',
          'Turned interface designs prepared in Figma into a dynamic, interactive React.js site.',
        ],
      },
    ],
    certs: [
      ['AI & Data Science', 'Machine Learning Applications with Python, Introduction to Deep Learning, Introduction to Artificial Intelligence, Machine Learning — BTK Akademi'],
      ['Systems & Game Development', 'Introduction to Operating Systems, Introduction to Game Development with Unity — BTK Akademi'],
      ['Web & Software Development', 'Web Development with HTML5, CSS Fundamentals — BTK Akademi'],
    ],
    publications: [
      {
        name: 'Fake News Detection with the Tf-Idf Vector Model and Artificial Intelligence Techniques',
        original: 'Tf-Idf Vektör Modeli ve Yapay Zekâ Teknikleriyle Sahte Haber Tespiti',
        url: 'https://as-proceeding.com/index.php/icada/home',
        meta: 'Karcıoğlu, A. A., Kara, Ş., & Yalçınkaya, M. — Conference paper, ICADA — 14/03/2024',
        points: [
          'To fight misinformation, built a machine-learning classifier using text mining and preprocessing techniques on the ISOT dataset.',
          'Of four algorithms tested with 5-fold cross-validation and a 70/30 split, the Decision Tree model reached 99.24% accuracy.',
        ],
      },
    ],
  },
}
