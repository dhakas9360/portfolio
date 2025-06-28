import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-1">
            Indian Institute of Information Technology, Allahabad
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8 text-lg">
            Expected graduation with a B.Tech in Information Technology.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-1">
          Indian Institute of Information Technology, Allahabad
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8 text-lg">
            Joined for B.Tech in Electronics & Communication Engeneering 
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-1">
          Prince Academy, Sikar
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg mb-8">
            Completed 12th grade in Science. Built a strong foundation in
            mathematics and physics.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="education" className="w-full md:pl-10">
      <Timeline data={data} />
    </div>
  );
}
