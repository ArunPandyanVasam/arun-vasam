import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#030712] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white select-none">
          ARUN<span className="text-[#6531c8]">VASAM</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12 font-semibold">
          {navLinks.map((item) => (
            <li key={item} className="uppercase tracking-wider cursor-pointer">
              <Link
                to={item.toLowerCase()}
                offset={-70}
                spy={true}
                // smooth={true}
                // duration={500}
                activeClass={styles.activeNav}
                className={styles.navItem}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="text-white hover:text-[#6531c8] focus:outline-none focus:ring-2 focus:ring-[#5da9e2] rounded"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#030712dd] backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#6531c8] focus:outline-none focus:ring-2 focus:ring-[#5da9e2] rounded"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-center gap-12 text-3xl font-bold text-white">
            {navLinks.map((item) => (
              <li key={item} className="uppercase tracking-wider cursor-pointer">
                <Link
                  to={item.toLowerCase()}
                  offset={-70}
                  spy={true}
                  // smooth={true}
                  // duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass={styles.activeNav}
                  className={styles.navItem}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
