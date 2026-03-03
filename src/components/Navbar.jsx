import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import logo from "../assets/sahilDeoreLogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={50} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sahil-d105/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sahildk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sahil__105/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Sahil80562428"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
