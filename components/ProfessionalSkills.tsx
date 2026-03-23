"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Database, Monitor, Server, Cog } from "lucide-react";
import { SkillCard } from "./SkillCard";
import { GlowingEffect } from "./ui/glowing-effect"; // Pastikan path benar


const skillsData = [
  // DATA
  { id: 1, title: "Machine Learning", category: "data", rating: 4.5, label: "Advanced" },
  { id: 2, title: "Data Visualization", category: "data", rating: 4, label: "Advanced" },
  // FRONTEND
  { id: 3, title: "React.js", category: "frontend", rating: 4, label: "Advanced" },
  { id: 4, title: "Tailwind CSS", category: "frontend", rating: 5, label: "Expert" },
  // BACKEND
  { id: 5, title: "Node.js", category: "backend", rating: 3.5, label: "Intermediate" },
  { id: 6, title: "Python (FastAPI)", category: "backend", rating: 4.5, label: "Expert" },
  // TOOLS & OS
  { id: 7, title: "PostgreSQL", category: "tools&os", rating: 4, label: "Advanced" },
  { id: 8, title: "Git & GitHub", category: "tools&os", rating: 4.5, label: "Expert" },
  { id: 9, title: "Linux / Ubuntu", category: "tools&os", rating: 3.5, label: "Intermediate" },
];

export function ProfessionalSkills() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", icon: <LayoutGrid size={18} /> },
    { id: "data", label: "Data", icon: <Database size={18} /> },
    { id: "frontend", label: "Frontend", icon: <Monitor size={18} /> },
    { id: "backend", label: "Backend", icon: <Server size={18} /> },
    { id: "tools&os", label: "Tools & OS", icon: <Cog size={18} /> },
  ];

  // Logika Filter untuk kategori "All"
  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-[8%] transition-colors">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
          Professional <span className="text-[#c5a059]">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#c5a059] text-white shadow-lg shadow-[#c5a059]/30 scale-105"
                  : "bg-[var(--card)] text-slate-500 border border-[var(--card-border)] hover:border-[#c5a059]"
              }`}
            >
              <span className={activeTab === tab.id ? "text-white" : "text-[#c5a059]"}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ProfessionalSkills;