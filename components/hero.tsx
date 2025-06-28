"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <TextGenerateEffect words={"Hey, I'm Ankit Dhaka 👋"} />
            </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-600 dark:text-gray-400">
          <TextGenerateEffect words={"Undergrad in 7th Sem at IIIT Allahabad | Full-Stack Developer"} />
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          <TextGenerateEffect words={"I'm a full-stack developer passionate about building scalable web apps with clean design and smooth user experiences. Always learning and working, I focus on delivering solutions that are simple yet impactful."} />
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="px-8 py-6 text-base">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="px-8 py-6 text-base transition-all duration-0">
              <a href="https://drive.google.com/file/d/1tL8Xyxe3PxaGeQkjzocyOWbhaLuEFzYx/view?usp=drive_link" target="_blank">Resume</a>
            </Button>
          </div>

        </motion.div>
      </div>

    </section>
  )
}
