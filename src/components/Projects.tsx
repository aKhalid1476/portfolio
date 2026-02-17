"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { SiNvidia } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: { repo?: string; demo?: string; caseStudy?: string; links?: string };
  image?: string;
  visual?: React.ReactNode;
  detailedDescription?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Hadi AI",
      description: "Revolutionalizing Islamic learning through AI (RAG, Recitation Corrector, and more).",
      tags: ["AWS", "LangChain", "OpenAI API"],
      links: { repo: "https://github.com/Shayan-CS/Hadi-AI" },
      image: "/images/projects/hadi.png",
      detailedDescription: "Hadi AI is a platform that uses AI to revolutionize Islamic learning. The first step of this project was to build a RAG system using Langchain, HuggingFace, and OpenAI API,that generated flashcards among textbooks of the major science of Islam (Fiqh, Tafsir, Hadith, Seerah, etc.). Right now a Qur'an recitation corrector is being built, by training an ML model on hours of Qur'an recitations."
    },
    {
      id: 2,
      title: "Space Telemetry Application",
      description: "End-to-end mission control center for Waterloo's Orbital design team.",
      tags: ["React.js", "FastAPI", "PostgreSQL"],
      links: { repo: "https://github.com/UWOrbital/OBC-firmware" },
      image: "/images/projects/satellite.png",
      detailedDescription: "The Orbital Design team at the University of Waterloo is working to get a satellite into orbit. My job was to develop an end-to-end application which allows users to send messages to the satellite, and record the satellite's messages back to the ground station. I developed FastAPI microservices, automated payload creation/deletion, reduced system latency, and used OAuth2 for user verification."
    },
    {
      id: 3,
      title: "Cancerous Cell Detector",
      description: "A deep learning model that detects cancerous cells in medical images.",
      tags: ["Python", "PyTorch", "Pandas"],
      links: { links: "https://docs.zenith.com" }, 
      image: "/images/projects/cancer-cells.png",
      detailedDescription: "The Cancerous Cell Detector is a deep learning model that detects cancerous cells in medical images. It uses a convolutional neural network to identify cancerous cells in medical images. This model was used to postively identify over 50 patients with early stage cancerous cells. This was work done for Inspirit AI, and there codebase is not public."
    },
    {
      id: 4,
      title: "Exoplanet Detector",
      description: "A CNN model that detects exoplanets based on time-series data.",
      tags: ["Python", "TensorFlow", "Numpy"],
      links: { repo: "https://github.com/aKhalid1476/cnn_exoplanet_detector" },
      image: "/images/projects/exoplanet.png",
      detailedDescription: "The Exoplanet Detector is a deep learning model that detects exoplanets based on time-series data. Since the dataset did not have that many exoplanet, artificial exoplanet data was generated using SMOTE and other data augmentation models."
    },
    {
      id: 5,
      title: "ShadowSync",
      description: "A sports form improver using Gemini API.",
      tags: ["Gemini API", "FastAPI", "React.js"],
      links: { repo: "https://github.com/Zarar3/ShadowSync" },
      image: "/images/projects/jumpshot.png",
      detailedDescription: "ShadowSync uses Gemini's API to analyze a video submission of a user's jumpshot or uppercut, and returns a form improvement description based on how the user's form compares to the form of professional players."
    },
    {
      id: 6,
      title: "TensorRT BenchLab",
      description: "Distributed benchmarking platform for comparing CPU, CUDA, and TensorRT inference.",
      tags: ["TensorRT", "CUDA", "CPU"],
      links: { repo: "https://github.com/aKhalid1476/tensorrt-benchlab" },
      visual: <SiNvidia className="text-[#76B900] w-32 h-32" />,
      detailedDescription: "Distributed benchmarking platform for comparing CPU, CUDA, and TensorRT inference performance across NVIDIA GPU runners, providing reproducible latency, throughput, and GPU telemetry analysis through a full-stack dashboard."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Selected Works
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            My personal favourite projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
             <ProjectCard 
               key={project.id} 
               {...project} 
               onReadMore={() => setSelectedProject(project)}
             />
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}
