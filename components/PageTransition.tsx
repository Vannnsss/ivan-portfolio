"use client";

import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Gunakan key agar AnimatePresence bisa detect perubahan halaman */}
      <div key={pathname}>
        {/* Animasi halaman keluar */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none z-[999]"
        />
        {/* Konten halaman */}
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
