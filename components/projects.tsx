"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"


type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  longDescription?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Agro-Bazzar",
    description: "Direct sales in consumer and farmers",
    image: "/agriculture_sales.jpeg?height=600&width=800",
    tags: ["Node.js", "Express","MongoDB","Mongoose", "JWT", "Postman", "Git"],
    github: " https://github.com/dhakas9360/Agro-Bazar",
    //demo: "https://eazyparking.tech",
    longDescription:
      "Developed a web-based agriculture management system connecting over 50+ farmers and 200+ consumers, enabling direct sales of fresh produce and reducing middlemen by 100 "},
  {
    id: 2,
    title: " Personalized Health Tracker and Analysis ",
    description: " Provide users with the ability to track various 10+ health metrics.",
    image: "/health_tracker.jpeg?height=600&width=800",
    tags: ["Node.js"," ExpressJS", "ReactJS"," MongoDB"],
    github: " https://github.com/dhakas9360/Personalized-Health-Tracker-and-Analysis",
    // demo: "https://example.com",
    longDescription:
      " Provide users with the ability to track various 10+ health metrics, analyze the collected data, and receive insights for making informed decisions about their health"  },
    {
    id: 3,
    title: "Student-Entry-Exit-Management-System",
    description: " Entry and Exit protocol across 5+ campus locations",
    image: "/Entry-Exit.jpeg?height=600&width=800",
    tags: [ "HTML" , "CSS" ,"JavaScript", "PHP", "MySQL"],
    github: "https://github.com/dhakas9360/Student-Entry-Exit-Management-System",
    // demo: "https://example.com",
    longDescription:
      " Implemented a comprehensive entry and exit protocol across 5+ campus locations, incorporating a credit-based discipline"},
  // {
  //   id: 4,
  //   title: "FB Thinker",
  //   description: "A product review summarization and classification system.",
  //   image: "/fbthinker.jpg?height=600&width=800",
  //   tags: ["Python", "Hugging Face Transformers", "PyTorch"],
  //   github: "https://github.com/latelateef/FB-THINKER-ENGLISH",
  //   longDescription:
  //     "A product review summarization and classification system that uses Hugging Face Transformers and PyTorch. It provides a user-friendly interface for users to input product reviews and receive summarized insights and classifications.",
  // },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="dark:bg-black text-white">
      <div className="section-container lg:w-[65%] w-[90%]">
        <h2 className="section-title text-black dark:text-white">Projects</h2>
        <p className="section-subtitle text-gray-700 dark:text-gray-300">Selected works I've built</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="group" onClick={() => setSelectedProject(project)}>
              <div className="overflow-hidden rounded-lg dark:bg-black border border-zinc-800 shadow-md hover:shadow-xl  duration-300 cursor-pointer h-full flex flex-col group-hover:border-blue-500 group-hover:scale-105 transition-transform ease-in-out">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-zinc-800">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black dark:bg-zinc-700 rounded-full text-xs font-medium text-white dark:text-zinc-200">
                        {tag}
                      </span>

                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-800 text-black dark:text-white dark:hover:bg-zinc-700 
                  hover:bg-zinc-300">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-lg text-white border-gray-800">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-black dark:text-white">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-700 dark:text-gray-400">{selectedProject.tags.join(" • ")}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-col items-center px-8">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-[80%] h-auto rounded-lg mb-4"
                />
                <p className="text-gray-700 dark:text-gray-400 mb-6">{selectedProject.longDescription || selectedProject.description}</p>
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="border-gray-700 text-black dark:text-white
                    hover:bg-gray-200 dark:hover:bg-gray-800">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="bg-black dark:bg-white text-white dark:text-black dark:hover:bg-gray-200 hover:bg-gray-800">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
