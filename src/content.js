// Sitedeki tüm metinler burada, iki dilde tutulur.
// Bileşenler yalnızca bu yapıyı okur; metin değiştirmek için JSX'e dokunmaya gerek yoktur.
// Gizlilik: telefon numarası ve referans bilgileri bilerek bu dosyada YOK (tests/content.test.js kontrol eder).

export const links = {
  email: 'melisa.yky2001@gmail.com',
  github: 'https://github.com/melisayalcinkaya',
  linkedin: 'https://www.linkedin.com/in/melisa-yal%C3%A7%C4%B1nkaya-273966233',
  cv: { tr: 'Melisa_Yalcinkaya_CV.pdf', en: 'Melisa_Yalcinkaya_CV_EN.pdf' },
}

const projectLinks = {
  qrMenu: {
    demo: 'https://qr-menus.onrender.com',
    code: 'https://github.com/melisayalcinkaya/qr_menus',
    desktop: 'https://github.com/melisayalcinkaya/qr-menu-desktop',
  },
  qrYoklama: {
    demo: 'https://qr-yoklama-e9u9.onrender.com',
    code: 'https://github.com/melisayalcinkaya/qr_yoklama',
  },
  ataseng: { site: 'https://www.ataseng.com/' },
}

const tr = {
  meta: {
    title: 'Melisa Yalçınkaya | Junior Software Engineer',
    description:
      'Melisa Yalçınkaya: Django, React ve makine öğrenmesi ile çalışan junior yazılım mühendisi. Projeler, deneyim ve iletişim.',
  },
  nav: {
    label: 'Ana menü',
    projects: 'Projeler',
    experience: 'Deneyim',
    skills: 'Yetenekler',
    contact: 'İletişime geç',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    language: 'Switch to English',
    languageShort: 'EN',
    themeToDark: 'Koyu temaya geç',
    themeToLight: 'Açık temaya geç',
    skip: 'İçeriğe geç',
  },
  hero: {
    status: 'Yeni mezun, iş tekliflerine açık',
    hello: 'Merhaba, ben Melisa.',
    lead:
      'Junior yazılım mühendisiyim. Restoranlar, sınıflar ve tarayıcılar için web uygulamaları ve makine öğrenmesi modelleri geliştiriyorum.',
    primary: 'Projeleri gör',
    cv: "CV'yi indir",
  },
  about: {
    title: 'Hakkımda',
    text: [
      "Atatürk Üniversitesi Yazılım Mühendisliği bölümünden 2026'da mezun oldum. Django ve React ile uçtan uca web uygulamaları, Python ile makine öğrenmesi modelleri geliştiriyorum.",
      "Mezuniyetin ardından BRN Teknoloji'de uzaktan ve yarı zamanlı çalışarak toplantı kayıtlarını düzenleyen ve görevleri takip eden bir yapay zekâ asistanı geliştirdim. Berk Yazılım'daki stajımda ise restoranlar için QR menü sisteminin web arayüzü, API'si ve masaüstü yönetim aracı üzerinde çalıştım. Sahte haber tespiti üzerine yazdığımız bildiride Karar Ağaçları modeliyle %99,24 doğruluğa ulaştık.",
    ],
    cards: [
      {
        key: 'web',
        title: 'Web uygulamaları',
        text: 'Django REST API, React arayüz, Docker ile yayın ve otomatik testler.',
      },
      {
        key: 'ml',
        title: 'Makine öğrenmesi',
        text: 'Metin sınıflandırma, doğal dil işleme ve tarayıcıda çalışan modeller.',
      },
    ],
  },
  projects: {
    title: 'Projeler',
    intro: 'Canlı demosu olanları hemen deneyebilirsin. Ücretsiz sunucu uykudaysa ilk açılış bir dakika kadar sürebilir.',
    demo: 'Canlı demo',
    code: 'Kaynak kod',
    site: 'Siteyi aç',
    tech: 'Teknolojiler',
    items: [
      {
        key: 'qrMenu',
        tone: 'lavender',
        featured: true,
        title: 'QR Menü',
        summary:
          'Restoran ve kafeler için QR kodlu dijital menü. Müşteri masadaki kodu okutur, menüyü kendi dilinde görür ve tek dokunuşla garson çağırır.',
        points: [
          'Masaya özel QR ile garson çağırma ve hesap isteme, isteğin canlı durumu',
          '14 alerjen grubuna göre filtre, Türkçe ve İngilizce menü, üç farklı tema',
          'İşletme paneli: canlı çağrılar, menü düzenleme, masa kartları PDF, istatistikler',
        ],
        tech: ['Django REST Framework', 'React', 'JWT', 'Docker'],
        demoNote: 'Panel için demo hesabı: demo / demo-sifre-2026',
        extra: {
          title: 'Masaüstü çağrı ekranı',
          text: 'Aynı API ile çalışan PySide6 uygulaması. Kasada sistem tepsisinde bekler, yeni çağrıda zil çalar. Windows için .exe olarak indirilebilir.',
          label: 'Masaüstü uygulaması',
        },
        links: projectLinks.qrMenu,
      },
      {
        key: 'assistant',
        tone: 'peach',
        featured: true,
        title: 'Kurumsal İletişim Asistanı',
        summary:
          "Toplantı transkriptlerinden yapay zekâ ile yapılandırılmış toplantı kaydı üreten, görevleri ardışık toplantılarda takip eden ve onaylanan kayıtları Notion'a aktaran bir uygulama. BRN Teknoloji'de geliştirdim.",
        points: [
          'Model görev değişikliklerini (yeni, güncellendi, tamamlandı, iptal) mevcut görev kaydına bağlar; her madde dayandığı transkript satırlarını gösterir',
          'Hiçbir model çıktısı personel onayı olmadan kayda geçmez; kurallar kayıtta olmayan ya da kapalı bir görevin değiştirilmesini engeller',
          "Prompt sürümleri referans cevaplarla ölçüldü: kusursuz çalıştırma oranı %60'tan %100'e çıktı, görülmemiş senaryoda da %100",
        ],
        tech: ['Python', 'OpenAI API', 'Pydantic', 'Streamlit', 'Notion API'],
        privateNote: 'Kaynak kodu özel depoda',
        links: {},
      },
      {
        key: 'qrYoklama',
        tone: 'sky',
        title: 'QR Yoklama',
        summary:
          'Derste yoklamayı saniyeler içinde alan, kopya çekilmesi zor bir sistem. Öğretmen QR kodu yansıtır, öğrenciler telefonla okutur.',
        points: [
          'Kod 5 saniyede bir değişir ve en fazla 15 saniye geçerlidir; fotoğrafını paylaşmak işe yaramaz',
          'İsteğe bağlı konum doğrulama ve cihaz başına tek kayıt',
          'Canlı katılım listesi, Excel çıktısı ve devam istatistikleri',
        ],
        tech: ['Django', 'Python', 'SQLite', 'Docker'],
        demoNote: 'Demo hesabı: demo / demo-sifre-2026',
        links: projectLinks.qrYoklama,
      },
      {
        key: 'lockNet',
        tone: 'butter',
        title: 'LockNet',
        summary:
          'Web sayfalarındaki toksik metinleri gerçek zamanlı bulup sansürleyen, gizlilik odaklı bir Chrome eklentisi.',
        points: [
          'Model tarayıcının içinde, çevrimdışı çalışır; okunan metin hiçbir sunucuya gönderilmez',
          'Doğal dil işleme ile sayfa yüklenirken metin sınıflandırma',
        ],
        tech: ['JavaScript', 'TensorFlow.js', 'NLP', 'Chrome Extensions API'],
        privateNote: 'Kaynak kodu özel depoda',
        links: {},
      },
      {
        key: 'ataseng',
        tone: 'paper',
        title: 'ATASENG kulüp sitesi',
        summary: 'Bir öğrenci kulübü için kullanıcı deneyimi odaklı, modern bir web sitesi.',
        points: ["Figma'da tasarlanan arayüz, React ile etkileşimli bir siteye dönüştürüldü"],
        tech: ['React', 'Figma'],
        links: projectLinks.ataseng,
      },
    ],
  },
  experience: {
    title: 'Deneyim ve eğitim',
    workTitle: 'İş deneyimi',
    eduTitle: 'Eğitim',
    work: [
      {
        role: 'Yapay Zekâ Geliştirici',
        org: 'BRN Teknoloji',
        place: 'Uzaktan, yarı zamanlı',
        date: 'Eylül – Ekim 2026',
        points: [
          'Medikal ürün ihracatı yapan bir şirketin iç iletişimi için, toplantı transkriptlerinden yapılandırılmış kayıt üreten ve görevleri ardışık toplantılarda takip eden bir yapay zekâ asistanı geliştirdim.',
          'Model çıktısını Pydantic şemasıyla doğrulayan ve personel onayından geçiren bir akış kurdum; onaylanan kayıtları Notion ile iki yönlü senkronize ettim.',
          "Prompt sürümlerini sentetik senaryolarda beşer kez çalıştırarak ölçtüm; kusursuz sonuç oranını %60'tan %100'e çıkardım.",
        ],
      },
      {
        role: 'Stajyer',
        org: 'Berk Yazılım / Barkodcu',
        url: 'https://berkyazilim.com/',
        place: 'Erzurum',
        date: 'Temmuz – Eylül 2025',
        points: [
          'Restoran otomasyonları ve barkod çözümleri geliştiren firmada "QR Menü Uygulaması" projesinin full-stack geliştirilmesinde görev aldım.',
          'Web tabanlı müşteri arayüzleri, backend API servisleri ve masaüstü yönetim araçları geliştirdim.',
        ],
      },
    ],
    education: [
      {
        role: 'Lisans, Yazılım Mühendisliği',
        org: 'Atatürk Üniversitesi',
        place: 'Erzurum',
        date: '2022 – 2026',
        note: "Mezun. İlk yılı Gümüşhane Üniversitesi'nde okudum (2021–2022), not ortalamasıyla yatay geçiş yaptım.",
      },
    ],
  },
  skills: {
    title: 'Yetenekler',
    groups: [
      { name: 'Programlama dilleri', items: ['Python', 'JavaScript', 'HTML5', 'CSS'] },
      { name: 'Web geliştirme', items: ['Django', 'Django REST Framework', 'React', 'REST API'] },
      {
        name: 'Veri bilimi ve yapay zekâ',
        items: ['Makine öğrenmesi', 'Doğal dil işleme (NLP)', 'Derin öğrenme', 'LLM ve prompt mühendisliği', 'OpenAI API', 'TensorFlow.js'],
      },
      {
        name: 'Araçlar',
        items: ['Git ve GitHub', 'GitHub Actions', 'Docker', 'pytest', 'Streamlit', 'Notion API', 'PySide6 / PyQt5', 'Figma', 'Unity', 'Claude'],
      },
    ],
    certTitle: 'Sertifikalar',
    certIssuer: 'BTK Akademi',
    certs: [
      {
        name: 'Yapay zekâ ve veri bilimi',
        items: [
          'Python ile Makine Öğrenmesi Uygulamaları',
          'Derin Öğrenmeye Giriş',
          'Yapay Zekaya Giriş',
          'Makine Öğrenmesi',
        ],
      },
      { name: 'Sistem ve oyun geliştirme', items: ['İşletim Sistemlerine Giriş', 'Unity ile Dijital Oyun Geliştirmeye Giriş'] },
      { name: 'Web geliştirme', items: ['HTML5 ile Web Geliştirme', 'CSS Temelleri'] },
    ],
  },
  publication: {
    title: 'Akademik yayın',
    kind: 'Bildiri',
    name: 'Tf-Idf Vektör Modeli ve Yapay Zekâ Teknikleriyle Sahte Haber Tespiti',
    authors: 'Karcıoğlu, A. A., Kara, Ş. ve Yalçınkaya, M.',
    date: '14 Mart 2024',
    points: [
      'Bilgi kirliliğini önlemek için ISOT veri seti üzerinde metin madenciliği ve ön işleme teknikleriyle makine öğrenmesi destekli bir sınıflandırma aracı geliştirildi.',
      'K=5 çapraz doğrulama ve 70/30 veri ayrımıyla test edilen dört algoritma arasında Karar Ağaçları modeli %99,24 doğruluğa ulaştı.',
    ],
    link: 'https://as-proceeding.com/index.php/icada/home',
    linkLabel: 'ICADA bildiri kitabı',
  },
  contact: {
    title: 'Birlikte çalışalım',
    text: 'Junior yazılım geliştirici pozisyonlarıyla ilgileniyorum. Bana ulaşmanın en kolay yolu e-posta.',
    location: 'Erzurum, Türkiye',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
  },
  footer: {
    built: 'React ve Vite ile yapıldı. Çizimler bu site için hazırlandı.',
    source: 'Sitenin kaynak kodu',
  },
}

