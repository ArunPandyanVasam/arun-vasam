import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Skills", "Tools"];

  const tabContent = {
    Story: `I'm an aspiring software developer with a solid foundation in programming fundamentals and a passion for building meaningful, real-world solutions. My journey began with a curiosity for how technology works under the hood — what started as small scripting experiments grew into full-stack applications and a drive for continuous learning.

I’ve gained hands-on experience in object-oriented programming, data structures and algorithms, web development, databases, and networks. I enjoy working on projects that challenge me to think critically and solve problems creatively.

Currently, I’m expanding my skill set, exploring new technologies, and contributing to practical projects. I'm excited to join a forward-thinking team where I can grow, collaborate, and make an impact as a developer.`,

    Skills: `• JavaScript (ES6+), Python, Flask, React, HTML/CSS
• Machine Learning, Data Analysis, REST API Development
• UI/UX Fundamentals, Responsive Design, Git Version Control`,

    Tools: `• VS Code, GitHub, Postman, Figma
• scikit-learn, pandas, matplotlib, Excel
• Netlify, Vercel, Render, Railway`
  };

  const renderContent = () =>
    tabContent[activeTab].split("\n").map((line, index) => (
      <p key={index} className="mb-2 text-gray-700">
        {line}
      </p>
    ));

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/ArunPandyanVasam",
      icon: <FaGithub size={22} />
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arun-vasam/",
      icon: <FaLinkedin size={22} />
    },
    {
      label: "Twitter",
      href: "https://x.com/APandyan",
      icon: <FaTwitter size={22} />
    },
    {
      label: "Email",
      href: "mailto:arunpandyanv@gmail.com",
      icon: <MdEmail size={22} />
    }
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 bg-[#f9fafb] text-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-indigo-500 text-xs uppercase tracking-widest mb-3 text-center lg:text-left">
              Developer · Problem Solver · Innovator
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Meet <span className="text-indigo-700">Arun Vasam</span>
            </h2>

            <div className="flex justify-center lg:justify-start gap-3 flex-wrap mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={tabContentVariants}
                transition={{ duration: 0.4 }}
                className="text-left min-h-[160px] text-base leading-relaxed"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm sm:max-w-md lg:w-1/2 flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-xl border border-indigo-100">
              <img
                src="/assets/about/about.jpg"
                alt="About Arun Vasam"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex justify-center gap-6 flex-wrap">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-gray-600 hover:text-indigo-600 rounded-full transition hover:bg-indigo-100"
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
