import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-6 md:px-12 bg-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/avatar.jpg"
            alt="Arun Vasam"
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-[#A855F7]"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A855F7]">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Arun Vasam</span>, a
            developer who thrives on turning ideas into reality through clean,
            efficient code. With a strong passion for frontend development and
            product design, I build digital experiences that leave lasting
            impressions.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            My mission is to create not just websites—but a brand experience.
            From functionality to aesthetic, I ensure that every piece of work
            reflects creativity, clarity, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
