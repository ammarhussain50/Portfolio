import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import project1 from './Images/project1.png'; // Update path accordingly
import project2 from './Images/project2.png'; // Update path accordingly
import project3 from './Images/weather.png'; // Update path accordingly
import project4 from '/Images/world-countries.png'


const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce website with product filtering, cart management, and responsive design.",
      tech: ["React", "Redux", "Tailwind CSS", "Node.js"],
      demoLink: "https://e-commerce-website-g5y1.vercel.app/",
      codeLink: "https://github.com/ammarhussain50/e-commerce",
      image: project1 // Use imported image
    },
    {
      title: "Weather App",
      description: "weather App in which you can find all countries weather",
      tech: ["HTML , CSS , API"],
      demoLink: "https://weather-app2-two-murex.vercel.app/",
      codeLink: "https://github.com/ammarhussain50/weather-app2",
      image: project3 // Use imported image
    },
    {
      title: "CRUD Operations App",
      description: "Create, Read, Update, Delete operations with API integration using JSON Server.",
      tech: ["React", "Axios", "JSON Server", "CSS"],
      demoLink: "https://crud-app-using-axios-beta.vercel.app/",
      codeLink: "https://github.com/ammarhussain50/Crud-App-using-Axios",
      image: project2 // Use imported image
    },
    {
      title: "My Portfolio Website",
      description: "portolio contain react-router dom tailwind css projects.",
      tech: ["React", "react-router", "tailwind-CSS"],
      demoLink: "https://worls-country.vercel.app/",
      codeLink: "https://github.com/ammarhussain50/worls_country",
      image: project4 // Use imported image
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="header flex justify-center text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mt-10 md:mt-20 mb-10">
        Projects
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative group bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Project Image */}
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            {/* Project Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg text-white hover:from-green-400 hover:to-blue-400 transition-all"
                >
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-blue-400 rounded-lg text-blue-400 hover:bg-blue-400/10 transition-all"
                >
                  <FiGithub className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;