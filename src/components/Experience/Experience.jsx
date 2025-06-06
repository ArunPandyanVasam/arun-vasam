import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaClock } from "react-icons/fa";

import professionalData from "../../data/experience.json";
import partTimeData from "../../data/partTime.json";
import educationData from "../../data/education.json";

const tabs = [
  { name: "Professional", icon: <FaBriefcase /> },
  { name: "Part-Time", icon: <FaClock /> },
  { name: "Education", icon: <FaGraduationCap /> },
];

const TimelineItem = ({ icon, title, subtitle, duration, description }) => (
  <motion.div
    className="flex flex-row items-start gap-4 md:gap-6 mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] flex items-center justify-center bg-[#6531c8] text-white rounded-full shadow-md text-sm md:text-base">
      {icon}
    </div>

    <div className="flex-1">
      <h4 className="text-base md:text-lg font-semibold text-[#5da9e2]">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-[#cabdad]">{subtitle}</p>
      <p className="text-[10px] md:text-xs text-[#cabdad99] mt-1">{duration}</p>
      <ul className="mt-2 md:mt-3 text-xs md:text-sm text-white list-disc pl-5 space-y-1 leading-relaxed">
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Professional");

  const contentMap = {
    Professional: professionalData,
    "Part-Time": partTimeData,
    Education: educationData,
  };

  const getIconByTab = (tabName) => {
    switch (tabName) {
      case "Professional":
        return <FaBriefcase />;
      case "Part-Time":
        return <FaClock />;
      case "Education":
        return <FaGraduationCap />;
      default:
        return null;
    }
  };

  const renderContent = () =>
    contentMap[activeTab].map((item, index) => (
      <TimelineItem
        key={index}
        icon={getIconByTab(activeTab)}
        title={item.title || item.degree}
        subtitle={item.company || item.institution}
        duration={item.duration}
        description={item.description}
      />
    ));

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-12 bg-[#030712] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6531c8] to-[#5da9e2] tracking-tight">
            My Journey in Work & Education
          </h2>
          <p className="text-[#cabdadaa] text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A collection of my professional experiences and academic milestones.
          </p>
        </motion.div>

        <div className="bg-[#0f172a] border border-[#2f354f] shadow-md rounded-2xl p-6 sm:p-8">
          <div className="mb-6 sm:mb-8 flex gap-3 flex-wrap">
            {tabs.map(({ name, icon }) => (
              <button
                key={name}
                aria-label={`Show ${name} experience`}
                aria-pressed={activeTab === name}
                onClick={() => setActiveTab(name)}
                className={`cursor-pointer flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#6531c8] ${
                  activeTab === name
                    ? "bg-[#6531c8] text-white"
                    : "bg-[#1e293b] text-white hover:bg-[#5da9e2]"
                }`}
              >
                {icon}
                <span className="text-sm sm:text-base">{name}</span>
              </button>
            ))}
          </div>

          <div className="divide-y divide-[#2c3a4d]">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
