import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // Fetch experience data
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data) => setWorkExperience(data))
      .catch((err) => console.error("Error fetching experience:", err));

    // Fetch education data
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education:", err));
  }, []);

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d0d0d] to-[#1e1e1e] text-white relative overflow-hidden"
    >
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
                {/* Image */}
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A855F7]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                  <ul className="text-sm text-gray-300 mt-3 leading-relaxed list-disc pl-5">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
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
                {/* Image */}
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.degree}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A855F7]">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-gray-400">{item.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                  <ul className="text-sm text-gray-300 mt-3 leading-relaxed list-disc pl-5">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
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
