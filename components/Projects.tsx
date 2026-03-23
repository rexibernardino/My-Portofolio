"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/data/projectsData";

const PROJECTS: Project[] = [ // Pastikan tipe data Project di-import
  {
    id: 1,
    title: "Financial Assistant Bot",
    category: "AI / FINTECH",
    year: "2026", // Properti baru
    description: "A personal AI-powered financial assistant...",
    image: "/project1.jpg",
    heroImage: "/project1-hero.jpg", // Properti baru
    tags: ["PYTHON", "SUPABASE", "RAG"],
    liveUrl: "#",
    githubUrl: "#",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Natural language input for transactions." },
      { number: "02", text: "Advanced RAG Engine for classification." }
    ],
    whyMatters: [
      "Transforms manual record-keeping into efficient conversations.",
      "Provides full visibility into financial health."
    ]
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 px-[8%] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[var(--foreground)]">Featured <span className="text-[#c5a059]">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
