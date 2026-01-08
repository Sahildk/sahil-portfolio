import { motion } from "framer-motion"
import { useState } from "react"
import profilePic from "../assets/sahilDeoreProfile.png"
import { HERO_CONTENT } from "../constants"
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}
const Hero = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    // Simulate download process
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Sahil Deore"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Sahil Deore
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full-Stack Developer | Framer Specialist
            </motion.span>
            <motion.div
              variants={childVariants}
              className="my-2 max-w-lg py-6 space-y-4"
            >
              {HERO_CONTENT.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl leading-relaxed tracking-tighter"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mb-10">
              {/* Primary CTA - View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-4 text-sm font-medium text-stone-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                View Projects
              </a>
              
              {/* Secondary CTA - Download Resume */}
              <a
                href="/resume.pdf"
                download
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white rounded-full px-6 py-4 text-sm font-medium text-white hover:bg-white hover:text-stone-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  "Download Resume"
                )}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
