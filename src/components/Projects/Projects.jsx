import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiVite, SiScikitlearn } from "react-icons/si";

const iconMap = {
  React: <FaReact className="text-cyan-400" />,
  Flask: <SiFlask className="text-gray-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Vite: <SiVite className="text-purple-400" />,
  "Scikit-learn": <SiScikitlearn className="text-yellow-300" />,
};

const projects = [
  {
    title: "AI-Powered Sales Forecasting Tool",
    description:
      "Built a smart inventory and forecasting solution using Flask and React, enabling real-time predictions and dynamic model training.",
    tech: ["React", "Flask", "Scikit-learn"],
    github: "https://github.com/your-username/forecasting-tool",
    demo: "https://forecasting-demo.vercel.app",
    image: "/assets/images/avatar.jpg",
  },
  {
    title: "Solo Travel UI",
    description:
      "A smooth, responsive frontend experience for solo travelers with engaging UI, built using React and Tailwind.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/solo-travel-ui",
    demo: "https://solo-travel-ui.netlify.app",
    image: "/assets/images/avatar.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "My branded, personal website representing my work and identity as a developer and creative builder.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://yourname.dev",
    image: "/assets/images/avatar.jpg",
  },
  {
    title: "AI-Powered Sales Forecasting Tool",
    description:
      "Built a smart inventory and forecasting solution using Flask and React, enabling real-time predictions and dynamic model training.",
    tech: ["React", "Flask", "Scikit-learn"],
    github: "https://github.com/your-username/forecasting-tool",
    demo: "https://forecasting-demo.vercel.app",
    image: "/assets/images/avatar.jpg",
  },
  {
    title: "Solo Travel UI",
    description:
      "A smooth, responsive frontend experience for solo travelers with engaging UI, built using React and Tailwind.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/solo-travel-ui",
    demo: "https://solo-travel-ui.netlify.app",
    image: "/assets/images/avatar.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "My branded, personal website representing my work and identity as a developer and creative builder.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://yourname.dev",
    image: "/assets/images/avatar.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-[#0d0d0d] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-[#2a2a2a] hover:border-[#A855F7] transition-transform hover:scale-[1.015]"
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech badges with icons */}
                <div className="flex flex-wrap gap-2 justify-center items-center text-xs text-gray-300 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#222] px-2 py-1 rounded flex items-center gap-1"
                    >
                      {iconMap[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repo"
                    className="text-white text-2xl hover:text-[#A855F7] transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="text-white text-2xl hover:text-[#A855F7] transition"
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
