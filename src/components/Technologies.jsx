import { motion } from "framer-motion"
import { FaNodeJs, FaPython } from "react-icons/fa6"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiFastapi, SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const SKILL_CATEGORIES = [
  {
    label: "AI & LLM",
    skills: ["Google Gemini API", "Prompt Engineering", "Hugging Face", "Context-Aware Systems"],
    color: "from-purple-400 to-violet-600",
  },
  {
    label: "Languages",
    skills: ["JavaScript", "Python"],
    color: "from-amber-400 to-orange-500",
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    color: "from-green-400 to-emerald-500",
  },
  {
    label: "Database",
    skills: ["MongoDB", "MySQL"],
    color: "from-red-400 to-rose-500",
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render"],
    color: "from-stone-300 to-stone-500",
  },
]

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Bouncing icon row — CSS animation runs on GPU compositor thread */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="tech-icon p-4" style={{ "--bounce-dur": "2.5s" }}>
          <FaPython className="text-7xl text-[#3776AB]" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "3.2s" }}>
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "2.8s" }}>
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "4s" }}>
          <SiFastapi className="text-7xl text-[#009688]" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "3.5s" }}>
          <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "2.2s" }}>
          <FaNodeJs className="text-7xl text-[#339933]" />
        </div>
        <div className="tech-icon p-4" style={{ "--bounce-dur": "5s" }}>
          <SiMongodb className="text-7xl text-[#47A248]" />
        </div>
      </motion.div>

      {/* Categorized skills grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.label}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-stone-800 bg-stone-900/40 backdrop-blur-sm p-5 hover:border-stone-600 transition-all duration-300"
          >
            <h3
              className={`text-sm font-semibold tracking-wide uppercase mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
            >
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-700 bg-stone-800/60 px-3 py-1 text-xs font-medium text-stone-300 hover:border-stone-500 hover:text-white transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies
