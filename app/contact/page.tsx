"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "+62 852 3021 7420",
    subtitle: "Available Mon–Fri",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "ivanseptaa@gmail.com",
    subtitle: "Quick response",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    description: "DKI Jakarta, Indonesia",
    subtitle: "Remote friendly",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Hubungi saya untuk pertanyaan, kolaborasi, atau dukungan. Saya siap membantu Anda dengan layanan terbaik.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <motion.div
              variants={fadeInUp}
              className="relative group"
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 sm:p-8 md:p-10 shadow-xl shadow-black/5">
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div variants={fadeInUp}>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="bg-background/50 border-border/60 focus:border-accent/50 transition-colors"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="bg-background/50 border-border/60 focus:border-accent/50 transition-colors"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-border/60 focus:border-accent/50 transition-colors"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+62 xxx xxxx xxxx"
                        className="bg-background/50 border-border/60 focus:border-accent/50 transition-colors"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp}>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                      Service Needed
                    </label>
                    <Select>
                      <SelectTrigger className="w-full bg-background/50 border-border/60 focus:border-accent/50 transition-colors">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Services</SelectLabel>
                          <SelectItem value="fullstack">Fullstack Developer</SelectItem>
                          <SelectItem value="software">Software Developer</SelectItem>
                          <SelectItem value="network">Network Engineer</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">
                      Your Message
                    </label>
                    <Textarea
                      className="h-40 bg-background/50 border-border/60 focus:border-accent/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      variant="accentBlack"
                      size="lg"
                      className="w-full sm:w-auto min-w-[180px] gap-2 group/btn"
                    >
                      Send Message
                      <FaArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 order-1 xl:order-none flex items-start xl:justify-center gap-6 xl:gap-8"
          >
            <div className="w-full max-w-md space-y-6">
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm hover:bg-card/70 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent/20 to-accent/5 text-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.subtitle}
                    </p>
                    <h3 className="text-base font-semibold mb-0.5 truncate">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Decorative bottom element */}
              <motion.div
                variants={fadeInUp}
                className="pt-4"
              >
                <div className="h-px bg-gradient-to-r from-accent/30 via-accent/10 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
