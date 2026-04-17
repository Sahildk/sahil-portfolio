"use client"

import { ArrowUpRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

const defaultProjects = [
  {
    title: "Lumina",
    description: "AI-powered design system generator.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Flux",
    description: "Real-time collaboration for creative teams.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Prism",
    description: "Color palette extraction from any image.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Vertex",
    description: "3D modeling toolkit for the web.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop",
  },
]

export function ProjectShowcase({ projects = defaultProjects }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const containerRef = useRef(null)
  const animationRef = useRef(null)
  // Store raw mouse target in a ref — no re-render on every mouse move
  const targetRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })

  const lerp = (a, b, t) => a + (b - a) * t

  // Start RAF loop only while hovering
  const startAnimation = useCallback(() => {
    if (animationRef.current) return // already running
    const tick = () => {
      const dx = targetRef.current.x - smoothRef.current.x
      const dy = targetRef.current.y - smoothRef.current.y
      // Stop loop when close enough — avoids running forever
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        animationRef.current = null
        return
      }
      smoothRef.current = {
        x: lerp(smoothRef.current.x, targetRef.current.x, 0.15),
        y: lerp(smoothRef.current.y, targetRef.current.y, 0.15),
      }
      setSmoothPosition({ ...smoothRef.current })
      animationRef.current = requestAnimationFrame(tick)
    }
    animationRef.current = requestAnimationFrame(tick)
  }, [])

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => () => stopAnimation(), [stopAnimation])

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    startAnimation()
  }, [startAnimation])

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
    setIsVisible(false)
  }, [])

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-zinc-400 text-sm font-medium tracking-wide uppercase mb-8">Selected Work</h2>

      {/* Floating preview image — only rendered when hovering */}
      {isVisible && (
        <div
          className="hidden md:block pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
          style={{
            left: containerRef.current?.getBoundingClientRect().left ?? 0,
            top: containerRef.current?.getBoundingClientRect().top ?? 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative w-[280px] h-[180px] bg-zinc-800 rounded-xl overflow-hidden">
            {hoveredIndex !== null && projects[hoveredIndex] && (
              <img
                src={projects[hoveredIndex].image || "/placeholder.svg"}
                alt={projects[hoveredIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
          </div>
        </div>
      )}

      <div className="space-y-0 text-white">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 border-t border-zinc-800 transition-colors duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-zinc-800/30 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-white font-medium text-xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-white
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-zinc-400
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0 text-white"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      text-zinc-400 text-sm mt-2 leading-relaxed
                      transition-colors duration-300 ease-out
                      ${hoveredIndex === index ? "text-zinc-300" : "text-zinc-500"}
                    `}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`
                            rounded-full px-3 py-1 text-xs font-medium
                            transition-colors duration-300 ease-out border
                            ${
                              hoveredIndex === index
                                ? "border-zinc-600 bg-zinc-800 text-zinc-200"
                                : "border-zinc-800 bg-zinc-900/50 text-zinc-500"
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-xs font-mono text-zinc-500 tabular-nums
                    transition-colors duration-300 ease-out mt-1
                    ${hoveredIndex === index ? "text-zinc-400" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden mt-6 rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-zinc-800" />
      </div>
    </section>
  )
}
