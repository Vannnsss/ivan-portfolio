import {
  SiPhp,
  SiYii,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiLinux,
  SiProxmox,
  SiNginx,
  SiGitlab,
  SiCloudflare,
  SiFirebase,
  SiPython
} from "react-icons/si";
import {
  FaNetworkWired,
  FaTerminal,
  FaBroadcastTower,
  FaBrain,
  FaDatabase,
  FaCogs,
  FaShieldAlt,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiCpu, FiLayers, FiSearch, FiCheckSquare, FiCode } from "react-icons/fi";

export const personalInfo = {
  name: "Ivan Septa Adi Pratama",
  role: "Fullstack Developer | Linux Server & System Administration",
  tagline: "Software Engineer @ PT Indah Logistik",
  shortBio: "Fullstack Developer dengan fokus pada pengembangan aplikasi web (PHP/Yii2, MySQL, JS), integrasi API, administrasi server Linux, Proxmox, deployment aplikasi, dan pemeliharaan sistem produksi.",
  aboutDescription: "Software Engineer di PT Indah Logistik sejak Juni 2025. Terbiasa menangani siklus hidup aplikasi end-to-end: mulai dari memahami alur bisnis aplikasi, merancang relasi data, mengintegrasikan layanan pihak ketiga (payment gateway Faspay, shipping API, Firebase, LiveKit), menganalisis bug serta bottleneck performa, hingga memastikan aplikasi berjalan stabil di lingkungan server Linux dan Proxmox. Berfokus pada stabilitas sistem, konsistensi data, dan solusi rekayasa yang pragmatis.",
  cvUrl: "/uploads/Resume.pdf",
  phone: "085230217420",
  email: "ivanseptaa@gmail.com",
  location: "DKI Jakarta, Indonesia",
  experienceYears: "Aktif sejak Juni 2025",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/ivan-septa-adi-pratama-a25b00271/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    path: "https://github.com/Vannnsss",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    path: "https://www.instagram.com/1_vannn/",
  },
];

export const stats = [
  {
    num: 7,
    suffix: "+",
    text: "Core Platforms & Projects",
  },
  {
    num: 15,
    suffix: "+",
    text: "Production Tech & Tools",
  },
  {
    num: 2025,
    suffix: "",
    text: "Software Engineer at Indah Logistik",
  },
  {
    num: 100,
    suffix: "%",
    text: "Production Stability Mindset",
  },
];

