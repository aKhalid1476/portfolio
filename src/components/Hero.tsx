"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import DotFieldCanvas from "@/components/DotFieldCanvas";
import { SiX, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Hero() {
  const { displayedText: name, isFinished: nameFinished } = useTypewriter(
    "Abdullah Khalid.",
    { speed: 100 }
  );
  
  const { displayedText: subtitle } = useTypewriter(
    "Software Eng ’30 — University of Waterloo",
    {
      speed: 40,
      start: nameFinished,
      startDelay: 400,
    }
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground">
      {/* Background Animation */}
      <DotFieldCanvas />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 pointer-events-none">
        {/* Left Column: Text content */}
        <div className="flex flex-col justify-center pointer-events-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 min-h-[1.2em]">
            {name}
            <span className="animate-pulse text-secondary opacity-70">|</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-secondary mb-10 h-8 font-mono">
            {subtitle}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-[#1A2330] border border-blue-500/30 text-white font-medium hover:bg-blue-900/20 hover:border-blue-400 transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg shadow-blue-900/10"
            >
              View Projects
            </button>
            <a 
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5cb46c7b-0fb4-43da-a52d-fe3b34984f35"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-transparent border border-secondary/30 text-secondary hover:text-white hover:border-white/50 transition-all focus:ring-2 focus:ring-secondary focus:outline-none flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a href="https://x.com/akDev88" target="_blank" className="w-10 h-10 rounded-full bg-[#1A2330] border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white/30 transition-all hover:scale-110">
               <SiX size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-khalid-uw/" target="_blank" className="w-10 h-10 rounded-full bg-[#1A2330] border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white/30 transition-all hover:scale-110">
               <SiLinkedin size={18} />
            </a>
            <a href="https://github.com/aKhalid1476" target="_blank" className="w-10 h-10 rounded-full bg-[#1A2330] border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white/30 transition-all hover:scale-110">
               <FaGithub size={18} />
            </a>
             <a href="mailto:a36khali@uwaterloo.ca" className="w-10 h-10 rounded-full bg-[#1A2330] border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white/30 transition-all hover:scale-110">
               <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Empty space for dot field density */}
        <div className="hidden lg:block">
          {/* The visual weight is carried by the dot field here */}
        </div>
      </div>
    </section>
  );
}
