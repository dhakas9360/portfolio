"use client"

import { motion } from "framer-motion"
import { Code, Wrench, Boxes, Settings2 } from "lucide-react"

type Skill = {
  name: string
  category: "languages" | "frameworks" | "tools" | "other"
}

const skills: Skill[] = [
  { name: "HTML/CSS", category: "languages" },
  { name: "JavaScript / TypeScript", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "React", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "Git / Github", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "MongoDB", category: "other" },
  { name: "SQL", category: "other" },
  { name: "LangChain", category: "other" },
  { name: "REST APIs", category: "other" },
  { name: "JWT, OAuth", category: "other" }
]

export function Skills() {
  const categories = [
    { id: "languages", name: "Languages & Core Technologies", icon: <Code className="w-6 h-6" /> },
    { id: "frameworks", name: "Frameworks & Libraries", icon: <Boxes className="w-6 h-6" /> },
    { id: "tools", name: "Tools & Platforms", icon: <Settings2 className="w-6 h-6" /> },
    { id: "other", name: "Other Technical Skills", icon: <Wrench className="w-6 h-6" /> },
  ]

  return (
    <section id="skills" className="bg-white dark:bg-black text-black dark:text-white lg:px-32">
      <div className="section-container">
        <h2 className="section-title text-black dark:text-white">Skills</h2>
        <p className="section-subtitle text-gray-700 dark:text-gray-300">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="p-6 rounded-lg border border-gray-800 dark:border-gray-800 shadow-lg hover:shadow-xl duration-300 cursor-pointer h-full flex flex-col hover:scale-105 transition-transform ease-in-out">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-200 dark:bg-gray-900 rounded-lg mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-3 border border-white-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
                      >
                        <span className="font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
