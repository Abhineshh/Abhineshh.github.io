"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Koby",
    description: "Video Streaming React Native Mobile App",
    image: "/images/projects/koby.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abhineshh/koby",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Rango",
    description: "Ride Hailing React Native Android App ",
    image: "/images/projects/rango.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abhineshh/rango",
    previewUrl: "",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce WebApp with CMS using Nextjs",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Commune Web Messenger",
    description: "Web based Chatting with MERN Stack",
    image: "/images/projects/commune.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhineshh/commune-messenger",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Umbrella Prompter",
    description: "Prompt Sharing WebApp",
    image: "/images/projects/umbrellaprompter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhineshh/umbrellaPrompter",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Employee Management System",
    description: "EMS using MERN Stack",
    image: "/images/projects/ems.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhineshh/fictional-robot",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Stock Screener",
    description: "Stock Analyser using MERN Stack",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhineshh/ubiquitous-adventure",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
