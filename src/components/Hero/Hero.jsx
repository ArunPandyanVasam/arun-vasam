import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden py-20 sm:py-24"
      style={{ backgroundColor: "#030712" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero/hero_background.jpg')",
          zIndex: 0,
        }}
      />

      {/* Partial dark overlay for #030712 with opacity */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(3, 7, 18, 0.95)", zIndex: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl gap-12"
      >
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Arun Vasam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-8"
          >
            A Software Developer dedicated to solving real-world problems
            through innovative, purposeful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              tabIndex={0}
              className="inline-block bg-[#00B8D9] text-[#111111] py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-transform hover:scale-105 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00B8D9]"
              aria-label="Scroll to Projects section"
            >
              Check out my work below
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-shrink-0"
        >
          <img
            src="/assets/hero/hero_profile.png"
            alt="Arun Vasam"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradients */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gradient-to-r from-[#00B8D9] to-[#9333EA] animate-pulse opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[150px] bg-gradient-to-b from-transparent to-[#111111] opacity-70"></div>
    </section>
  );
};

export default Hero;
