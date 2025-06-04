import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Skills", "Tools"];

  const tabContent = {
    Story: `I'm an aspiring software developer with a solid foundation in programming fundamentals and a passion for building meaningful, real-world solutions. My journey began with a curiosity for how technology works under the hood—what started as small scripting experiments grew into full-stack applications and a drive for continuous learning.
            I’ve gained hands-on experience in object-oriented programming, data structures and algorithms, web development, databases, and networks. I enjoy working on projects that challenge me to think critically and solve problems creatively.
            Currently, I’m expanding my skill set, exploring new technologies, and contributing to practical projects. I'm excited to join a forward-thinking team where I can grow, collaborate, and make an impact as a developer.`,

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
      href: "https://github.com/ArunPandyanVasam",
      icon: <FaGithub size={24} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arun-vasam/",
      icon: <FaLinkedin size={24} />,
    },
    {
      label: "Twitter",
      href: "https://x.com/APandyan",
      icon: <FaTwitter size={24} />,
    },
    {
      label: "Email",
      href: "mailto:arunpandyanv@gmail.com",
      icon: <MdEmail size={24} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] text-[#1F2937]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-[#4F46E5] text-sm uppercase tracking-widest mb-2 text-center md:text-left">
              Developer. Problem Solver. Innovator.
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-center md:text-left">
              Get to Know <span className="text-[#4F46E5]">Arun Vasam</span>
            </h2>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F46E5] cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#4F46E5] text-white shadow-md"
                      : "bg-[#E5E7EB] text-[#1F2937] hover:bg-[#D1D5DB]"
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
                className="text-left min-h-[140px] text-[#475569] leading-relaxed"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl mt-6 md:mt-0 flex flex-col items-center"
          >
            <img
              src="/assets/about/about.jpg"
              alt="About Arun Vasam"
              className="rounded-xl shadow-md w-full object-cover"
              style={{ maxHeight: "500px", width: "100%" }}
              loading="lazy"
            />

            <div className="mt-8 flex justify-center gap-6 text-[#1F2937] w-full">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-[#4338CA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F46E5] rounded"
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
