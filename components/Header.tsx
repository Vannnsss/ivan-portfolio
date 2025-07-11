import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-primary">
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}

        <Link href="/">
        <h1 className="text-4xl font-semibold text-accent">
          Ivan<span className="text-accent">.</span>
        </h1>
        </Link>

        {/* navbar */}
        <div className="hidden xl:flex items-center gap-8 text-md ">
          <Nav />
          <Link href="/contact" className="no-underline">
            <Button
              className="bg-accent-foreground text-accent border-2 border-accent
                        hover:bg-accent hover:text-accent-foreground hover:border-primary
                        dark:bg-gray-700 dark:text-black dark:bg-accent-dark
                        transition-colors duration-300 dark:border-white "
            >
              Hire me
            </Button>


          </Link>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header
