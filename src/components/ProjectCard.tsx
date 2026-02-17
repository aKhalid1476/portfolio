
"use client";

import { useRef, useState, MouseEvent } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  image?: string;
  visual?: React.ReactNode;
  onReadMore: () => void;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  links, 
  image,
  visual,
  onReadMore
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxRotation = 5; 
    
    const rotateXValue = ((centerY - y) / centerY) * maxRotation;
    const rotateYValue = -((centerX - x) / centerX) * maxRotation;

    setRotation({ x: rotateXValue, y: rotateYValue });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000 w-full h-full"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
          w-full h-full bg-[#1e293b] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ease-out 
          group flex flex-col border border-white/5 hover:border-blue-500/30
        "
        style={{
          transform: isHovering
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : "rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image / Visual Area */}
        <div 
          className="relative overflow-hidden mb-0 w-full h-56 group-hover:scale-105 transition-transform duration-500"
          style={{ transform: "translateZ(20px)" }}
        >
          {image ? (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          ) : visual ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              {visual}
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent opacity-60" />
        </div>

        {/* Content Area */}
        <div 
          className="p-8 flex flex-col flex-1 relative"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="pointer-events-none">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-blue-200 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white">
              {title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-base mb-8">
              {description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pointer-events-auto">
            <button 
              onClick={onReadMore}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/20"
              onMouseDown={(e) => e.stopPropagation()}
            >
              Read More
            </button>

            {links.repo && (
              <a 
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-white font-medium transition-colors border border-white/5 hover:border-white/20"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <FaGithub className="mr-2.5 text-lg" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
