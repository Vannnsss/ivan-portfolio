"use client";

import { BsArrowRightShort } from "react-icons/bs";
import { FaCode, FaNetworkWired, FaBrain, FaLock } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Fullstack Developer",
    description:
      "Membangun aplikasi web end-to-end dari frontend yang responsif hingga backend yang scalable. Menguasai React, Next.js, Php Framework, dan database modern untuk solusi digital yang lengkap.",
    href: "/work",
    icon: FaCode,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    num: "02",
    title: "Network Engineer",
    description:
      "Merancang, mengimplementasikan, dan mengelola infrastruktur jaringan yang aman dan handal. Termasuk konfigurasi router, switch, VPN, dan monitoring jaringan enterprise.",
    href: "/work",
    icon: FaNetworkWired,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    num: "03",
    title: "Machine Learning Engineer",
    description:
      "Mengembangkan model AI/ML untuk solusi cerdas. Mulai dari data preprocessing, training model, evaluasi, hingga deployment untuk prediksi dan otomatisasi bisnis.",
    href: "/work",
    icon: FaBrain,
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    num: "04",
    title: "Cyber Security Specialist",
    description:
      "Melindungi sistem dan data dari ancaman cyber. Melakukan penetration testing, security audit, implementasi firewall, dan respons insiden untuk keamanan menyeluruh.",
    href: "/work",
    icon: FaLock,
    gradient: "from-green-500 to-emerald-400",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-accent/10 text-accent rounded-full mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Solusi teknologi komprehensif untuk mengubah ide Anda menjadi produk digital yang powerful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={service.href}
                  className="group relative block p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5"
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${service.gradient.includes("blue") ? "rgba(59,130,246,0.03)" : service.gradient.includes("purple") ? "rgba(168,85,247,0.03)" : service.gradient.includes("orange") ? "rgba(249,115,22,0.03)" : "rgba(34,197,94,0.03)"} 100%)`,
                    }}
                  />

                  <div className="relative flex flex-col gap-6">
                    {/* Top row: Number & Icon */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-black text-muted/30 group-hover:text-accent/40 transition-colors duration-500">
                          {service.num}
                        </span>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-border/50 group-hover:border-accent/50 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                        <BsArrowRightShort className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`h-1 w-0 rounded-full bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700 ease-out`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
