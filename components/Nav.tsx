"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = pathname === link.path;

                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize font-medium transition-all hover:text-accent ${
                            isActive ? 'text-accent' : 'text-foreground'
                        }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav
