import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Experience", "Projects"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide text-white">
          ARUN<span className="text-[#A855F7]">VASAM</span>
        </div>

        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((item) => (
            <li
              key={item}
              className="relative text-white hover:text-[#A855F7] transition cursor-pointer group uppercase tracking-wider"
            >
              <Link
                to={item.toLowerCase()}
                // smooth={true}
                // duration={500}
                offset={-70}
                className="cursor-pointer"
                activeClass="text-[#A855F7]"
                spy={true}
              >
                {item}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#9333EA] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">
            {navLinks.map((item) => (
              <li key={item} className="uppercase tracking-wider">
                <Link
                  to={item.toLowerCase()}
                  // smooth={true}
                  // duration={500}
                  offset={-70}
                  activeClass="text-[#A855F7]"
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-[#A855F7] transition"
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