export const skillClusters = [
  {
    title: "Fullstack Web Development",
    icon: FiCode,
    tags: ["PHP", "Yii2", "JavaScript", "jQuery", "AJAX", "REST API", "HTML", "CSS"],
    points: [
      "Mengembangkan aplikasi web dan enterprise portal berbasis PHP & Yii2 framework.",
      "Membuat dan memelihara endpoint REST API untuk integrasi lintas platform.",
      "Mengimplementasikan validasi data ketat, business logic, dan penanganan error.",
      "Mengembangkan interaksi frontend dinamis menggunakan JavaScript, jQuery, dan AJAX.",
      "Memahami integrasi solid antara frontend, backend logic, dan persistensi database.",
    ],
  },
  {
    title: "Database & Backend Engineering",
    icon: FaDatabase,
    tags: ["MySQL", "SQL", "Relational Data", "Transactions", "Query Optimization"],
    points: [
      "Merancang dan menelusuri relasi data kompleks pada aplikasi bisnis multi-entitas.",
      "Menangani query, active record/model, validasi integritas data, dan proses transaksi perbankan/pesanan.",
      "Menganalisis masalah constraint unik, pencegahan duplikasi data, dan konsistensi ACID database.",
      "Mengidentifikasi serta mengoptimasi query database yang berpotensi menjadi bottleneck performa.",
    ],
  },
  {
    title: "Linux Server & System Administration",
    icon: SiLinux,
    tags: ["Linux", "SSH", "Nginx", "PHP-FPM", "Proxmox", "Cloudflare", "Networking"],
    points: [
      "Mengelola server produksi, provisioning environment, dan deployment aplikasi.",
      "Menggunakan SSH untuk administrasi sistem, monitoring log, dan remote troubleshooting.",
      "Mengelola virtual machine (VM) dan container terisolasi melalui Proxmox VE.",
      "Menangani konfigurasi routing jaringan, DNS/CDN Cloudflare, dan konektivitas server.",
      "Menganalisis utilisasi kapasitas disk, konfigurasi PHP-FPM, dan kesehatan layanan server.",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: SiGitlab,
    tags: ["Git", "GitLab", "Composer", "CI/CD concepts", "Server Migration"],
    points: [
      "Mengelola version control dan branch synchronization menggunakan Git dan GitLab.",
      "Manajemen dependency PHP secara terkontrol melalui Composer.",
      "Pemeriksaan perubahan kode (code reviews) dan pengelolaan backup berkala.",
      "Terlibat aktif dalam migrasi server fisik ke virtual dengan strategi meminimalkan downtime.",
    ],
  },
  {
    title: "API & Third-Party Integration",
    icon: FaNetworkWired,
    tags: ["Payment Gateway (Faspay)", "Shipping API", "Firebase", "Firestore", "LiveKit", "Object Storage"],
    points: [
      "Integrasi payment gateway Faspay serta layanan kurir ekspedisi pengiriman.",
      "Mengembangkan alur notifikasi real-time dan komunikasi chat berbasis Firestore.",
      "Mengeksplorasi dan mengimplementasikan arsitektur live streaming interaktif berbasis LiveKit.",
      "Pemanfaatan S3-compatible Object Storage untuk penyimpanan aset media berskala besar.",
    ],
  },
  {
    title: "AI, Computer Vision & Research",
    icon: FaBrain,
    tags: ["Python", "Flask", "CNN", "Face Recognition", "XGBoost", "Model Evaluation"],
    points: [
      "Mengembangkan dan menganalisis sistem presensi otomatis berbasis pengenalan wajah (Face Engine).",
      "Manajemen dataset wajah karyawan, pelatihan ulang (retraining) model, dan evaluasi akurasi.",
      "Penanganan wajah tidak dikenal (unknown face) agar model tidak memaksakan false positive.",
      "Riset magister komputasi mengenai analisis efektivitas vaksinasi menggunakan algoritma XGBoost.",
    ],
  },
];

export const skillsList = [
  { name: "PHP", icon: SiPhp, category: "Backend" },
  { name: "Yii2 Framework", icon: SiYii, category: "Backend" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { name: "jQuery & AJAX", icon: SiJquery, category: "Frontend" },
  { name: "Linux Server", icon: SiLinux, category: "SysAdmin" },
  { name: "Proxmox VE", icon: SiProxmox, category: "Virtualization" },
  { name: "Nginx & PHP-FPM", icon: SiNginx, category: "Server" },
  { name: "Git & GitLab", icon: SiGitlab, category: "DevOps" },
  { name: "Cloudflare", icon: SiCloudflare, category: "Networking" },
  { name: "Firebase / Firestore", icon: SiFirebase, category: "Real-time" },
  { name: "LiveKit Streaming", icon: FaBroadcastTower, category: "Real-time" },
  { name: "Python & Flask", icon: SiPython, category: "AI & Backend" },
  { name: "Face Recognition", icon: FaBrain, category: "AI & Vision" },
  { name: "SSH & Networking", icon: FaTerminal, category: "SysAdmin" },
];

export const experienceData = [
  {
    company: "PT Indah Logistik",
    position: "Software Engineer / Fullstack Developer",
    duration: "Juni 2025 - Sekarang",
    description: "Mengembangkan dan memelihara ekosistem aplikasi bisnis utama logistik dan e-commerce  (IndahMall, Indah Logistik, layanan pengiriman reguler dan instan). Bertanggung jawab atas backend berbasis PHP/Yii2, pengelolaan query dan transaksi MySQL, integrasi Faspay payment gateway, shipping API, komunikasi real-time LiveKit & Firestore, serta pengelolaan server Linux, Proxmox VM, dan deployment produksi dengan kontrol perubahan yang disiplin.",
    technologies: ["PHP", "Yii2", "MySQL", "JavaScript", "Linux", "Proxmox", "Faspay", "LiveKit", "Firestore", "GitLab"],
  },
];

export const educationData = [
  {
    institution: "Universitas Pamulang",
    degree: "Magister Teknik Informatika (S2)",
    duration: "2025 - On Going",
    detail: "Fokus riset komputasi lanjutan, machine learning, evaluasi model, dan penelitian tesis mengenai analisis efektivitas vaksinasi menggunakan model Machine Learning XGBoost.",
  },
  {
    institution: "Universitas Pamulang",
    degree: "Sarjana Komputer - Teknik Informatika (S1)",
    duration: "2021 - 2025",
    detail: "Lulusan S1 Informatika dengan fokus rekayasa perangkat lunak, arsitektur database relasional, algoritma, serta riset computer vision untuk pengenalan wajah.",
  },
];

export const workPrinciples = [
  {
    id: "01",
    title: "Problem-Solving Berakar Logika",
    description: "Menelusuri akar masalah secara mendalam mulai dari server log, query database, alur request API, konfigurasi environment server, hingga integrasi layanan pihak ketiga.",
    icon: FiSearch,
  },
  {
    id: "02",
    title: "Production-Minded Engineering",
    description: "Memprioritaskan stabilitas sistem, konsistensi data, keamanan transaksi bisnis, penanganan error terisolasi, dan mitigasi risiko downtime pada saat deployment.",
    icon: FaShieldAlt,
  },
  {
    id: "03",
    title: "End-to-End Systems Thinking",
    description: "Memahami hubungan harmonis dan ketergantungan antara antarmuka frontend, logika backend, relasi database, API eksternal, hingga infrastruktur server Linux.",
    icon: FiLayers,
  },
  {
    id: "04",
    title: "Maintainability & Change Control",
    description: "Menjaga perubahan kode tetap terkontrol melalui Git versioning, dokumentasi jelas, dan menghindari refactoring spekulatif yang tidak diperlukan.",
    icon: FaCogs,
  },
  {
    id: "05",
    title: "Pragmatic Engineering",
    description: "Memilih solusi sederhana dan tepat guna, memaksimalkan kemampuan teknologi yang sudah tersedia, serta menghindari over-engineering yang tidak memberi nilai bisnis.",
    icon: FiCheckSquare,
  },
  {
    id: "06",
    title: "Research-Oriented Approach",
    description: "Mengembangkan pemahaman AI, computer vision, dan machine learning melalui implementasi empiris, pengujian terukur, dan evaluasi performa model yang akurat.",
    icon: FiCpu,
  },
];

export const projects = [
  {
    num: "01",
    category: "Enterprise System & Logistics",
    title: "Indah Logistic Core System",
    description:
      "Pengembangan dan pemeliharaan platform operasional logistik nasional enterprise (Indah Logistik). Menangani pemrosesan alur bisnis dan data pengiriman berskala besar dengan framework PHP/Yii2, perancangan dan optimasi query relasional MySQL, pembuatan endpoint REST API, troubleshooting server Linux di lingkungan produksi, serta kontrol perubahan kode terkendali.",
    stack: ["PHP", "Yii2", "MySQL", "REST API", "Linux Server", "GitLab"],
    repositories: ["Indah Logistik"],
    image: "/assets/work/indahlogistik.png",
    live: "https://indahlogistik.co.id/site/login",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "02",
    category: "Logistics Platform (Regular Delivery)",
    title: "Indah Expres Platform",
    description:
      "Pengembangan portal layanan ekspedisi kargo dan pengiriman reguler terpadu untuk pelanggan serta operasional armada. Mengimplementasikan arsitektur backend berbasis Yii2, validasi data transaksi paket, konsistensi status resi dan pelacakan barang secara akurat, serta integrasi endpoint API dengan database MySQL berkinerja tinggi.",
    stack: ["PHP", "Yii2", "MySQL", "REST API", "Bootstrap", "JavaScript"],
    repositories: ["Indah Expres"],
    image: "/assets/work/indahexpres.jpeg",
    live: "https://indahexpres.co.id/",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "03",
    category: "On-Demand & Instant Delivery",
    title: "Josal Ride & Delivery Platform",
    description:
      "Pengembangan platform transportasi online dan kurir instan/on-demand delivery terpadu (Josal). Menangani alur pemesanan pengiriman instan, sinkronisasi status perjalanan barang, perancangan relasi data driver dan pesanan, serta integrasi backend RESTful API yang andal untuk kelancaran operasional layanan cepat.",
    stack: ["PHP", "Yii2", "MySQL", "REST API", "JavaScript", "AJAX"],
    repositories: ["Josal"],
    image: "/assets/work/josal.jpg",
    live: "https://josal.co.id/",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "04",
    category: "Fullstack Development & Marketplace",
    title: "IndahMall — E-commerce ",
    description:
      "Pengembangan platform marketplace  berbasis Yii2 dan PHP yang mencakup portal customer (indahmall) dan portal seller/store (indahmall-seller). Menangani integrasi katalog produk, multi-toko, pesanan terpadu, integrasi pembayaran digital Faspay, integrasi API logistik pengiriman, perbaikan validasi data, serta optimasi query database.",
    stack: ["PHP", "Yii2", "MySQL", "JavaScript", "Faspay", "Shipping API", "Object Storage"],
    repositories: ["indahmall", "indahmall-seller"],
    image: "/assets/work/indahmall.jpg",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "05",
    category: "Linux Server & SysAdmin",
    title: "Infrastructure & Data Center Migration",
    description:
      "Operasional dan modernisasi infrastruktur server fisik dan virtualisasi. Melakukan instalasi server fisik, konfigurasi routing dan konektivitas jaringan, pengelolaan virtual machine melalui Proxmox VE, migrasi aplikasi, replikasi data dari server eksternal, serta deployment terukur dengan upaya meminimalkan downtime sistem.",
    stack: ["Linux", "Proxmox VE", "SSH", "Nginx", "PHP-FPM", "Cloudflare", "Networking"],
    repositories: ["Infrastructure Operations"],
    image: "/assets/work/datacenter-migration.jpg",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "06",
    category: "AI & Computer Vision",
    title: "Face Engine — Automatic Face Attendance",
    description:
      "Sistem presensi otomatis berbasis pengenalan wajah. Mengembangkan deteksi wajah dan pengenalan identitas, manajemen dataset wajah karyawan, proses training dan retraining model, serta evaluasi akurasi. Dilengkapi penanganan wajah tidak dikenal (unknown face rejection) agar sistem tidak memaksakan prediksi keliru. Diintegrasikan melalui Python dan Flask.",
    stack: ["Python", "Flask", "CNN", "Face Recognition", "MySQL", "REST API"],
    repositories: ["face-engine", "attendance-system-master"],
    image: "/assets/work/face-engine.jpg",
    live: "",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "07",
    category: "Real-Time Streaming & Interaction",
    title: "Live Commerce & Real-Time Communication",
    description:
      "Fitur siaran langsung interaktif terintegrasi pada ekosistem IndahMall yang menghubungkan seller dan pembeli secara langsung. Mengimplementasikan arsitektur streaming WebRTC menggunakan LiveKit, interaksi chat dan pencatatan notifikasi real-time berbasis Firestore, live viewer counter, serta investigasi sesi streaming dan penyimpanan rekaman ke object storage.",
    stack: ["LiveKit", "Firestore", "PHP / Yii2", "WebRTC", "Object Storage", "JavaScript"],
    repositories: ["indahmall", "indahmall-seller"],
    image: "/assets/work/live-commerce.jpg",
    live: "",
    github: "https://github.com/Vannnsss",
  },
];

export const contactDetails = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "ivanseptaa@gmail.com",
    href: "mailto:ivanseptaa@gmail.com",
    label: "Fast Response",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone / WhatsApp",
    value: "+62 852 3021 7420",
    href: "https://wa.me/6285230217420",
    label: "Direct Contact",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "DKI Jakarta, Indonesia",
    href: "#",
    label: "On-site / Hybrid / Remote",
  },
];
