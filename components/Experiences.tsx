"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function Experiences() {
  const [activeTab, setActiveTab] = useState("work");

  const tabs = [
    { id: "work", label: "Work Experience", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "achievement", label: "Achievements", icon: <Trophy size={18} /> },
  ];

  return (
    <section id="experience" className="py-24 px-[8%] transition-colors overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            My <span className="text-[#c5a059]">Experiences</span>
          </h2>
        </div>

        {/* TAB NAVIGATION */}
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
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "work" && (
              <motion.div key="work" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <TimelineItem 
                  title="Data Analyst Intern"
                  company="Mesana Investama Utama"
                  date="April 2026 - Present"
                  description="Developed an interactive Streamlit application for credit scoring automation (DSCR, LTV, DER), implemented a Python model for risk simulation based on interest rate/EBITDA fluctuations, and formulated company loan ceiling recommendations based on in-depth financial statement analysis."
                />
                <TimelineItem 
                  title="Data Analyst Intern"
                  company="Badan Riset dan Inovasi Nasional Republik Indonesia (BRIN)"
                  date="April 2026 - June 2024 - August 2024 "
                  description="Engineered a Python based system to automate data recapitulation, applying Machine Learning models to analyze intellectual property, and create a high-fidelity website prototype for INTIPDAQU ."
                />
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div key="education" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <TimelineItem 
                  title="Bachelor of Informatics"
                  company="Telkom University"
                  date="September 2021 - February 2025"
                  score="3.58 / 4.00"
                  description="Graduated with a focus on Data Science and Machine Learning, completing a thesis on extracting informations on product advertisements posts on Twitter using NLP techniques."
                />
              </motion.div>
            )}

            {activeTab === "achievement" && (
              <motion.div key="achievement" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AchievementCard 
                  title="Data Science Associate Certification"
                  org="Microsoft Azure"
                  date="January 2025 - January 2026"
                  desc="Microsoft Azure Data Science Associate Certification validates expertise in data science and machine learning on the Azure platform."
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

// --- SUB-KOMPONEN DENGAN EFEK GLOWING ---

function TimelineItem({ title, company, date, description, score }: any) {
  return (
    <div className="relative pl-8 border-l-2 border-[#c5a059]/30 pb-10 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#c5a059] z-10" />
      
      <div className="relative p-1 rounded-2xl group">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        
        <div className="relative bg-[var(--card)] p-6 rounded-xl border border-[var(--card-border)] shadow-sm group-hover:shadow-md transition-all">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
            <span className="text-[#c5a059] text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
              <Calendar size={14} /> {date}
            </span>
            
            {/* TAMPILAN SCORE: Hanya muncul jika prop score ada */}
            {score && (
              <span className="bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-black px-2 py-1 rounded-md border border-[#c5a059]/20">
                GPA: 3,58 {score}
              </span>
            )}
          </div>

          <h4 className="text-xl font-bold text-[var(--foreground)]">{title}</h4>
          <p className="text-slate-500 font-medium mb-3">{company}</p>
          <p className="text-sm text-slate-400 leading-relaxed italic">"{description}"</p>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ title, org, date, desc }: any) {
  return (
    <div className="relative p-1 rounded-2xl group">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      
      <div className="relative bg-[var(--card)] border border-[var(--card-border)] p-6 rounded-xl hover:border-[#c5a059]/50 transition-all h-full">
        <div className="relative z-10">
          <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.2em]">{date}</span>
          <h4 className="text-lg font-bold text-[var(--foreground)] mt-2 mb-1">{title}</h4>
          <p className="text-xs font-medium text-slate-500 mb-4">{org}</p>
          <div className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#c5a059] mt-1 shrink-0" />
              <p className="text-sm text-slate-400">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}