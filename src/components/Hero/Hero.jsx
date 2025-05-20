import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-[#A855F7] to-[#9333EA] h-[80vh] sm:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: "url('/assets/hero/hero.jpg')",
          filter: "brightness(35%)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-6 md:px-12 max-w-2xl mx-auto text-shadow"
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight sm:tracking-normal md:tracking-wide text-white">
          Hello, I'm <span className="text-[#00B8D9]">Arun Vasam</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 tracking-wide text-white opacity-90">
          A Software Developer dedicated to solving real-world problems through innovative, purposeful solutions.
        </p>

        <div className="mt-8">
          <Link
            to="projects"
            smooth={true}
            offset={-80} // adjust this if you have a fixed header height
            duration={500}
            tabIndex={0}
            className="inline-block bg-[#00B8D9] text-[#111111] py-3 px-8 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#00A1B8] ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00B8D9]"
            aria-label="Scroll to Projects section"
          >
            Check out my work below
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gradient-to-r from-[#00B8D9] to-[#9333EA] animate-pulse opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[150px] bg-gradient-to-b from-transparent to-[#111111] opacity-70"></div>
    </section>
  );
};

export default Hero;
