import { motion } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-black/50 py-12 text-zinc-400">
      <div className="container mx-auto px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <span className="text-xl font-bold tracking-tighter text-white">
            Sahil Deore
          </span>
          <p className="mt-2 text-sm">
            Elevating brands through premium digital experiences.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6"
        >
          <a
            href="https://www.linkedin.com/in/sahil-d105/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Sahildk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/sahil__105/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/Sahil80562428"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-zinc-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-medium"
        >
          &copy; {new Date().getFullYear()} Sahil Deore. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
