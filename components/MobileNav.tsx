"use client";
import React from 'react'
import { motion } from 'framer-motion'


import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : "Services",
        path : "/services"
    },
    {
        name : "Resume",
        path : "/resume"
    },
    {
        name : "Work",
        path : "/work"
    },
    {
        name : "Contact",
        path : "/contact"
    },
]

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center cursor-pointer">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        
        {/* DialogTitle wajib */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        {/* Logo */}
        <div className="text-center mb-28 mt-28 text-4xl font-semibold">
          <Link href="/">
            Ivan<span className="text-accent"> .</span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-xl capitalize hover:text-accent transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav
