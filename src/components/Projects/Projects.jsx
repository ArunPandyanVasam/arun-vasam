import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#0F172A] text-[#F1F5F9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            From ideas to deployments — here are some solutions I've engineered.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#334155] bg-[#1E293B] shadow-md hover:shadow-xl transition duration-300"
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
                <h3 className="text-xl font-bold text-[#6366F1]">{project.title}</h3>

                <div className="h-[2px] w-12 bg-[#6366F1] rounded"></div>

                <p className="text-sm text-[#94A3B8] leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1E40AF] text-[#C7D2FE] px-3 py-1 rounded-full text-xs font-medium tracking-wide"
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
                    className="text-[#6366F1] text-xl hover:text-[#4338CA] transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`Live demo for ${project.title}`}
                    className="text-[#6366F1] text-xl hover:text-[#4338CA] transition"
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
