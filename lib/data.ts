import { FaReact, FaLaravel, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiYii, SiPython, SiMysql, SiGrafana, SiRedis } from "react-icons/si";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const personalInfo = {
  name: "Ivan Septa Adi Pratama",
  role: "Fullstack Developer",
  shortBio: "I am an IT graduate specializing in fullstack web development, with additional experience in machine learning.",
  aboutDescription: "Lulusan S1 & Mahasiswa S2 Informatika yang antusias membangun aplikasi web modern, menyukai tantangan teknis, arsitektur scalable, dan terus belajar teknologi terkini.",
  cvUrl: "/uploads/Resume.pdf",
  phone: "085230217420",
  email: "ivanseptaa@gmail.com",
  location: "DKI Jakarta, Indonesia",
  experienceYears: "2+ Years",
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
    num: 12,
    suffix: "+",
    text: "Projects Completed",
  },
  {
    num: 8,
    suffix: "+",
    text: "Core Technologies",
  },
  {
    num: 2,
    suffix: "+",
    text: "Years Experience",
  },
  {
    num: 100,
    suffix: "%",
    text: "Dedication & Focus",
  },
];

export const skillsList = [
  { name: "Yii2 Framework", icon: SiYii, category: "Backend" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "Memcached / Caching", icon: SiRedis, category: "Performance" },
  { name: "Grafana Monitoring", icon: SiGrafana, category: "DevOps" },
  { name: "Load Balancer & Queue", icon: FaServer, category: "Architecture" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Python / ML", icon: SiPython, category: "AI & Backend" },
  { name: "Laravel", icon: FaLaravel, category: "Backend" },
];

export const experienceData = [
  {
    company: "Indah Logistic & Josal",
    position: "Fullstack Developer",
    duration: "June 2025 - Present",
    description: "Mengembangkan dan memelihara ekosistem platform enterprise skala besar untuk logistik dan on-demand transportation (Indah Logistik, Indah Expres, Josal Ride/Delivery) berbasis Yii2, MySQL, high-performance caching (Memcache), queue workers, automated cron jobs, Grafana system metrics monitoring, dan arsitektur load balancing.",
    technologies: ["Yii2", "MySQL", "Memcache", "Queue & Cron", "Grafana", "Load Balancer"],
  },
];

export const educationData = [
  {
    institution: "Pamulang University",
    degree: "Master of Computer Science",
    duration: "2025 - On Going",
    detail: "Fokus riset komputasi lanjutan, machine learning, dan skalabilitas software.",
  },
  {
    institution: "Pamulang University",
    degree: "Bachelor of Computer Science",
    duration: "2021 - 2025",
    detail: "Lulusan S1 Informatika dengan fokus pengembangan web, struktur data, algoritma, dan proyek AI.",
  },
  {
    institution: "Online Course Certification",
    degree: "Machine Learning Specialization",
    duration: "2024",
    detail: "Praktik supervised learning, neural networks, data preprocessing, dan model evaluation.",
  },
  {
    institution: "Online Course Certification",
    degree: "Fullstack Web & Software Programming",
    duration: "2023",
    detail: "Mendalami arsitektur MVC, RESTful APIs, modern frontend, dan database design.",
  },
];

export const projects = [
  {
    num: "01",
    category: "Enterprise System",
    title: "Indah Logistic Core System",
    description:
      "Pengembangan dan optimasi platform operasional logistik nasional enterprise. Menangani pemrosesan data pengiriman skala masif dengan Yii2 Framework, relasi database MySQL berkinerja tinggi, Memcache untuk respons latensi rendah, Queue & automated Cron jobs, serta pemantauan sistem secara real-time melalui Grafana di balik Load Balancer.",
    stack: ["Yii2", "MySQL", "Memcache", "Queue & Cron", "Grafana", "Load Balancer"],
    image: "/assets/work/indahlogistik.png",
    live: "https://indahlogistik.co.id/site/login",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "02",
    category: "Logistics Platform",
    title: "Indah Expres Web Platform",
    description:
      "Pengembangan portal layanan ekspres terpadu untuk pelanggan dan operasional armada. Mengimplementasikan arsitektur backend yang scalable dengan antrean pemrosesan otomatis (Queue worker), penjadwalan sistem (Cron), caching layer terdistribusi, serta integrasi pemantauan performa infrastruktur server.",
    stack: ["Yii2", "MySQL", "Memcache", "Queue Worker", "Load Balancer", "Bootstrap"],
    image: "/assets/work/indahexpres.jpeg",
    live: "https://indahexpres.co.id/",
    github: "https://github.com/Vannnsss",
  },
  {
    num: "03",
    category: "Ride-Hailing & On-Demand Service",
    title: "Josal Ride & Delivery Platform",
    description:
      "Pengembangan platform transportasi online dan layanan on-demand (ride-hailing, kurir pengiriman, dan trucking) terpadu. Membangun backend tangguh yang menangani alokasi order pengemudi, pemantauan status pengantaran, queue processing untuk lonjakan transaksi, serta pemantauan latensi server via Grafana di balik Load Balancer.",
    stack: ["Yii2", "MySQL", "Memcache", "Queue Worker", "Cron Automation", "Grafana"],
    image: "/assets/work/josal.jpg",
    live: "https://josal.co.id/",
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
    label: "Available",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "DKI Jakarta, Indonesia",
    href: "#",
    label: "Remote / On-site",
  },
];
