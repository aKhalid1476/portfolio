"use client";

import { useEffect, useRef } from "react";
import { FaXmark, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectLink {
  repo?: string;
  demo?: string;
  caseStudy?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink;
    detailedDescription?: string; // Optional detailed description
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close on click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#1e293b] rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f172a]/50">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <FaXmark size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed text-lg mb-6">
            {project.description}
          </p>

          <div className="space-y-4 text-slate-400">
             <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">About the Project</h4>
             <p className="leading-relaxed">
               {project.detailedDescription || "This project is a testament to modern web engineering practices, focusing on performance, accessibility, and user experience. It leverages cutting-edge technologies to solve complex problems efficiently."}
             </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/5 bg-[#0f172a]/50 flex justify-end gap-4">
           {project.links.repo && (
             <a 
               href={project.links.repo}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors text-sm"
             >
               <FaGithub className="mr-2" />
               View Code
             </a>
           )}
           {(project.links.demo || project.links.caseStudy) && (
              <a 
                href={project.links.demo || project.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm"
              >
                <FaArrowUpRightFromSquare className="mr-2" />
                Live Demo
              </a>
           )}
        </div>
      </div>
    </div>
  );
}
