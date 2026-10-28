"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactDetails, personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-fake contact handler: Opens mailto with filled details or shows feedback
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Project Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 xl:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              Get in Touch
            </span>
            <h2 className="text-gradient">Let&apos;s Build Together</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 font-mono">
              Tertarik berdiskusi seputar peluang kerja, proyek web modern, atau integrasi AI? Jangan ragu untuk menghubungi saya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Direct Contact Cards */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="cosmic-glass cosmic-glass-hover rounded-2xl p-5 flex items-center gap-4.5 block group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono block">
                        {item.title} • {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-accent transition-colors truncate block">
                        {item.value}
                      </span>
                    </div>
                  </a>
                );
              })}

              {/* Status Note */}
              <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 text-cyan-200 text-xs sm:text-sm leading-relaxed font-mono">
                💡 <strong className="text-cyan-300">Fast Response:</strong> Anda juga bisa mengirim pesan langsung via WhatsApp atau Email untuk koordinasi lebih cepat.
              </div>
            </motion.div>

            {/* Direct Email Composition Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="cosmic-glass rounded-3xl p-6 sm:p-8 border border-border/80 shadow-2xl space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground mb-1 block">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Pratama"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-white placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground mb-1 block">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-white placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-1 block">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-white placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-1 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pesan atau detail kebutuhan proyek Anda di sini..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-white placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors font-mono resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-accent text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,215,255,0.4)] transition-all cursor-pointer gap-2"
                >
                  <span>Send via Email Client</span>
                  <FiSend />
                </Button>

                {submitted && (
                  <p className="text-xs text-center text-cyan-300 flex items-center justify-center gap-1.5 font-mono pt-2">
                    <FiCheckCircle /> Preparing email client... Silakan lanjutkan pengiriman di aplikasi email Anda.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

