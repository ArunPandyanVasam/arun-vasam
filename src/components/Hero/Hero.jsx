import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-[#A855F7] to-[#9333EA] h-auto min-h-[90vh] flex items-center justify-center text-white overflow-hidden py-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero/hero.jpg')",
          filter: "brightness(35%)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl gap-12"
      >
        <div className="flex-shrink-0">
          <img
            src="/assets/about/aboutImage.png"
            alt="Arun Vasam"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#00B8D9] shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hello, I'm <span className="text-[#00B8D9]">Arun Vasam</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white opacity-90 mb-8">
            A Software Developer dedicated to solving real-world problems
            through innovative, purposeful solutions.
          </p>

          <Link
            to="projects"
            // smooth={true}
            offset={-80}
            // duration={500}
            tabIndex={0}
            className="inline-block bg-[#00B8D9] text-[#111111] py-3 px-8 rounded-full text-lg font-semibold  transition-all duration-300 transform hover:scale-105  hover:bg-[#00B8D9] ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00B8D9]"
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
