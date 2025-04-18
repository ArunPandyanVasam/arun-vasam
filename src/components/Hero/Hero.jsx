import React from "react";
import styles from "./Hero.module.css"; // For custom styles if needed

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[80vh] sm:h-[90vh] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: "url('/assets/images/avatar.jpg')",
          filter: "brightness(50%)", // Adds a dimmed effect for better text visibility
        }}
      ></div>
      <div className="relative z-10 px-6 md:px-12 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide text-shadow">
          Hello, I'm Arun Vasam
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 tracking-wide text-shadow">
          A passionate developer who builds amazing web experiences.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block bg-[#A855F7] text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-[#9333EA] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
