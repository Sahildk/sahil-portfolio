import { motion } from "framer-motion"
import { AI_PROJECTS, PROJECTS } from "../constants"
import { ProjectShowcase } from "./ui/project-showcase"

const Projects = () => {
  // Map AI projects
  const mappedAIProjects = AI_PROJECTS.map((project) => ({
    title: project.title,
    description: project.description,
    year: project.year,
    link: project.link,
    image: project.image,
    technologies: project.technologies,
  }))

  // Map regular projects
  const mappedProjects = PROJECTS.map((project) => ({
    title: project.title,
    description: project.description,
    year: project.year || "2024",
    link: project.link || "#",
    image: project.image,
    technologies: project.technologies,
  }))

  return (
    <div id="projects" className="pb-4 pt-16">
      {/* AI Projects Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-2"
      >
        <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-purple-800/50 bg-purple-900/20 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">AI & LLM</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-tight lg:text-4xl bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
          AI Projects
        </h2>
      </motion.div>
      <ProjectShowcase projects={mappedAIProjects} />

      {/* Regular Projects Section */}
      <div className="mt-16">
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
    </div>
  )
}

export default Projects