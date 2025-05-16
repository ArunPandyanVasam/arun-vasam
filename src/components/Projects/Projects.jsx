import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#0d0d0d] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-tight">
            Projects that Inspire, Innovate, and Transform
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Every line of code tells a story, every project is a step toward
            making a difference. Dive into the world of innovation, creativity,
            and positive change.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl border border-[#2a2a2a] hover:border-[#A855F7] transition-transform hover:scale-[1.015] bg-[#1a1a1a]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded text-xs"
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
                    className="text-white text-xl hover:text-[#A855F7] transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="text-white text-xl hover:text-[#A855F7] transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
