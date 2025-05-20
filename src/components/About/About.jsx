import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Skills", "Tools"];

  const tabContent = {
    Story: `Hi, I'm Arun Vasam — a passionate developer who thrives on turning ideas into practical, elegant digital experiences. With a strong foundation in AI and smart technologies, I specialize in building dynamic tools that not only function but solve real-world challenges. Whether it’s a forecasting model or a responsive user interface, I bring logic and creativity together to craft meaningful solutions.`,

    Skills: `• JavaScript (ES6+), Python, Flask, React, HTML/CSS\n• Machine Learning, Data Analysis, REST API Development\n• UI/UX Fundamentals, Responsive Design, Git Version Control`,

    Tools: `• VS Code, GitHub, Postman, Figma\n• scikit-learn, pandas, matplotlib, Excel\n• Netlify, Vercel, Render, Railway`,
  };

  const renderContent = () => {
    return tabContent[activeTab].split("\n").map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/arunvasam",
      icon: <FaGithub size={24} />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/arunvasam",
      icon: <FaLinkedin size={24} />,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/arunvasam",
      icon: <FaTwitter size={24} />,
    },
    {
      label: "Email",
      href: "mailto:arunvasam@email.com",
      icon: <MdEmail size={24} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-2xl mx-auto md:mx-0"
          >
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              Developer. Problem Solver. Innovator.
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-center md:text-left">
              Get to Know <span className="text-purple-500">Arun Vasam</span>
            </h2>

            {/* Tabs */}
            <div className="flex justify-center md:justify-start gap-4 flex-wrap mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    activeTab === tab
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={tabContentVariants}
                transition={{ duration: 0.4 }}
                className="text-left min-h-[140px] text-gray-200 leading-relaxed"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            {/* Social Icons */}
            <div className="mt-10 flex justify-center md:justify-start gap-6 text-gray-400">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
