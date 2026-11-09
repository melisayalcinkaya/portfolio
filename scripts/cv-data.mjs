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
      "Atatürk Üniversitesi Yazılım Mühendisliği 2026 mezunu junior yazılım mühendisi. LLM tabanlı asistanlar (yapılandırılmış çıktı, RAG, agent, KVKK için kişisel veri maskeleme) ve tarayıcıda çalışan Türkçe BERT modelleri geliştirir; Django, FastAPI, React ve Flutter ile uçtan uca uygulamalar kurar. Model ve prompt seçimlerini ölçerek yapar, projelerini otomatik testler, GitHub Actions CI ve Docker ile yayına alır.",
    work: [
      {
        title: 'Yapay Zekâ Geliştirici',
        org: 'BRN Teknoloji',
        date: '09/2026 – 10/2026',
        place: 'Uzaktan, yarı zamanlı',
        points: [
          'Medikal ürün ihracatı yapan bir şirketin iç iletişimi için, toplantı transkriptlerinden yapılandırılmış kayıt üreten ve görevleri ardışık toplantılarda takip eden yapay zekâ asistanı geliştirdi (OpenAI API, Pydantic, Streamlit).',
          "KVKK için kişisel verileri OpenAI'a gitmeden takma adlarla maskeleyen katmanı (ölçümde sızıntı 0), denetim izini ve Notion ile iki yönlü senkronizasyonu kurdu.",
          'Toplantı arşivinde kaynak gösteren arama (RAG) ve salt okunur bir agent ekledi; arama yöntemlerini ve prompt sürümlerini ölçerek seçti.',
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
      {
        title: 'AI Engineering Bootcamp',
        org: 'Tirendaz Akademi',
        date: '2026',
        place: 'Çevrim içi, canlı',
        points: [
          'LLM, prompt ve context engineering, değerlendirme, embedding ve RAG, AI agent, MCP, fine-tuning ve deployment. Bitirme projesi: Kurumsal İletişim Asistanı.',
        ],
      },
    ],
    skills: [
      ['Programlama Dilleri', 'Python, JavaScript, Dart, HTML5, CSS'],
      ['Yapay Zeka', 'Makine Öğrenmesi, LLM ve Prompt Mühendisliği, OpenAI API, RAG, Agent (tool calling), PyTorch, Hugging Face Transformers, ONNX, scikit-learn, NLP'],
      ['Web & Mobil', 'Django, Django REST Framework, FastAPI, React.js, Flutter, RESTful API, JWT, Chrome eklentisi (MV3)'],
      ['Araçlar', 'Git, GitHub, GitHub Actions (CI), Docker, pytest, Streamlit, Notion API, PySide6, Figma, Unity, Claude'],
    ],
    projects: [
      {
        name: 'Kurumsal İletişim Asistanı',
        tech: 'Python, OpenAI API, Pydantic, RAG, Streamlit, Notion API, Docker',
        points: [
          'Transkript → kişisel veri maskeleme → LLM taslağı → personel onayı → kayıt + Notion akışıyla çalışan, her maddesi dayandığı transkript satırlarını gösteren insan onaylı bir LLM uygulaması geliştirildi.',
          'Prompt sürümleri üç sentetik senaryoda beşer çalıştırmayla ölçüldü; son sürüm gürültülü senaryoda %100 kusursuz. Arşiv aramasında embedding, BM25+ ve hibrit karşılaştırıldı (hit@1 %80); agent 14 soruda 14 doğru araç seçti. 86 otomatik test.',
        ],
      },
      {
        name: 'LockNet: Türkçe Saldırgan Metin Filtresi (Chrome eklentisi)',
        url: 'https://github.com/melisayalcinkaya/LockNet_extension',
        tech: 'PyTorch, Transformers, ONNX Runtime Web, JavaScript, Chrome MV3, GitHub Actions',
        points: [
          'Türkçe BERT, OffensEval-2020 ile ince ayarlanıp int8 ONNX (41 MB) olarak eklentinin içinde çalıştırıldı: test makro F1 0.804 (BERTurk 0.821), cümle başına ~18 ms; metinler cihazdan çıkmaz.',
          'Elle etiketlenen 478 metinlik web test setinde AUC 0.966, rastgele metinde %1–2 yanlış alarm. Python ve JavaScript ön işleme/tokenizer eşliği CI testleriyle doğrulandı; int8 nicemlemede parti komşularına bağlı skor hatası bulunup giderildi. Chrome Web Store incelemesinde.',
        ],
      },
      {
        name: 'SkinSavvy: Cilt Bakım Asistanı',
        url: 'https://github.com/melisayalcinkaya/SkinSavvy',
        tech: 'Flutter, Dart, FastAPI, SQLAlchemy, Docker',
        points: [
          'İçerik listesini cilt profiline göre yorumlayan, rutin çakışmalarını ve açılmış ürünlerin bozulma tarihini hatırlatan Flutter uygulaması; ekibin onay kuyruğuyla büyüyen topluluk ürün veritabanı.',
          'FastAPI sunucusunda argon2, dönen refresh token ve çalınma şüphesinde oturum ailesi iptali; ~%99 test kapsamı. Canlı demo: melisayalcinkaya.github.io/SkinSavvy',
        ],
      },
      {
        name: 'QR Menü',
        url: 'https://github.com/melisayalcinkaya/qr_menus',
        tech: 'Django REST Framework, React.js, Docker, PySide6',
        points: [
          'Restoranlar için masaya özel QR kodla açılan, garson çağırma ve hesap isteme özellikli dijital menü ve işletme paneli; 14 alerjen filtresi, TR/EN içerik, üç tema.',
          'JWT, sahiplik bazlı yetkilendirme ve hız sınırlarıyla korunan API; 90+ test ve CI. PySide6 masaüstü çağrı ekranı Windows .exe olarak yayımlandı. Canlı demo: qr-menus.onrender.com',
        ],
      },
      {
        name: 'QR Kod Tabanlı Yoklama Sistemi',
        url: 'https://github.com/melisayalcinkaya/qr_yoklama',
        tech: 'Django, Python, SQLite, Docker',
        points: [
          '5 saniyede yenilenen, en fazla 15 saniye geçerli QR kodlar, isteğe bağlı konum doğrulama ve cihaz başına tek kayıtla kopyaya dayanıklı yoklama; canlı liste ve Excel çıktısı. Canlı demo: qr-yoklama-e9u9.onrender.com',
        ],
      },
      {
        name: 'ATASENG Kulüp Web Sitesi',
        url: 'https://www.ataseng.com/',
        tech: 'React.js, Figma',
        points: ["Bir öğrenci kulübü için Figma'da tasarlanan arayüz React.js ile etkileşimli bir siteye dönüştürüldü."],
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
      'Junior software engineer, graduated in Software Engineering from Atatürk University in 2026. Builds LLM-based assistants (structured output, RAG, agents, personal data masking for KVKK/GDPR) and Turkish BERT models that run in the browser, and end-to-end apps with Django, FastAPI, React and Flutter. Chooses models and prompts by measuring them, and ships projects with automated tests, GitHub Actions CI and Docker.',
    work: [
      {
        title: 'AI Developer',
        org: 'BRN Teknoloji',
        date: '09/2026 – 10/2026',
        place: 'Remote, part-time',
        points: [
          'Built an AI assistant for the internal communication of a medical products exporter that turns meeting transcripts into structured records and tracks tasks across meetings (OpenAI API, Pydantic, Streamlit).',
          'Built the layer that pseudonymises personal data before it reaches OpenAI (zero leaks in evaluation), an audit trail and two-way sync with Notion.',
          'Added source-cited search over the meeting archive (RAG) and a read-only agent; chose search methods and prompt versions by measuring them.',
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
      {
        title: 'AI Engineering Bootcamp',
        org: 'Tirendaz Akademi',
        date: '2026',
        place: 'Online, live',
        points: [
          'LLMs, prompt and context engineering, evaluation, embeddings and RAG, AI agents, MCP, fine-tuning and deployment. Capstone: Corporate Communication Assistant.',
        ],
      },
    ],
    skills: [
      ['Programming Languages', 'Python, JavaScript, Dart, HTML5, CSS'],
      ['AI', 'Machine Learning, LLMs and Prompt Engineering, OpenAI API, RAG, Agents (tool calling), PyTorch, Hugging Face Transformers, ONNX, scikit-learn, NLP'],
      ['Web & Mobile', 'Django, Django REST Framework, FastAPI, React.js, Flutter, RESTful APIs, JWT, Chrome extensions (MV3)'],
      ['Tools', 'Git, GitHub, GitHub Actions (CI), Docker, pytest, Streamlit, Notion API, PySide6, Figma, Unity, Claude'],
    ],
    projects: [
      {
        name: 'Corporate Communication Assistant',
        tech: 'Python, OpenAI API, Pydantic, RAG, Streamlit, Notion API, Docker',
        points: [
          'Built a human-in-the-loop LLM app (transcript → personal data masking → LLM draft → staff approval → record + Notion) in which every item cites the transcript lines it is based on.',
          'Measured prompt versions with five runs on each of three synthetic scenarios; the latest is 100% flawless on the noisy one. Compared embedding, BM25+ and hybrid search for the archive (hit@1 80%); the agent picked the right tool for 14/14 questions. 86 automated tests.',
        ],
      },
      {
        name: 'LockNet: Turkish Offensive Text Filter (Chrome extension)',
        url: 'https://github.com/melisayalcinkaya/LockNet_extension',
        tech: 'PyTorch, Transformers, ONNX Runtime Web, JavaScript, Chrome MV3, GitHub Actions',
        points: [
          'Fine-tuned a Turkish BERT on OffensEval-2020 and shipped it inside the extension as int8 ONNX (41 MB): 0.804 macro F1 on the test set (BERTurk 0.821), ~18 ms per sentence; no text leaves the device.',
          'AUC 0.966 on a hand-labelled set of 478 web texts with 1–2% false alarms on random text. Python/JavaScript preprocessing and tokenizer parity verified by CI tests; found and fixed int8 scores depending on batch neighbours. In Chrome Web Store review.',
        ],
      },
      {
        name: 'SkinSavvy: Skincare Assistant',
        url: 'https://github.com/melisayalcinkaya/SkinSavvy',
        tech: 'Flutter, Dart, FastAPI, SQLAlchemy, Docker',
        points: [
          'Flutter app that reads ingredient lists against the skin profile, catches routine clashes and reminds when opened products expire; a community product database that grows through a team review queue.',
          'FastAPI server with argon2, rotating refresh tokens and session-family revocation on suspected theft; ~99% test coverage. Live demo: melisayalcinkaya.github.io/SkinSavvy',
        ],
      },
      {
        name: 'QR Menu',
        url: 'https://github.com/melisayalcinkaya/qr_menus',
        tech: 'Django REST Framework, React.js, Docker, PySide6',
        points: [
          'Digital menu and owner panel for restaurants, opened from table-specific QR codes, with waiter calls and bill requests, 14 allergen filters, Turkish/English content and three themes.',
          'API secured with JWT, ownership-based authorisation and rate limits; 90+ tests and CI. PySide6 desktop call screen released as a Windows .exe. Live demo: qr-menus.onrender.com',
        ],
      },
      {
        name: 'QR Code Attendance System',
        url: 'https://github.com/melisayalcinkaya/qr_yoklama',
        tech: 'Django, Python, SQLite, Docker',
        points: [
          'Cheat-resistant attendance with QR codes that refresh every 5 seconds and expire within 15, an optional location check and one check-in per device; live list and Excel export. Live demo: qr-yoklama-e9u9.onrender.com',
        ],
      },
      {
        name: 'ATASENG Club Website',
        url: 'https://www.ataseng.com/',
        tech: 'React.js, Figma',
        points: ['Turned a Figma interface design for a student club into an interactive React.js site.'],
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
