"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/data/projectsData";

const PROJECTS: Project[] = [ // Pastikan tipe data Project di-import
  {
    id: 1,
    title: "Indonesian Cuisiene Assistant",
    category: "AI Personal Assistant",
    year: "2026", // Properti baru
    description: "This project is a Retrieval-Augmented Generation (RAG) system designed to provide an intelligent Q&A assistant for Indonesian food recipes. By combining the power of LangChain, FAISS, and Google Gemini API, this assistant delivers accurate answers including ingredients, cooking steps, and direct source references from the dataset.",
    image: "/project1.jpg",
    heroImage: "/project1-hero.jpg", // Properti baru
    tags: ["PYTHON", "LangChain", "FAISS", "Google Gemini API","Kaggle", "RAG"],
    liveUrl: "#",
    githubUrl: "https://github.com/rexibernardino/RAG-Indonesia-Recipe",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Provides accurate information about Indonesian food recipes." },
      { number: "02", text: "Offers detailed cooking instructions and ingredient lists." },
      { number: "03", text: "Cites sources directly from the dataset for transparency." },
      { number: "04", text: "Utilizes RAG architecture for enhanced response quality." },
      { number: "05", text: "Integrates with Google Gemini API for advanced language understanding." },
      { number: "06", text: "Employs FAISS for efficient vector search and retrieval." },
      { number: "07", text: "Built with Python and LangChain for robust backend processing." },
      { number: "08", text: "Trained on a comprehensive dataset of Indonesian recipes for cultural relevance." },
    ],
    whyMatters: [
      "Addresses the need for a culturally specific culinary assistant in Indonesia.",
      "Enhances accessibility to traditional recipes for a wider audience.",
      "Demonstrates the practical application of RAG architecture in a real-world context.",
      "Contributes to the preservation and promotion of Indonesian culinary heritage through technology.",
      "Showcases the potential of AI in enhancing everyday tasks and knowledge sharing.",
      "Provides a valuable resource for both novice and experienced cooks interested in Indonesian cuisine.",
      "Highlights the importance of integrating advanced AI models with domain-specific datasets for optimal performance.",
      "Encourages further innovation in the field of AI personal assistants with a focus on cultural and contextual relevance."
    ]
  },

    {
    id: 2,
    title: "Smart Trash Recognition System",
    category: "AI Computer Vision",
    year: "2026", // Properti baru
    description: "This project aims to assist in sorting waste by classifying images into 6 categories: cardboard, glass, metal, paper, plastic, and trash. The system utilizes a Convolutional Neural Network (CNN) architecture, trained on a dataset of 25,000 images, to achieve high accuracy in waste classification. This project contributes to environmental sustainability by promoting proper waste management and recycling practices.",
    image: "/project2.jpg",
    heroImage: "/project2-hero.jpg", // Properti baru
    tags: ["PYTHON", "Computer Vision", "CNN", "Deep Learning","Kaggle", "Waste Classification"],
    liveUrl: "https://trash-detection-pmrypudmpldg5qnpbrl5s5.streamlit.app/",
    githubUrl: "https://github.com/rexibernardino/Trash-Detection",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Provides accurate information about waste sorting and classification." },
      { number: "02", text: "Offers detailed instructions for proper waste disposal." },
      { number: "03", text: "Utilizes computer vision techniques for image analysis." },
      { number: "04", text: "Trained on a large dataset of waste images for accurate classification." },
      { number: "05", text: "Utilizes a Convolutional Neural Network (CNN) architecture." },
      { number: "06", text: "Leverages deep learning techniques for improved performance." },
      { number: "07", text: "Supports real-time waste classification for practical applications." },
      { number: "08", text: "Promotes environmental sustainability through improved waste management." },
    ],
    whyMatters: [
      "Addresses the global issue of waste management and promotes recycling practices.",
      "Enhances public awareness about proper waste sorting and its environmental impact.",
      "Demonstrates the practical application of computer vision in solving real-world problems.",
      "Contributes to the development of smart city initiatives by improving waste management systems.",
      "Showcases the potential of AI in promoting sustainability and environmental responsibility.",
      "Provides a valuable tool for individuals and organizations to manage waste more effectively.",
      "Highlights the importance of integrating AI technologies with environmental initiatives for a greener future.",
      "Encourages further innovation in the field of AI for environmental sustainability and waste management solutions."
    ]
  },
  
    {
    id: 3,
    title: "Animal Image Classifier",
    category: "AI Computer Vision",
    year: "2023", // Properti baru
    description: "This project aims to classify images of various animal species using a Convolutional Neural Network (CNN) architecture. The system is trained on a dataset of 10,000 images across 10 different animal categories, achieving high accuracy in identifying and categorizing animals in real-world scenarios.",
    image: "/project3.jpg",
    heroImage: "/project3-hero.jpg", // Properti baru
    tags: ["PYTHON", "Computer Vision", "CNN", "Deep Learning","Kaggle", "Animal Classification"],
    liveUrl: "#",
    githubUrl: "hhttps://github.com/rexibernardino/Animal-Image-Classification-Using-Resnet",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Performs accurate classification of animal images across multiple species." },
      { number: "02", text: "Offers detailed information about each identified animal species." },
      { number: "03", text: "Supports real-time animal image analysis for practical applications." },
      { number: "04", text: "Utilizes a Convolutional Neural Network (CNN) architecture." },
      { number: "05", text: "Trained on a diverse dataset of animal images for robust performance." },
      { number: "06", text: "Achieves high accuracy in identifying and categorizing animals in real-world scenarios." },
      { number: "07", text: "Supports multi-class animal classification with detailed species information." },
      { number: "08", text: "Provides a user-friendly interface for easy animal image classification." },
    ],
    whyMatters: [
      "Addresses the need for accurate animal classification in various fields such as wildlife conservation, education, and research.",
      "Enhances public awareness about biodiversity and the importance of different animal species.",
      "Demonstrates the practical application of CNN architecture in a real-world context.",
      "Contributes to the development of AI tools for wildlife monitoring and conservation efforts.",
      "Showcases the potential of AI in promoting environmental awareness and biodiversity conservation.",
      "Provides a valuable resource for researchers, educators, and wildlife enthusiasts to identify and learn about different animal species.",
      "Highlights the importance of integrating AI technologies with environmental and educational initiatives for a better understanding of biodiversity.",
      "Encourages further innovation in the field of AI for wildlife conservation and biodiversity monitoring solutions."
    ]
  },
    {
    id: 4,
    title: "Information extraction of product advertisement post in social media using BiLSTM-CRF",
    category: "AI Natural Language Processing",
    year: "2025", // Properti baru
    description: "This project focuses on extracting relevant information from product advertisement posts on social media using a BiLSTM-CRF model.",
    image: "/project4.jpg",
    heroImage: "/project4-hero.jpg", // Properti baru
    tags: ["PYTHON", "NLP", "BiLSTM-CRF", "Deep Learning","Data Scraping", "Information Extraction"],
    liveUrl: "#",
    githubUrl: "https://github.com/rexibernardino/FinalProject",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Extracts key information from product advertisement posts on social media." },
      { number: "02", text: "Offers detailed product information and pricing details." },
      { number: "03", text: "Cites sources directly from the dataset for transparency." },
      { number: "04", text: "Utilizes BiLSTM-CRF architecture for accurate information extraction." },
      { number: "05", text: "Integrates with social media APIs for real-time data collection." },
      { number: "06", text: "Employs efficient data processing techniques for scalable analysis." },
      { number: "07", text: "Built with Python and NLP libraries for robust backend processing." },
      { number: "08", text: "Trained on a comprehensive dataset of product advertisement posts for cultural relevance." },
    ],
    whyMatters: [
      "Addresses the need for aculturally specific information extraction system in the social media domain.",
      "Enhances the ability to quickly gather and analyze product information from various social media platforms.",
      "Demonstrates the practical application of BiLSTM-CRF architecture in a real-world context.",
      "Contributes to the development of more effective tools for market research and consumer behavior analysis.",
      "Showcases the potential of AI in automating and improving the efficiency of information processing tasks.",
      "Provides a valuable resource for businesses and researchers to understand and track product advertising trends.",
      "Highlights the importance of integrating advanced AI models with domain-specific datasets for optimal performance.",
      "Encourages further innovation in the field of AI personal assistants with a focus on cultural and contextual relevance."
    ]
  },
    {
    id: 5,
    title: "My Dompet App - Personal Finance Management System",
    category: "AI Personal Assistant",
    year: "2024", // Properti baru
    description: "My Dompet App is a personal finance management system designed to help users track and manage their finances effectively. The app provides features such as expense tracking, budget planning, and financial goal setting. Built with Flutter and Dart, My Dompet App offers a user-friendly interface and seamless performance across multiple platforms.",
    image: "/project1.jpg",
    heroImage: "/project1-hero.jpg", // Properti baru
    tags: ["Flutter", "Dart", "Personal Finance", "Mobile App"],
    liveUrl: "#",
    githubUrl: "https://github.com/rexibernardino/my-dompet-app-flutter",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Provides accurate information about personal finance management." },
      { number: "02", text: "Offers detailed expense tracking and budget planning tools." },
      { number: "03", text: "Enables users to set and monitor financial goals." },
      { number: "04", text: "Provides insights and analytics for better financial decision-making." },
      { number: "05", text: "Offers a user-friendly interface for easy navigation and use." },
      { number: "06", text: "Supports cross-platform compatibility for seamless use on different devices." },
      { number: "07", text: "Built with Flutter and Dart for robust backend processing." },
      { number: "08", text: "Trained on a comprehensive dataset of personal finance data for cultural relevance." },
    ],
    whyMatters: [
      "Addresses the need for a culturally specific personal finance assistant.",
      "Enhances accessibility to financial management tools for a wider audience.",
      "Demonstrates the practical application of mobile app development in a real-world context.",
      "Contributes to the development of more effective tools for personal finance management.",
      "Showcases the potential of AI in enhancing everyday tasks and knowledge sharing.",
      "Provides a valuable resource for both novice and experienced users interested in personal finance.",
    ]
  },
      {
    id: 6,
    title: "Sundanese Tweet Emotion Analysis",
    category: "AI Natural Language Processing",
    year: "2023", // Properti baru
    description: "Sundanese Tweet Emotion Analysis is a project that focuses on analyzing the emotional content of tweets written in the Sundanese language. The project aims to develop a robust sentiment analysis model that can accurately identify and categorize emotions expressed in Sundanese social media posts.",
    image: "/project6.jpg",
    heroImage: "/project6-hero.jpg", // Properti baru
    tags: ["PYTHON", "NLP", "Sentiment Analysis", "Deep Learning","Kaggle", "Emotion Analysis"],
    liveUrl: "#",
    githubUrl: "https://github.com/rexibernardino/Sundanese-Tweet-Emotion-Classification",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Analyzes the emotional content of tweets written in the Sundanese language." },
      { number: "02", text: "Develops a robust sentiment analysis model for the Sundanese language." },
      { number: "03", text: "Provides a comprehensive dataset of Sundanese social media posts for training and evaluation." },
      { number: "04", text: "Utilizes deep learning techniques for accurate emotion classification." },
      { number: "05", text: "Offers insights and analytics for better understanding of emotional trends in the Sundanese language." },
      { number: "06", text: "Supports the development of culturally relevant natural language processing applications." },
      { number: "07", text: "Built with Python and TensorFlow for robust backend processing." },
      { number: "08", text: "Trained on a comprehensive dataset of Sundanese social media posts for cultural relevance." },
    ],
    whyMatters: [
      "Addresses the need for emotion analysis tools specific to the Sundanese language.",
      "Enhances the ability to understand and analyze emotional trends in Sundanese social media posts.",
      "Demonstrates the practical application of sentiment analysis in a real-world context.",
      "Contributes to the development of more effective tools for natural language processing in underrepresented languages.",
      "Showcases the potential of AI in promoting cultural understanding and linguistic diversity.",
      "Provides a valuable resource for researchers and developers interested in natural language processing for the Sundanese language.",
    ]
  },
  {
    id: 7,
    title: "PvZ SLL",
    category: "Game Development",
    year: "2023", // Properti baru
    description: "Simple Plant versus Zombie game using Single Linked List with CPP languages.",
    image: "/project7.jpg",
    heroImage: "/project7-hero.jpg", // Properti baru
    tags: ["C++", "Data Structures", "Game Development"],
    liveUrl: "#",
    githubUrl: "https://github.com/rexibernardino/PvZ-SLL",
    // Tambahkan properti detail ini:
    whatDoes: [
      { number: "01", text: "Develops a simple Plant versus Zombie game using Single Linked List data structure in C++." },
      { number: "02", text: "Implement efficient memory management using linked list operations." },
      { number: "03", text: "Provides a fun and interactive gaming experience for players." },
      { number: "04", text: "Demonstrates the application of data structures in game development." },
      { number: "05", text: "Offers a hands-on learning experience for students interested in C++ programming." },
      { number: "06", text: "Supports the development of more complex game logic using linked list implementations." },
      { number: "07", text: "Utilizes efficient data structures for optimal game performance." },
      { number: "08", text: "Teaches fundamental concepts of data structures and algorithms through practical implementation." },
    ],
    whyMatters: [
      "Addresses the need for educational game development projects that teach data structures and algorithms.",
      "Enhances the learning experience for students interested in C++ programming and game development.",
      "Demonstrates the practical application of linked list data structures in a real-world context.",
      "Contributes to the development of more effective educational tools for programming and game development.",
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
