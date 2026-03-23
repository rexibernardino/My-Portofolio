// src/data/projectsData.ts

export interface ProjectDetailItem {
  number: string;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string; // Path ke gambar preview kartu
  heroImage: string; // Path ke gambar hero di panel detail (bisa sama atau beda)
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  // Data Detail untuk Panel
  whatDoes: ProjectDetailItem[];
  whyMatters: string[]; // Paragraf teks
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Financial Assistant Bot",
    category: "AI / FINTECH",
    year: "2026",
    description: "A personal AI-powered financial assistant on Telegram that automatically tracks expenses & income using RAG technology and OCR.",
    image: "/images/projects/fin-bot-card.jpg", // Ganti dengan path gambar Anda
    heroImage: "/images/projects/fin-bot-hero.jpg", // Gambar besar di detail panel
    tags: ["PYTHON (AIOGRAM)", "SUPABASE", "RAG", "SUPABASE (POSTGRESQL + PGVECTOR)", "+4 MORE"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/yourusername/fin-bot",
    whatDoes: [
      { number: "01", text: "Natural language input (text/voice) for instant transaction logging without complicated manual forms." },
      { number: "02", text: "Advanced RAG Engine that learns user spending patterns for automatic category classification." },
      { number: "03", text: "Double-entry Ledger system (Bank Core) to ensure balance accuracy and real-time budget tracking." },
      { number: "04", text: "OCR integration to scan shopping receipts and automatically convert them into transaction data." },
      { number: "05", text: "Smart clarification mechanism using interactive buttons when input is ambiguous or incomplete." },
      { number: "06", text: "Periodic financial reports (daily/weekly/monthly) plus AI-based insights for savings recommendations." },
    ],
    whyMatters: [
      "Transforms boring manual financial record-keeping into natural and efficient conversations.",
      "Provides full visibility into users' financial health through instant access in their everyday chat app.",
      "Helps users make better financial decisions through accurate spending data analysis."
    ]
  },
  // Anda bisa menambahkan proyek lain di sini dengan struktur yang sama
];