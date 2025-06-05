import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#f3f5f9] text-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-[#4B5563]">
            From ideas to deployment — here are some elegant solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#F9FAFB] shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                {/* Make image + title + description clickable */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                  className="block focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded-t-2xl"
                >
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-600">
                      {project.title}
                    </h3>
                    <div className="h-[2px] w-12 bg-indigo-600 rounded my-2"></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>

                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        title={tech}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repo"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-indigo-500 text-xl hover:text-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`Live demo for ${project.title}`}
                      className="text-indigo-500 text-xl hover:text-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
