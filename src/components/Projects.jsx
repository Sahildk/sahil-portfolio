import { motion } from "framer-motion"
import { PROJECTS } from "../constants"
import { ProjectShowcase } from "./ui/project-showcase"

const Projects = () => {
  // Map our portfolio constants to the expected ProjectShowcase format
  const mappedProjects = PROJECTS.map((project) => ({
    title: project.title,
    description: project.description,
    year: "2024", // Defaulting to 2024 as year is not in constants
    link: "#", // Add links when available
    image: project.image,
    technologies: project.technologies,
  }))

  return (
    <div id="projects" className="pb-4 pt-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl mb-4 font tracking-wide lg:text-4xl"
      >
        Projects 
      </motion.h2>
      <ProjectShowcase projects={mappedProjects} />
    </div>
  )
}

export default Projects