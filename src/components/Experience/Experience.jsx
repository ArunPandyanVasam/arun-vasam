import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

import workExperienceData from "../../data/experience.json";
import educationData from "../../data/education.json";

const TimelineItem = ({
  icon,
  title,
  subtitle,
  duration,
  description,
  delay,
}) => (
  <motion.div
    className="relative pl-12 pb-12 border-l border-purple-600"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {/* Dot */}
    <div className="absolute left-[-11px] top-1 w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow-lg flex items-center justify-center">
      {icon}
    </div>

    {/* Card */}
    <div className="bg-[#1c1c1c]/80 backdrop-blur-md border border-[#2a2a2a] rounded-xl p-6 shadow-lg hover:shadow-purple-700/40 transition-shadow duration-300">
      <h4 className="text-lg font-semibold text-[#A855F7]">{title}</h4>
      <p className="text-sm text-gray-300">{subtitle}</p>
      <p className="text-xs text-gray-500 mt-1">{duration}</p>
      <ul className="mt-3 text-sm text-gray-300 list-disc pl-5 space-y-1 leading-relaxed">
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#121212] to-[#1c1c1c] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            MY EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A blend of professional industry experience and strong academic
            foundation.
          </p>
        </motion.div>

        {/* Work & Education Timeline Sections */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              className="text-2xl font-bold text-[#A855F7] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Work Experience
            </motion.h3>
            {workExperienceData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={<FaBriefcase className="text-white text-xs" />}
                title={item.title}
                subtitle={item.company}
                duration={item.duration}
                description={item.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold text-[#A855F7] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h3>
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={<FaGraduationCap className="text-white text-xs" />}
                title={item.degree}
                subtitle={item.institution}
                duration={item.duration}
                description={item.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
