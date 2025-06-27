"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData as projects } from "./ProjectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const categories = ["All", "Frontend", "Fullstack", "CMS", "Next.js"];

  return (
    <div className="pt-16 pb-24 bg-[#0f172a]">
      <div className="w-[85%] mx-auto text-center">
        <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold uppercase">
          Latest Works
        </h2>
        <h1 className="text-white text-3xl sm:text-4xl font-bold mt-2">
          Driving Change with Innovative Projects
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium border ${
                selectedCategory === cat
                  ? "bg-yellow-300 text-black"
                  : "text-white border-yellow-300"
              } hover:bg-yellow-300 hover:text-black transition`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
                layout
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-4 border-purple-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-left ">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        {filteredProjects.length > 3 && (
          <div className="mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white border border-yellow-300 px-6 py-3 rounded-full uppercase hover:bg-yellow-300 hover:text-black transition font-semibold"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
