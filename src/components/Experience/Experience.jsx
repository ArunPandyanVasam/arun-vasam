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
    <div className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] flex items-center justify-center bg-[#4F46E5] text-white rounded-full shadow-md text-sm md:text-base">
      {icon}
    </div>

    <div className="flex-1">
      <h4 className="text-base md:text-lg font-semibold text-[#4F46E5]">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-[#1F2937]">{subtitle}</p>
      <p className="text-[10px] md:text-xs text-[#1F2937] mt-1">{duration}</p>
      <ul className="mt-2 md:mt-3 text-xs md:text-sm text-[#1F2937] list-disc pl-5 space-y-1 leading-relaxed">
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

  const renderContent = () => {
    return contentMap[activeTab].map((item, index) => (
      <TimelineItem
        key={index}
        icon={
          activeTab === "Professional" ? (
            <FaBriefcase />
          ) : activeTab === "Part-Time" ? (
            <FaClock />
          ) : (
            <FaGraduationCap />
          )
        }
        title={item.title || item.degree}
        subtitle={item.company || item.institution}
        duration={item.duration}
        description={item.description}
      />
    ));
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-12 bg-[#f6eef0] text-[#1F2937]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">
            My Journey in Work & Education
          </h2>
          <p className="text-[#1F2937] text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A collection of my professional experiences and academic milestones.
          </p>
        </motion.div>

        <div className="bg-[#f2f1f0] border border-[#cdd3db] shadow-sm rounded-2xl p-6 sm:p-8">
          <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                aria-label={`Show ${tab.name} experience`}
                onClick={() => setActiveTab(tab.name)}
                className={`cursor-pointer flex flex-shrink-0 items-center gap-2 px-4 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#4F46E5] ${
                  activeTab === tab.name
                    ? "bg-[#4F46E5] text-white"
                    : "bg-[#E5E7EB] text-[#1F2937] hover:bg-[#D1D5DB]"
                }`}
                aria-pressed={activeTab === tab.name}
              >
                {tab.icon}
                <span className="text-sm sm:text-base">{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="divide-y divide-[#e3f0e2]">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
