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
              className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-gradient-to-b from-[#222222] to-[#111111] shadow-[0_0_20px_#00000050] hover:shadow-[0_4px_40px_rgba(168,85,247,0.35)] transition duration-300"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </a>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                  {project.title}
                </h3>

                <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#292929] text-gray-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
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
                    className="text-white text-xl hover:text-[#A855F7] transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`Live demo for ${project.title}`}
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
