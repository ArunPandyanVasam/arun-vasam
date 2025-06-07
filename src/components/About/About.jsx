import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Skills", "Tools"];

  const tabContent = {
    Story: `I'm an aspiring Software Developer with a strong foundation in computer science fundamentals and a deep curiosity about how systems work under the hood. My journey began with small coding experiments, which evolved into building real-world projects and exploring scalable backend systems.
    I have hands-on experience in object-oriented programming, data structures and algorithms, relational and non-relational databases, and RESTful API development. I particularly enjoy solving complex problems, designing clean system architecture, and writing maintainable code.
    Currently, I'm deepening my skills through consistent, structured learning and backend-focused projects. I'm seeking an opportunity to contribute to a collaborative, engineering-driven environment where I can apply my knowledge, grow with a team, and make a meaningful impact as a developer.`,

    Skills: `• Programming Languages: Python, Java
    • Core CS: Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, DBMS, Operating Systems
    • Backend: REST API Development, SQL & NoSQL Databases (MySQL, MongoDB)
    • System Design: Low-Level Design Principles
    • Version Control & Collaboration: Git, GitHub`,

    Tools: `• Development: VS Code, IntelliJ IDEA
    • API & Testing: Postman
    • Database: MySQL Workbench, MongoDB Compass
    • Deployment: Render, Railway, Netlify, Vercel
    • Design & PM: Figma, Trello, Jira`,
  };

  const renderContent = () =>
    tabContent[activeTab].split("\n").map((line, index) => (
      <p key={index} className="mb-2 text-white">
        {line}
      </p>
    ));

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/ArunPandyanVasam",
      icon: <FaGithub size={22} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arun-vasam/",
      icon: <FaLinkedin size={22} />,
    },
    {
      label: "Twitter",
      href: "https://x.com/APandyan",
      icon: <FaTwitter size={22} />,
    },
    {
      label: "Email",
      href: "mailto:arunpandyanv@gmail.com",
      icon: <MdEmail size={22} />,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-[#5da9e2] text-xs uppercase tracking-widest mb-3 text-center lg:text-left select-none">
              Developer · Problem Solver · Innovator
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#6531c8] to-[#5da9e2]">
              Meet <span className="text-[#5da9e2]">Arun Vasam</span>
            </h2>

            <div className="flex justify-center lg:justify-start gap-3 flex-wrap mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6531c8] shadow-sm ${
                    activeTab === tab
                      ? "bg-[#6531c8] text-white"
                      : "bg-[#0f172a] text-white hover:bg-[#5da9e2]"
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
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-xl border border-[#5da9e2]">
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
                  className="p-2 text-white hover:text-[#5da9e2] rounded-full transition hover:bg-[#0f172a]"
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
