import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];

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
    <header className="sticky top-0 z-50 bg-[#F9FAFB] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide text-[#1F2937]">
          ARUN
          <span className="text-[#4F46E5]">VASAM</span>
        </div>

        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((item) => (
            <li
              key={item}
              className="relative text-[#1F2937] hover:text-[#4F46E5] transition cursor-pointer group uppercase tracking-wider"
            >
              <Link
                to={item.toLowerCase()}
                offset={-70}
                className="cursor-pointer"
                activeClass="text-[#4F46E5]"
                spy={true}
              >
                {item}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={28} className="text-[#1F2937]" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#1F2937]"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-[#1F2937]">
            {navLinks.map((item) => (
              <li key={item} className="uppercase tracking-wider">
                <Link
                  to={item.toLowerCase()}
                  offset={-70}
                  activeClass="text-[#4F46E5]"
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-[#4F46E5] transition"
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
