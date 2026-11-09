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
  lockNet: { code: 'https://github.com/melisayalcinkaya/LockNet_extension' },
  skinSavvy: {
    demo: 'https://melisayalcinkaya.github.io/SkinSavvy/',
    code: 'https://github.com/melisayalcinkaya/SkinSavvy',
  },
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
      'Junior yazılım mühendisiyim. LLM tabanlı asistanlar, tarayıcıda çalışan Türkçe dil modelleri ve uçtan uca web ve mobil uygulamalar geliştiriyorum.',
    primary: 'Projeleri gör',
    cv: "CV'yi indir",
  },
  about: {
    title: 'Hakkımda',
    text: [
      "Atatürk Üniversitesi Yazılım Mühendisliği bölümünden 2026'da mezun oldum. Yapay zekâ tarafında LLM ile yapılandırılmış çıktı, arşivde arama (RAG) ve Türkçe BERT ince ayarı; yazılım tarafında Django, FastAPI, React ve Flutter ile çalışıyorum.",
      "BRN Teknoloji'de kişisel verileri maskeleyen ve her kararı insan onayına bağlayan bir toplantı asistanı geliştirdim. Kendi projem LockNet, Türkçe hakaret içeren metinleri tarayıcının içinde çalışan bir BERT modeliyle bulanıklaştırıyor. Her projede sonucu ölçmeye önem veriyorum: hangi modelin, hangi promptun daha iyi olduğunu sayılarla gösteriyorum.",
    ],
    cards: [
      {
        key: 'web',
        title: 'Web uygulamaları',
        text: 'Django ve FastAPI ile API, React ve Flutter ile arayüz, Docker ile yayın ve otomatik testler.',
      },
      {
        key: 'ml',
        title: 'Makine öğrenmesi',
        text: 'LLM ile yapılandırılmış çıktı, RAG ve agent, Türkçe BERT ince ayarı, tarayıcıda çalışan modeller.',
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
        key: 'assistant',
        tone: 'peach',
        featured: true,
        title: 'Kurumsal İletişim Asistanı',
        summary:
          "Toplantı transkriptlerinden yapay zekâ ile yapılandırılmış toplantı kaydı üreten, görevleri ardışık toplantılarda takip eden ve onaylanan kayıtları Notion'a aktaran bir uygulama. BRN Teknoloji'de geliştirdim.",
        points: [
          "Kişi adları, telefon, e-posta, IBAN ve TC kimlik numaraları OpenAI'a gitmeden takma adlarla maskelenir; ölçümde sızıntı sıfır",
          'Model görev değişikliklerini mevcut görev kaydına bağlar; hiçbir çıktı personel onayı olmadan kayda geçmez, her değişiklik denetim izine yazılır',
          '"Projeye sor": toplantı arşivinde kaynak gösteren arama (RAG) ve durum sorularını görev kaydına yönlendiren salt okunur bir agent',
          'Prompt sürümleri üç senaryoda beşer çalıştırmayla ölçüldü; son sürüm gürültülü, gerçekçi toplantıda %100 kusursuz',
        ],
        tech: ['Python', 'OpenAI API', 'Pydantic', 'RAG', 'Streamlit', 'Notion API', 'Docker'],
        privateNote: 'Kaynak kodu özel depoda',
        links: {},
      },
      {
        key: 'lockNet',
        tone: 'butter',
        featured: true,
        title: 'LockNet',
        summary:
          'Türkçe hakaret ve küfür içeren metinleri tarayıcıda, cihaz üzerinde bulanıklaştıran Chrome eklentisi. İnce ayarlı Türkçe BERT modeli eklentinin içinde çalışır; okunan metin hiçbir sunucuya gitmez.',
        points: [
          "OffensEval-2020 Türkçe testinde 0.804 makro F1; 2,6 kat büyük BERTurk'e (0.821) yakın. int8 ONNX, 41 MB, cümle başına ~18 ms",
          'Haber, forum ve sözlük sitelerinden toplayıp elle etiketlediğim 478 metinlik ayrı test setinde AUC 0.966, rastgele metinde %1–2 yanlış alarm',
          "Ön işleme ve tokenizer Python'da ve JavaScript'te birebir aynı sonucu verir; eşlik testleri CI'da. Bütün modeller GitHub Actions'ta eğitildi",
        ],
        tech: ['PyTorch', 'Transformers', 'ONNX Runtime Web', 'JavaScript', 'Chrome MV3'],
        demoNote: "Chrome Web Store incelemesinde. Şimdilik depodan indirip geliştirici modunda kurulabilir.",
        links: projectLinks.lockNet,
      },
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
        key: 'skinSavvy',
        tone: 'sky',
        title: 'SkinSavvy',
        summary:
          'Ürünlerin içerik listesini cilt profiline göre yorumlayan, rutindeki çakışmaları ve açılmış ürünlerin bozulma tarihini hatırlatan cilt bakım asistanı.',
        points: [
          '65 içerik grubundan oluşan bilgi tabanıyla içerik analizi; retinol ve asit gibi çakışmaları yalnızca ortak günlerde uyarır',
          'Kullanıcıların eklediği ürünler için ekip onay kuyruğu: düzenleyip onayla, yinelenen, sil',
          'FastAPI sunucusu: argon2, dönen refresh token ve çalınma şüphesinde oturum ailesini kapatma',
        ],
        tech: ['Flutter', 'Dart', 'FastAPI', 'SQLAlchemy', 'Docker'],
        demoNote: '"Demo hesabıyla dene" ile kayıt olmadan açılır.',
        links: projectLinks.skinSavvy,
      },
      {
        key: 'qrYoklama',
        tone: 'peach',
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
          "KVKK için kişisel verileri OpenAI'a gitmeden maskeleyen bir katman, denetim izi ve Notion ile iki yönlü senkronizasyon kurdum.",
          'Toplantı arşivinde kaynak gösteren arama (RAG) ve salt okunur bir agent ekledim; arama yöntemlerini ve prompt sürümlerini ölçerek seçtim.',
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
      { name: 'Programlama dilleri', items: ['Python', 'JavaScript', 'Dart', 'HTML5', 'CSS'] },
      {
        name: 'Yapay zekâ',
        items: ['Makine öğrenmesi', 'LLM ve prompt mühendisliği', 'OpenAI API', 'RAG', 'Agent (tool calling)', 'PyTorch', 'Hugging Face Transformers', 'ONNX', 'scikit-learn', 'Doğal dil işleme (NLP)'],
      },
      {
        name: 'Web ve mobil',
        items: ['Django', 'Django REST Framework', 'FastAPI', 'React', 'Flutter', 'REST API', 'Chrome eklentisi (MV3)'],
      },
      {
        name: 'Araçlar',
        items: ['Git ve GitHub', 'GitHub Actions', 'Docker', 'pytest', 'Streamlit', 'Notion API', 'PySide6', 'Figma', 'Unity', 'Claude'],
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
      "I'm a junior software engineer. I build LLM-based assistants, Turkish language models that run in the browser, and end-to-end web and mobile apps.",
    primary: 'See projects',
    cv: 'Download CV',
  },
  about: {
    title: 'About me',
    text: [
      'I graduated in Software Engineering from Atatürk University in 2026. On the AI side I work with structured LLM output, retrieval (RAG) and fine-tuning Turkish BERT models; on the software side with Django, FastAPI, React and Flutter.',
      "At BRN Teknoloji I built a meeting assistant that masks personal data and puts every decision behind human approval. My own project LockNet blurs offensive Turkish text with a BERT model that runs inside the browser. In every project I measure the result: which model or prompt is better is shown with numbers.",
    ],
    cards: [
      {
        key: 'web',
        title: 'Web applications',
        text: 'APIs with Django and FastAPI, interfaces with React and Flutter, Docker deployments and automated tests.',
      },
      {
        key: 'ml',
        title: 'Machine learning',
        text: 'Structured LLM output, RAG and agents, fine-tuning Turkish BERT, models that run in the browser.',
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
        key: 'assistant',
        tone: 'peach',
        featured: true,
        title: 'Corporate Communication Assistant',
        summary:
          'An app that uses AI to turn meeting transcripts into structured meeting records, tracks tasks across consecutive meetings and sends approved records to Notion. Built at BRN Teknoloji.',
        points: [
          'Names, phone numbers, emails, IBANs and national ID numbers are replaced with pseudonyms before anything reaches OpenAI; zero leaks in evaluation',
          'The model links task changes to the existing task registry; nothing is saved without staff approval and every change goes to an audit trail',
          '"Ask the project": source-cited search over the meeting archive (RAG) and a read-only agent that sends status questions to the task registry',
          'Prompt versions were measured with five runs on each of three scenarios; the latest version is 100% flawless on a noisy, realistic meeting',
        ],
        tech: ['Python', 'OpenAI API', 'Pydantic', 'RAG', 'Streamlit', 'Notion API', 'Docker'],
        privateNote: 'Source code is in a private repository',
        links: {},
      },
      {
        key: 'lockNet',
        tone: 'butter',
        featured: true,
        title: 'LockNet',
        summary:
          'A Chrome extension that blurs offensive Turkish text on web pages, on-device. A fine-tuned Turkish BERT runs inside the extension; no text ever leaves the browser.',
        points: [
          '0.804 macro F1 on the OffensEval-2020 Turkish test set, close to BERTurk (0.821) at 2.6× the size. int8 ONNX, 41 MB, ~18 ms per sentence',
          'AUC 0.966 on a separate set of 478 news, forum and dictionary-site texts I collected and labelled by hand, with 1–2% false alarms on random text',
          'Preprocessing and tokenizer give identical results in Python and JavaScript, with parity tests in CI. All models were trained on GitHub Actions',
        ],
        tech: ['PyTorch', 'Transformers', 'ONNX Runtime Web', 'JavaScript', 'Chrome MV3'],
        demoNote: 'In Chrome Web Store review. For now it can be installed from the repository in developer mode.',
        links: projectLinks.lockNet,
      },
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
        key: 'skinSavvy',
        tone: 'sky',
        title: 'SkinSavvy',
        summary:
          'A skincare assistant that reads ingredient lists against your skin profile, catches clashes in your routine and reminds you when opened products expire.',
        points: [
          'Ingredient analysis with a 65-group knowledge base; warns about clashes like retinol and acids only on the days they overlap',
          'Team review queue for user-added products: edit and approve, mark as duplicate, remove',
          'FastAPI server: argon2, rotating refresh tokens and closing the whole session family on suspected theft',
        ],
        tech: ['Flutter', 'Dart', 'FastAPI', 'SQLAlchemy', 'Docker'],
        demoNote: 'Opens without sign-up via "Try the demo account".',
        links: projectLinks.skinSavvy,
      },
      {
        key: 'qrYoklama',
        tone: 'peach',
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
          'Added a layer that masks personal data before it reaches OpenAI (KVKK), an audit trail and two-way sync with Notion.',
          'Added source-cited search over the meeting archive (RAG) and a read-only agent; chose search methods and prompt versions by measuring them.',
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
      { name: 'Programming languages', items: ['Python', 'JavaScript', 'Dart', 'HTML5', 'CSS'] },
      {
        name: 'AI',
        items: ['Machine learning', 'LLMs and prompt engineering', 'OpenAI API', 'RAG', 'Agents (tool calling)', 'PyTorch', 'Hugging Face Transformers', 'ONNX', 'scikit-learn', 'Natural language processing (NLP)'],
      },
      {
        name: 'Web and mobile',
        items: ['Django', 'Django REST Framework', 'FastAPI', 'React', 'Flutter', 'REST APIs', 'Chrome extensions (MV3)'],
      },
      {
        name: 'Tools',
        items: ['Git and GitHub', 'GitHub Actions', 'Docker', 'pytest', 'Streamlit', 'Notion API', 'PySide6', 'Figma', 'Unity', 'Claude'],
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
