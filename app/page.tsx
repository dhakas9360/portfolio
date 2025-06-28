import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Achievements } from "@/components/achievements"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-200">
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