const en = {
  meta: {
    title: 'Melisa Yalçınkaya | Junior Software Engineer',
    description:
      'Melisa Yalçınkaya: junior software engineer working with Django, React and machine learning. Projects, experience and contact.',
  },
  nav: {
    label: 'Main menu',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Türkçeye geç',
    languageShort: 'TR',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    skip: 'Skip to content',
  },
  hero: {
    status: 'Recent graduate, open to work',
    hello: "Hi, I'm Melisa.",
    lead:
      "I'm a junior software engineer. I build web applications and machine learning models for restaurants, classrooms and browsers.",
    primary: 'See projects',
    cv: 'Download CV',
  },
  about: {
    title: 'About me',
    text: [
      'I graduated in Software Engineering from Atatürk University in 2026. I build end-to-end web applications with Django and React, and machine learning models with Python.',
      'After graduating I worked remotely and part-time at BRN Teknoloji, building an AI assistant that organises meeting records and tracks tasks. During my internship at Berk Yazılım I worked on the web interface, API and desktop management tool of a QR menu system for restaurants. In our conference paper on fake news detection, a Decision Tree model reached 99.24% accuracy.',
    ],
    cards: [
      {
        key: 'web',
        title: 'Web applications',
        text: 'Django REST APIs, React interfaces, Docker deployments and automated tests.',
      },
      {
        key: 'ml',
        title: 'Machine learning',
        text: 'Text classification, natural language processing and models that run in the browser.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro: 'Projects with a live demo are ready to try. If the free server is asleep, the first load can take about a minute.',
    demo: 'Live demo',
    code: 'Source code',
    site: 'Open site',
    tech: 'Technologies',
    items: [
      {
        key: 'qrMenu',
        tone: 'lavender',
        featured: true,
        title: 'QR Menu',
        summary:
          'A QR code menu for restaurants and cafés. Guests scan the code on their table, read the menu in their language and call a waiter with one tap.',
        points: [
          'Table-specific QR codes for calling a waiter or asking for the bill, with live request status',
          'Filters for 14 allergen groups, Turkish and English menus, three visual themes',
          'Owner panel: live calls, menu editor, printable table cards (PDF), statistics',
        ],
        tech: ['Django REST Framework', 'React', 'JWT', 'Docker'],
        demoNote: 'Demo account for the panel: demo / demo-sifre-2026',
        extra: {
          title: 'Desktop call screen',
          text: 'A PySide6 app on the same API. It waits in the system tray at the till and rings on every new call. Available as a Windows .exe.',
          label: 'Desktop app',
        },
        links: projectLinks.qrMenu,
      },
      {
        key: 'assistant',
        tone: 'peach',
        featured: true,
        title: 'Corporate Communication Assistant',
        summary:
          'An app that uses AI to turn meeting transcripts into structured meeting records, tracks tasks across consecutive meetings and sends approved records to Notion. Built at BRN Teknoloji.',
        points: [
          'The model links task changes (new, updated, completed, cancelled) to the existing task registry; every item shows the transcript lines it is based on',
          'No model output is saved without staff approval; rules block changes to tasks that are unknown or already closed',
          'Prompt versions were measured against reference answers: the flawless-run rate rose from 60% to 100%, and stayed at 100% on an unseen scenario',
        ],
        tech: ['Python', 'OpenAI API', 'Pydantic', 'Streamlit', 'Notion API'],
        privateNote: 'Source code is in a private repository',
        links: {},
      },
      {
        key: 'qrYoklama',
        tone: 'sky',
        title: 'QR Attendance',
        summary:
          'Takes class attendance in seconds and is hard to cheat. The teacher projects a QR code, students scan it with their phones.',
        points: [
          'The code changes every 5 seconds and is valid for at most 15, so sharing a photo of it does not work',
          'Optional location check and one check-in per device',
          'Live attendance list, Excel export and attendance statistics',
        ],
        tech: ['Django', 'Python', 'SQLite', 'Docker'],
        demoNote: 'Demo account: demo / demo-sifre-2026',
        links: projectLinks.qrYoklama,
      },
      {
        key: 'lockNet',
        tone: 'butter',
        title: 'LockNet',
        summary: 'A privacy-first Chrome extension that finds and censors toxic text on web pages in real time.',
        points: [
          'The model runs offline inside the browser; the text it reads is never sent to a server',
          'Text classification with natural language processing as the page loads',
        ],
        tech: ['JavaScript', 'TensorFlow.js', 'NLP', 'Chrome Extensions API'],
        privateNote: 'Source code is in a private repository',
        links: {},
      },
      {
        key: 'ataseng',
        tone: 'paper',
        title: 'ATASENG club website',
        summary: 'A modern, user-experience-focused website for a student club.',
        points: ['Interface designed in Figma and turned into an interactive React site'],
        tech: ['React', 'Figma'],
        links: projectLinks.ataseng,
      },
    ],
  },
  experience: {
    title: 'Experience and education',
    workTitle: 'Work experience',
    eduTitle: 'Education',
    work: [
      {
        role: 'AI Developer',
        org: 'BRN Teknoloji',
        place: 'Remote, part-time',
        date: 'September – October 2026',
        points: [
          'Built an AI assistant for the internal communication of a medical products exporter: it turns meeting transcripts into structured records and tracks tasks across consecutive meetings.',
          'Designed a flow where model output is validated with a Pydantic schema and approved by staff before it is saved; approved records sync both ways with Notion.',
          'Measured each prompt version with five runs per synthetic scenario and raised the flawless-run rate from 60% to 100%.',
        ],
      },
      {
        role: 'Intern',
        org: 'Berk Yazılım / Barkodcu',
        url: 'https://berkyazilim.com/',
        place: 'Erzurum',
        date: 'July – September 2025',
        points: [
          'At a company building restaurant automation and barcode solutions, I worked on the full-stack development of the "QR Menu" application.',
          'I built web-based customer interfaces, backend API services and desktop management tools.',
        ],
      },
    ],
    education: [
      {
        role: 'BSc, Software Engineering',
        org: 'Atatürk University',
        place: 'Erzurum',
        date: '2022 – 2026',
        note: 'Graduated. Spent my first year at Gümüşhane University (2021–2022), then transferred based on GPA.',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      { name: 'Programming languages', items: ['Python', 'JavaScript', 'HTML5', 'CSS'] },
      { name: 'Web development', items: ['Django', 'Django REST Framework', 'React', 'REST APIs'] },
      {
        name: 'Data science and AI',
        items: ['Machine learning', 'Natural language processing (NLP)', 'Deep learning', 'LLMs and prompt engineering', 'OpenAI API', 'TensorFlow.js'],
      },
      {
        name: 'Tools',
        items: ['Git and GitHub', 'GitHub Actions', 'Docker', 'pytest', 'Streamlit', 'Notion API', 'PySide6 / PyQt5', 'Figma', 'Unity', 'Claude'],
      },
    ],
    certTitle: 'Certificates',
    certIssuer: 'BTK Akademi',
    certs: [
      {
        name: 'AI and data science',
        items: [
          'Machine Learning Applications with Python',
          'Introduction to Deep Learning',
          'Introduction to Artificial Intelligence',
          'Machine Learning',
        ],
      },
      {
        name: 'Systems and game development',
        items: ['Introduction to Operating Systems', 'Introduction to Game Development with Unity'],
      },
      { name: 'Web development', items: ['Web Development with HTML5', 'CSS Fundamentals'] },
    ],
  },
  publication: {
    title: 'Publication',
    kind: 'Conference paper',
    name: 'Fake News Detection with the Tf-Idf Vector Model and Artificial Intelligence Techniques',
    originalName: 'Tf-Idf Vektör Modeli ve Yapay Zekâ Teknikleriyle Sahte Haber Tespiti',
    authors: 'Karcıoğlu, A. A., Kara, Ş., & Yalçınkaya, M.',
    date: 'March 14, 2024',
    points: [
      'To fight misinformation, we built a machine-learning classifier using text mining and preprocessing on the ISOT dataset.',
      'Of four algorithms tested with 5-fold cross-validation and a 70/30 split, the Decision Tree model reached 99.24% accuracy.',
    ],
    link: 'https://as-proceeding.com/index.php/icada/home',
    linkLabel: 'ICADA proceedings',
  },
  contact: {
    title: "Let's work together",
    text: "I'm looking for junior software developer roles. The easiest way to reach me is by email.",
    location: 'Erzurum, Türkiye',
    copy: 'Copy',
    copied: 'Copied',
  },
  footer: {
    built: 'Built with React and Vite. Illustrations drawn for this site.',
    source: 'Source code of this site',
  },
}

export const content = { tr, en }
