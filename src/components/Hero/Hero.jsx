import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] min-h-[90vh] flex items-center justify-center overflow-hidden py-16 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/assets/hero/hero_background.jpg')",
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
            src="/assets/hero/hero_profile.png"
            alt="Arun Vasam"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#6366F1] shadow-xl"
          />
        </div>

        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">
            Hello, I'm Arun Vasam
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#94A3B8] mb-8">
            A Software Developer dedicated to building real-world solutions through purposeful and efficient code.
          </p>

          <Link
            to="projects"
            offset={-80}
            className="inline-block bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6366F1]/50"
            aria-label="Scroll to Projects section"
          >
            Check out my work
          </Link>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent to-[#0F172A] pointer-events-none" />
    </section>
  );
};

export default Hero;
