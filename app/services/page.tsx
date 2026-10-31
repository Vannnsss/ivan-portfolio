"use client";

import { FaCode, FaServer, FaBrain } from "react-icons/fa6";
import { SiLinux } from "react-icons/si";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Fullstack Web & API Engineering",
    description:
      "Pengembangan aplikasi web bisnis end-to-end berbasis PHP dan Yii2 Framework, arsitektur database MySQL relasional, integrasi RESTful API, validasi ketat, dan antarmuka interaktif yang responsif.",
    href: "/#projects",
    icon: FaCode,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    num: "02",
    title: "Linux Server & System Administration",
    description:
      "Pengelolaan server produksi Linux via SSH, virtualisasi lingkungan Proxmox VE, konfigurasi web server Nginx & PHP-FPM, manajemen DNS/CDN Cloudflare, serta migrasi server dengan minim downtime.",
    href: "/#projects",
    icon: SiLinux,
    gradient: "from-purple-500 to-cyan-400",
  },
  {
    num: "03",
    title: "API & Third-Party Integration",
    description:
      "Integrasi ekosistem payment gateway (Faspay), API logistik pengiriman, komunikasi real-time berbasis Firebase Firestore, live streaming latensi rendah via LiveKit WebRTC, dan S3-compatible Object Storage.",
    href: "/#projects",
    icon: FaServer,
    gradient: "from-cyan-500 to-emerald-400",
  },
  {
    num: "04",
    title: "AI, Computer Vision & Applied ML",
    description:
      "Pengembangan sistem presensi otomatis berbasis pengenalan wajah (Face Engine), manajemen dataset, training dan evaluasi akurasi model, penanganan unknown face, serta riset machine learning XGBoost.",
    href: "/#projects",
    icon: FaBrain,
    gradient: "from-emerald-500 to-teal-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-accent/10 text-accent rounded-full mb-3 sm:mb-4 border border-accent/20">
            Competencies & Services
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-cyan-100 to-muted-foreground bg-clip-text text-transparent leading-tight">
            Technical Capabilities
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-base font-mono">
            Solusi rekayasa perangkat lunak dan infrastruktur server yang berorientasi pada stabilitas sistem di lingkungan produksi.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="cosmic-glass cosmic-glass-hover rounded-3xl p-5 sm:p-8 flex flex-col justify-between border border-border/80 relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-accent flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      <Icon />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-muted-foreground/30">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors font-mono leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/5 mt-5 sm:mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-accent">Production Grade</span>
                  <a
                    href={service.href}
                    className="text-xs font-mono text-muted-foreground hover:text-white transition-colors"
                  >
                    View Projects →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
