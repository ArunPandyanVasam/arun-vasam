import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#A855F7] to-[#9333EA] h-[80vh] sm:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: "url('/assets/images/avatar.jpg')",
          filter: "brightness(35%)", // Dim the image further for better contrast
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-12 max-w-2xl mx-auto text-shadow">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight sm:tracking-normal md:tracking-wide text-white">
          Hello, I'm <span className="text-[#00B8D9]">Arun Vasam</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 tracking-wide text-white opacity-90">
          A software developer creating innovative web experiences with clean code and thoughtful design.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-[#00B8D9] text-[#111111] py-3 px-8 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#00A1B8] ease-in-out"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Animated Gradient Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gradient-to-r from-[#00B8D9] to-[#9333EA] animate-pulse opacity-60"></div>

      {/* Subtle Parallax Effect */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[150px] bg-gradient-to-b from-transparent to-[#111111] opacity-70"></div>
    </section>
  );
};

export default Hero;
