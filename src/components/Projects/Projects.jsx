import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#030712] text-[#f1f5f9]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5da9e2] to-[#6531c8] tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-[#a5b4fc]">
            From ideas to deployment — here are some elegant solutions.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl border border-[#2f354f] bg-[#111827] shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                  className="block focus:outline-none rounded-t-2xl"
                >
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#5da9e2]">
                      {project.title}
                    </h3>
                    <div className="h-[1px] w-10 bg-[#5da9e2] rounded my-2"></div>
                    <p className="text-sm text-[#e2e8f0] leading-relaxed">
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
                        className="bg-[#292e42] text-[#98baf2] px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm"
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
                      className="text-[#5da9e2] text-xl hover:text-[#7bb5f4] transition focus:outline-none rounded"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`Live demo for ${project.title}`}
                      className="text-[#5da9e2] text-xl hover:text-[#7bb5f4] transition focus:outline-none rounded"
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
