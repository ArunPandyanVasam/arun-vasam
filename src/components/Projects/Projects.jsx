import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#f6eef0] text-[#1F2937]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-[#1F2937] text-base sm:text-lg max-w-xl mx-auto">
            From ideas to deployments — here are some solutions I've engineered.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-lg transition duration-300"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                tabIndex={0}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-[220px] object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </a>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#4F46E5]">{project.title}</h3>

                <div className="h-[2px] w-12 bg-[#4F46E5] rounded"></div>

                <p className="text-sm text-[#1F2937] leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#E0E7FF] text-[#3730A3] px-3 py-1 rounded-full text-xs font-medium tracking-wide"
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
                    className="text-[#4F46E5] text-xl hover:text-[#4338CA] transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`Live demo for ${project.title}`}
                    className="text-[#4F46E5] text-xl hover:text-[#4338CA] transition"
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
