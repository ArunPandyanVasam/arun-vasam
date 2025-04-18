import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/images/avatar.jpg"
            alt="Arun Vasam"
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-[#A855F7]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A855F7]">
            ABOUT ME
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-[#A855F7] to-[#9333EA] mb-6 mx-auto md:mx-0 rounded-full" />

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hi, I’m <span className="text-white font-semibold">Arun Vasam</span>, a software developer passionate about building scalable, high-performance web applications using the latest technologies.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            I specialize in frontend development with React.js and have experience in backend technologies like Node.js. I focus on creating clean, maintainable, and scalable code that makes applications intuitive for users and easy for developers to work on.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            I’ve had the privilege of working on projects ranging from e-commerce platforms to real-time analytics dashboards. Each project has been a unique opportunity to hone my problem-solving skills while collaborating with talented teams.
          </p>

          <blockquote className="mt-6 text-gray-400 italic border-l-4 border-[#A855F7] pl-4">
            "Great code is not just about functionality, but readability and scalability."
          </blockquote>

          <p className="mt-6 text-sm text-gray-500 italic">~ Arun Vasam</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
