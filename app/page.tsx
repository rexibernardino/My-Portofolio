"use client";

import { useState, useEffect } from "react";
import { 
  Cpu, 
  Moon, 
  Sun,
  User,
  GraduationCap,
  MapPin,
  BookOpen
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SkillCard } from "@/components/SkillCard";
import { motion } from "framer-motion";
import { AboutMe } from "@/components/AboutMe";
import { Experiences } from "@/components/Experiences";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

// --- DATA SKILLS ---
const SKILLS_DATA = [
  { id: 1, title: "Next.js", category: "frontend", rating: "★★★★★", label: "Framework" },
  { id: 2, title: "Python", category: "backend", rating: "★★★★★", label: "Language" },
  { id: 3, title: "PostgreSQL", category: "backend", rating: "★★★★☆", label: "Database" },
  { id: 4, title: "Docker", category: "tools", rating: "★★★☆☆", label: "DevOps" },
  { id: 5, title: "Git", category: "tools", rating: "★★★★☆", label: "Version Control" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Theme state
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const phrases = ["Data Scientist", "Web Developer", "Informatics Engineer", "Tech Enthusiast", "Data Analyst"];

  // Mencegah Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- LOGIKA TYPEWRITER ---
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  if (!mounted) return null;

  const filteredSkills = activeTab === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/90 border-b border-[var(--card-border)] px-[8%] py-6 flex justify-between items-center backdrop-blur-md shadow-sm transition-colors">
          
          <a 
            href="#hero"
            className="text-2xl font-extrabold tracking-tighter text-[var(--foreground)]"
          >
            PORTFOLIO<span className="text-[#c5a059]">.</span>
          </a>
              
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="hover:text-[#c5a059] transition-colors">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </a>

            </li>
                        <li className="hover:text-[#c5a059] transition-colors">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About Me
              </a>
            </li>

            
            <li className="hover:text-[#c5a059] transition-colors">
              <a
                href="#experiences"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("experiences")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Experiences
              </a>
            </li>

            <li className="hover:text-[#c5a059] transition-colors">
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("skills")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Skills
              </a>
            </li>
            <li className="hover:text-[#c5a059] transition-colors">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* TOGGLE THEME BUTTON */}
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:scale-110 transition-all text-[var(--foreground)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} className="text-[#c5a059]" /> : <Moon size={20} className="text-slate-600" />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-[#c5a059]">Mario Bernardino</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Creative Solutions. Elegant Code.
          </p>
          <div className="text-2xl md:text-3xl font-mono text-[#c5a059] min-h-[40px]">
            I am a <span>{text}</span>
            <span className="animate-pulse">|</span>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <button className="bg-[#c5a059] text-white dark:text-navy-950 px-8 py-3 rounded-full font-bold hover:bg-[#d4b47a] transition-all shadow-lg">
              VIEW PROJECTS
            </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-[var(--card-border)] px-8 py-3 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            CONTACT ME
          </button>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
        <section id="about">
          <AboutMe />
        </section>

      {/* ABOUT ME SECTION */}
        <section id="experiences">
          <Experiences />
        </section>

      {/* SKILLS SECTION */}
        <section id="skills">
          <ProfessionalSkills />
        </section>

      {/* SKILLS SECTION */}
        <section id="projects">
          <Projects />
        </section>

      {/* CONTACT SECTION */}
        <section id="contact">
          <Contact />
        </section>
    </div>
  );
}
