"use client";
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from 'next/link';
import { TiThMenuOutline } from "react-icons/ti";
import ThemeToggle from '@/components/ui/ThemeToggle';

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  // { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Theme Toggle di samping hamburger */}
      <ThemeToggle />
      
      {/* Hamburger Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <TiThMenuOutline className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

          {/* Logo */}
          <div className="text-center mb-28 mt-28 text-4xl font-semibold">
            <Link href="/" onClick={() => setOpen(false)}>
              Ivan<span className="text-accent"> .</span>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col justify-center items-center gap-8 mb-10">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setOpen(false)}
                className="text-xl capitalize hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      
    </div>
  );
};

export default MobileNav;
