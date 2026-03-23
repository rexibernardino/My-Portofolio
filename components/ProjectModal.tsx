"use client";

import { motion } from "framer-motion";
import { X, Globe, Github } from "lucide-react";

export function ProjectModal({ project, onClose }: any) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Overlay menggunakan background utama dengan blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-xl"
      />

      <motion.div 
        layoutId={`project-${project.id}`}
        className="relative w-full max-w-5xl bg-[var(--background)] border border-[var(--card-border)] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-slate-100 dark:bg-slate-800 text-[var(--foreground)] hover:scale-110 rounded-full transition-all"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto p-8 md:p-16 custom-scrollbar">
          <div className="text-center space-y-6 mb-12">
            <div className="flex justify-center items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              <span>{project.category}</span>
              <span className="w-1 h-1 bg-[#c5a059] rounded-full" />
              <span>2026</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight">
              {project.title}
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-4 py-2 bg-[var(--card)] border border-[var(--card-border)] rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* IMAGE PREVIEW DETAIL (Letakkan di paling bawah) */}
            <div className="mt-20 rounded-3xl overflow-hidden border border-[var(--card-border)] shadow-2xl">
              <img src={project.image} alt="Project Detail" className="w-full h-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 bg-[#c5a059] text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-[#c5a059]/20">
                <Globe size={18} /> LIVE PLATFORM
              </a>
              <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] px-8 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Github size={18} /> REPOSITORY
              </a>
            </div>

            {/* DETAIL SECTION (What the system does & Why it matters) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-20 pt-20 border-t border-[var(--card-border)]/30 text-left px-4">
              
              {/* Kolom Kiri: WHAT THE SYSTEM DOES */}
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-[var(--foreground)] tracking-tight">
                  What the system does
                </h2>
                <div className="space-y-8">
                  {project.whatDoes && project.whatDoes.map((item: any, index: number) => (
                    <div key={index} className="flex gap-6 items-start border-b border-[var(--card-border)]/20 pb-6 last:border-none">
                      <span className="text-xs font-bold text-[#c5a059] pt-1">
                        {item.number}
                      </span>
                      <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: WHY IT MATTERS */}
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-[var(--foreground)] tracking-tight">
                  Why it matters
                </h2>
                <div className="space-y-8">
                  {project.whyMatters && project.whyMatters.map((text: string, index: number) => (
                    <p key={index} className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* TOOLS USED IN DELIVERY CARD - OPTION 1 (CLEAN WHITE) */}
            <div className="bg-white border border-[var(--card-border)] rounded-3xl p-10 md:p-16 shadow-inner transition-colors duration-300 relative overflow-hidden group/stack">
              
              {/* Variasi: Berikan sedikit sentuhan emas di pojok saat hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full translate-x-10 -translate-y-10 group-hover/stack:scale-150 transition-transform duration-500" />

              <div className="relative z-10 space-y-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--gold)]">
                  STACK
                </span>
                
                {/* Teks Emas di atas putih solid - Sangat Terbaca */}
                <h3 className="text-4xl font-serif text-[var(--gold)] tracking-tight border-b border-[var(--card-border)] pb-8 leading-tight">
                  Tools used in delivery
                </h3>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-5 py-2.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider shadow-sm hover:border-[var(--gold)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}