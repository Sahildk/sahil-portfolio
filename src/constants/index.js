import project1 from "../assets/projects/project-1.webp"
import project2 from "../assets/projects/project-2.webp"
import project3 from "../assets/projects/project-3.webp"
import project4 from "../assets/projects/project-4.webp"
import projectNexusAI from "../assets/projects/project-nexus-ai.png"
import projectTenantWatch from "../assets/projects/project-tenantwatch.png"

export const HERO_CONTENT = [
  "I build intelligent, production-ready applications at the intersection of AI and full-stack development — from LLM-powered systems with Google Gemini to high-performance web apps with React, Next.js, and FastAPI.",
  "I've shipped real AI products, won hackathons, and delivered client projects — combining deep technical skills in prompt engineering, context-aware AI systems, and modern web architecture to solve meaningful problems.",
]

export const AI_PROJECTS = [
  {
    title: "Nexus AI Interviewer",
    image: projectNexusAI,
    description:
      "AI-powered mock interview platform using Google Gemini API with voice interaction, adaptive AI persona, real-time scoring, and structured feedback. Built with context-aware prompt engineering for realistic interview simulation. 🏆 3rd Runner-Up at hackathon.",
    technologies: [
      "Google Gemini API",
      "Prompt Engineering",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    year: "2025",
    link: "https://github.com/Sahildk/ai-interviewer",
  },
  {
    title: "TenantWatch — AI Safety Platform",
    image: projectTenantWatch,
    description:
      "Tenant safety monitoring platform with AI-powered news classification using Hugging Face zero-shot models, geospatial heatmaps, and real-time safety scoring. Full-stack with Next.js frontend, FastAPI backend, and MongoDB geospatial queries.",
    technologies: [
      "Hugging Face",
      "FastAPI",
      "Python",
      "Next.js",
      "MongoDB",
      "Zero-Shot Classification",
    ],
    year: "2025",
    link: "https://github.com/Sahildk/astrix-developer",
  },
]

export const PROJECTS = [
  {
    title: "Cabin Renting System",
    image: project1,
    description:
      "Built a full-stack cabin renting platform with user authentication, booking management, and RESTful APIs, following a production-ready architecture.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    year: "2024",
    link: "https://github.com/Sahildk",
  },
  {
    title: "Plot Venture Website (Client Project)",
    image: project2,
    description:
      "Developed a CMS-driven real estate website for a client, enabling dynamic content management with a clean, responsive, and SEO-friendly interface.",
    technologies: ["Next.js", "Strapi CMS", "Tailwind CSS"],
    year: "2025",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Designed and developed a responsive personal portfolio showcasing projects and skills with a modern UI and optimized performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    link: "#",
  },
  {
    title: "Revamp Gym Website (Client Project)",
    image: project4,
    description:
      "Revamped an existing gym website with a modern UI, improved responsiveness, and better performance to enhance user engagement and accessibility.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    year: "2025",
    link: "#",
  },
]

export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `Delivering end-to-end web development for clients — including a CMS-driven real estate site (Plot Venture), a modern gym website revamp, and multiple business landing pages. Specializing in responsive design, SEO optimization, and fast load times using Next.js, React, and Tailwind CSS. 3+ client projects completed.`,
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Strapi CMS", "SEO"],
  },
  {
    year: "June 2025 - July 2025",
    role: "Frontend Developer Intern",
    company: "Dosa Plaza India",
    description: `Developed and optimized responsive, SEO-friendly web interfaces using React, Next.js, and Tailwind CSS. Improved page performance and mobile usability while building reusable UI components for production use.`,
    technologies: ["React.js", "JavaScript", "Next.js", "Tailwind CSS"],
  },
  {
    year: "May 2025 - June 2025",
    role: "Contract Web Developer",
    company: "Dosa Plaza India",
    description: `Developed a responsive, SEO-optimized hotel website using HTML, JavaScript, and Tailwind CSS, ensuring a clean UI, fast load times, mobile-friendly design, and improved search engine ranking potential.`,
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
  },
]

export const CONTACT = {
  address: "Navi Mumbai, Maharashtra, India",
  phoneNo: "+91 932 438 7549",
  email: "sahildeore1234@gmail.com",
}
