// src/components/ProjectDetailPanel.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Github, CornerDownRight } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  // Animasi untuk panel
    const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { 
        type: "spring", // TypeScript sekarang tahu ini spesifik "spring"
        stiffness: 300, 
        damping: 30 
        } 
    },
    exit: { 
        x: "100%", 
        opacity: 0, 
        transition: { 
        ease: "easeInOut", 
        duration: 0.3 
        } 
    }
    } as const;
    
  // Animasi untuk overlay latar belakang
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Latar Belakang Overlay (Klik untuk menutup) */}
        <motion.div
          key="overlay"
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        />

        {/* Panel Detail yang Meluncur */}
        <motion.div
          key="panel"
          className="relative w-full max-w-7xl h-full bg-[#f6f5f1] dark:bg-slate-950 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Header Panel (Sticky) */}
          <div className="sticky top-0 z-10 bg-[#f6f5f1]/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>{project.category}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>{project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 rounded-full px-5 py-2.5 transition-all"
            >
              <X size={18} />
              <span>CLOSE</span>
            </button>
          </div>

          {/* Konten Panel */}
          <div className="flex-1 p-8 md:p-16 space-y-20">
            {/* Bagian Hero (Judul & Gambar Besar) */}
            <div className="text-center space-y-10">
              <div className="relative inline-block">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] before:content-[''] before:absolute before:-left-12 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-px before:bg-slate-300 after:content-[''] after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-px after:bg-slate-300">
                    CASE STUDY
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-serif text-slate-900 dark:text-white tracking-tighter leading-tight">
                {project.title}
              </h1>
              
              <p className="max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Tombol Aksi */}
              <div className="flex flex-wrap justify-center gap-5 pt-8">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-[#4f594f] text-white px-10 py-5 rounded-full text-sm font-bold tracking-wider hover:bg-[#3f493f] transition-all shadow-lg shadow-[#4f594f]/20">
                  <Globe size={18} />
                  <span>LIVE PLATFORM</span>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white border border-slate-200 text-slate-800 px-10 py-5 rounded-full text-sm font-bold tracking-wider hover:bg-slate-50 transition-all">
                  <Github size={18} />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Gambar Besar Proyek */}
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                <img src={project.heroImage} alt={`${project.title} Hero`} className="w-full h-auto object-cover" />
            </div>

            {/* Bagian Detail Ganda (What/Why) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Kolom Kiri: What the system does */}
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight">What the system does</h2>
                <div className="space-y-6">
                  {project.whatDoes.map((item, index) => (
                    <div key={index} className="flex gap-5 items-start border-b border-slate-200 dark:border-slate-800 pb-6 last:border-none last:pb-0">
                      <span className="text-sm font-bold text-slate-400 pt-1">{item.number}</span>
                      <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Why it matters */}
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight">Why it matters</h2>
                <div className="space-y-8 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.whyMatters.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bagian Tech Stack */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-inner">
               <div className="space-y-10">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">STACK</span>
                    <h3 className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight border-b border-slate-200 dark:border-slate-800 pb-8">Tools used in delivery</h3>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-5 py-2.5 bg-[#f6f5f1] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
               </div>
            </div>

          </div>

          {/* Footer Panel Minimalis */}
          <div className="border-t border-slate-200 dark:border-slate-800 px-16 py-8 text-center text-xs text-slate-400 font-medium">
             © {project.year} {project.title} Case Study Detail. Built with Next.js & Framer Motion.
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}