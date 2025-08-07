"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  // { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`
              capitalize font-medium transition-colors
              hover:text-accent
              ${isActive ? 'text-accent' : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            {link.name}
          </Link>
        );
      })}

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
