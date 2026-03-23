// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { Eye, CalendarDays } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect"; 
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group relative h-full rounded-2xl p-1 cursor-pointer transition-all duration-500 flex flex-col"
      whileHover={{ y: -5 }} // Efek angkat sedikit saat hover
    >
      {/* Efek Glowing di Latar Belakang */}
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />

      {/* Konten Utama Kartu */}
      <div className="relative h-full bg-[var(--card)] border border-[var(--card-border)] rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col flex-1 z-10">
        
        {/* Area Gambar Preview */}
        <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay saat Hover dengan Ikon Mata */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-500">
              <Eye size={28} />
            </div>
          </div>
           <span className="absolute top-4 right-4 text-[10px] font-bold text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <CalendarDays size={12}/>
              {project.year}
            </span>
        </div>

        {/* Area Teks Konten */}
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2.5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c5a059]">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[#c5a059] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

        {/* TECH TAGS (SKILLS PREVIEW) */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]/30">
        {project.tags && project.tags.slice(0, 4).map((tag: string) => (
            <span 
            key={tag} 
            className="
                text-[10px] font-bold tracking-tight uppercase
                px-3 py-1 
                /* LIGHT MODE: Background putih bersih dengan teks navy/gelap */
                bg-white border-slate-300 text-slate-700
                /* DARK MODE: Background navy terang/biru slate dengan teks emas/putih */
                dark:bg-slate-800 dark:border-slate-600 dark:text-[#c5a059]
                /* Efek tambahan */
                border rounded-md shadow-sm
                transition-all duration-300
                group-hover:scale-105 group-hover:border-[#c5a059]
            "
            >
            {tag}
            </span>
        ))}
        
        {project.tags && project.tags.length > 4 && (
            <span className="text-[10px] text-[#c5a059] font-black self-center ml-1 italic tracking-widest">
            +{project.tags.length - 4}
            </span>
        )}
        </div>
        </div>
      </div>
    </motion.div>
  );
}