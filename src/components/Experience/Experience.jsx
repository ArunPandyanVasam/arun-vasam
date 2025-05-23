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

const TimelineItem = ({
  icon,
  title,
  subtitle,
  duration,
  description,
  image,
}) => (
  <motion.div
    className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] flex items-center justify-center bg-purple-600 text-white rounded-full shadow-md text-sm md:text-base">
      {icon}
    </div>

    <div className="flex-1">
      <h4 className="text-base md:text-lg font-semibold text-[#A855F7]">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-gray-300">{subtitle}</p>
      <p className="text-[10px] md:text-xs text-gray-500 mt-1">{duration}</p>
      <ul className="mt-2 md:mt-3 text-xs md:text-sm text-gray-300 list-disc pl-5 space-y-1 leading-relaxed">
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
            <FaBriefcase className="text-white text-xs md:text-sm" />
          ) : activeTab === "Part-Time" ? (
            <FaClock className="text-white text-xs md:text-sm" />
          ) : (
            <FaGraduationCap className="text-white text-xs md:text-sm" />
          )
        }
        title={item.title || item.degree}
        subtitle={item.company || item.institution}
        duration={item.duration}
        description={item.description}
        image={item.image}
      />
    ));
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-12 bg-black  text-white"
    >
      <div className="max-w-4xl sm:max-w-5xl mx-auto">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Chapters of My Journey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A simple story of hard work and growth.
          </p>
        </motion.div>

        <div className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#2a2a2a] rounded-2xl p-6 sm:p-8">
          <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex flex-shrink-0 items-center gap-2 px-3 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.name
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
                aria-pressed={activeTab === tab.name}
              >
                {tab.icon}
                <span className="text-sm sm:text-base">{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="divide-y divide-gray-700">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
