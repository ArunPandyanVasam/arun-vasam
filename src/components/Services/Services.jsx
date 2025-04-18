import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaDatabase, FaPalette } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Build responsive, dynamic, and user-friendly interfaces using modern web technologies.",
    icon: <FaReact className="text-blue-400 text-4xl mb-4" />,
  },
  {
    title: "Backend Development",
    description:
      "Create robust APIs, integrate databases, and manage server-side logic to power your applications.",
    icon: <FaCode className="text-green-400 text-4xl mb-4" />,
  },
  {
    title: "Database Management",
    description:
      "Design, implement, and optimize databases for performance and scalability.",
    icon: <FaDatabase className="text-yellow-400 text-4xl mb-4" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft beautiful and intuitive user interfaces with a focus on user experience and design consistency.",
    icon: <FaPalette className="text-pink-400 text-4xl mb-4" />,
  },
];

// Animation variant for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-[#111111] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-tight">
            My Services
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            I provide full-stack solutions that scale, perform, and look great.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-2xl text-center border border-[#2a2a2a] hover:border-[#A855F7] shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="flex justify-center items-center mb-4 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#A855F7] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-block text-sm font-medium bg-[#A855F7] text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-[#9333EA] hover:shadow-md"
              >
                Get in Touch
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
