import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["About", "Skills", "Values"];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>GitHub</title>
        <path d="M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975c0 5.3 3.438 9.8 8.205 11.387.6.1125.82-.2625.82-.58 0-.2875-.01-1.05-.015-2.06-3.338.7262-4.042-1.61-4.042-1.61-.5462-1.3875-1.335-1.7575-1.335-1.7575-1.09-.7445.0837-.7295.0837-.7295 1.204.0842 1.838 1.235 1.838 1.235 1.07 1.834 2.805 1.304 3.49.9975.1075-.775.4187-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.4687-2.38 1.235-3.22-.1237-.3-.535-1.515.1175-3.16 0 0 1.005-.32 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.1387 3 .405 2.29-1.55 3.295-1.23 3.295-1.23.655 1.645.2437 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.015 2.9-.015 3.3 0 .32.21.697.825.58C20.565 22.0925 24 17.5925 24 12.2975c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.849-3.036-1.85 0-2.134 1.445-2.134 2.939v5.666H9.358V9h3.414v1.561h.047c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.37 4.268 5.451v6.289zM5.337 7.433a2.068 2.068 0 1 1 0-4.136 2.068 2.068 0 0 1 0 4.136zm1.778 13.019H3.559V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:youremail@email.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <title>Email</title>
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16Z" />
      </svg>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hi, I’m <span className="text-white font-semibold">Arun Vasam</span>, a software developer passionate about building scalable, high-performance web applications using the latest technologies.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              I’ve worked on projects ranging from e-commerce platforms to real-time dashboards. Every project helps me grow as both a coder and a collaborator.
            </p>
          </>
        );
      case "Skills":
        return (
          <>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Frontend:</span> React, Vite, Tailwind, HTML, CSS, JavaScript
            </p>
            <p className="mt-2 text-base sm:text-lg text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Backend:</span> Node.js, Express, Flask, Python
            </p>
            <p className="mt-2 text-base sm:text-lg text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Tools:</span> Git, GitHub, REST APIs, MongoDB, Postman
            </p>
          </>
        );
      case "Values":
        return (
          <>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I value clean code, continuous learning, and building things that actually solve real-world problems.
            </p>
            <blockquote className="mt-6 text-lg text-gray-400 italic border-l-4 border-[#A855F7] pl-4">
              "Technology is more than code — it's a tool for solving real-world problems."
            </blockquote>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/about/aboutImage.png"
            alt="Arun Vasam"
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-[#A855F7]"
          />
        </motion.div>

        {/* Text and Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A855F7]">ABOUT ME</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#A855F7] to-[#9333EA] mb-8 mx-auto md:mx-0 rounded"></div>

          {/* Tabs */}
          <nav
            className="flex justify-center md:justify-start gap-6 mb-8"
            role="tablist"
            aria-label="About section tabs"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab.toLowerCase()}`}
                id={`tab-${tab.toLowerCase()}`}
                tabIndex={activeTab === tab ? 0 : -1}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#A855F7] ${
                  activeTab === tab
                    ? "bg-[#A855F7] text-white shadow-lg"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab.toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab.toLowerCase()}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabContentVariants}
              transition={{ duration: 0.4 }}
              className="text-left min-h-[140px]"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Social Icons */}
          <div className="mt-12 flex justify-center md:justify-start gap-8 text-gray-400">
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#A855F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A855F7] rounded"
              >
                {svg}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
