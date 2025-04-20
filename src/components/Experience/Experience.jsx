import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const workExperience = [
    {
      title: "Software Developer",
      company: "Pepper Inc.",
      duration: "2023 - Present",
      description: [
        "Developing and deploying AI-powered solutions for real-time sales forecasting.",
        "Optimizing inventory management through predictive analytics.",
        "Collaborating with cross-functional teams to enhance data-driven decision-making.",
        "Implementing machine learning models for dynamic sales prediction.",
      ],
      icon: <FaBriefcase className="text-blue-500 text-3xl animate-pulse" />,
    },
    {
      title: "Frontend Developer",
      company: "XYZ Tech Solutions",
      duration: "2021 - 2023",
      description: [
        "Built responsive web applications using React.",
        "Enhanced user experiences across platforms by implementing intuitive UI/UX.",
        "Worked on the integration of RESTful APIs to connect frontend with backend systems.",
        "Collaborated closely with design and product teams to iterate on features.",
      ],
      icon: <FaBriefcase className="text-blue-500 text-3xl animate-pulse" />,
    },
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "ABC University",
      duration: "2021 - 2023",
      description: [
        "Specialized in advanced machine learning, big data, and AI methodologies.",
        "Focused on predictive analytics and real-time data processing techniques.",
        "Worked on various data-driven research projects and thesis involving AI and ML.",
        "Graduated with honors in a cohort of 40+ students.",
      ],
      icon: <FaGraduationCap className="text-green-500 text-3xl animate-pulse" />,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      duration: "2017 - 2021",
      description: [
        "Focused on software development, AI, and data science.",
        "Built multiple projects in software engineering and machine learning.",
        "Graduated with honors and completed internship in a leading tech company.",
        "Worked on several capstone projects related to web development and AI.",
      ],
      icon: <FaGraduationCap className="text-green-500 text-3xl animate-pulse" />,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d0d0d] to-[#1e1e1e] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            MY EXPERIENCE
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A blend of professional industry experience and strong academic foundation.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-[#A855F7] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Work Experience
            </motion.h3>
            {workExperience.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5 mb-10 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#1e1e1e] p-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A855F7]">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                  <motion.ul
                    className="text-sm text-gray-300 mt-3 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    {item.description.map((desc, index) => (
                      <motion.li
                        key={index}
                        className="list-disc pl-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 * index }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-[#A855F7] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h3>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5 mb-10 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#1e1e1e] p-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A855F7]">{item.degree}</h4>
                  <p className="text-sm text-gray-400">{item.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                  <motion.ul
                    className="text-sm text-gray-300 mt-3 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    {item.description.map((desc, index) => (
                      <motion.li
                        key={index}
                        className="list-disc pl-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 * index }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
