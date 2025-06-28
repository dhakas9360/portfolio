"use client";
import React from "react";
import { motion } from "framer-motion";

export function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "JEE Mains Top Scorer",
      description:
        "Achieved percentile of 99.67 in JEE Mains 2022, securing a rank of 3011.",
    },
    {
      id: 2,
      title: "JEE Advanced",
      description: "Qualified and secured a rank of 7132 in JEE Advanced 2022.",
    },
    {
      id: 3,
      title: "CTF Competition",
      description:
        "Secured 2nd rank in CTF conducted in Aporaksha (techfest at IIITA) among 100+ teams.",
    },
    {
      id: 4,
      title: "Tata Imagination Challenge 2024",
      description:
        "National Semi-Finalist among 300,000+ participants in the Tata Group competition",
    },
    {
      id: 5,
      title: "Competitive Programming",
      description:
        "Solved 850+ questions of data structures and algorithms across various online coding platforms.",
      link: " https://leetcode.com/leetlateef/",
    },
  ];
  return (
    <section
      id="achievements"
      className="bg-white dark:bg-black text-black dark:text-white lg:px-32"
    >
      <div className="section-container">
        <h2 className="section-title">
          Achievements & Recognitions
        </h2>
        <p className="section-subtitle text-gray-700 dark:text-gray-300">
          Notable accomplishments throughout my journey
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=""
            >
              <a href={achievement.link} target="_blank" className="p-10 rounded-lg border border-gray-800 dark:border-gray-800 shadow-lg hover:shadow-xl duration-300 cursor-pointer h-full flex flex-col hover:scale-105 transition-transform ease-in-out gap-2 items-center justify-around">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
                {achievement.link && (
                  <span
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-300"
                  >
                    Click me
                  </span>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
