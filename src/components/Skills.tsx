"use client";

import { 
  SiPython, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiAnthropic, 
  SiOpenai, 
  SiAmazonwebservices,
  SiPostgresql,
  SiCplusplus
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc"; // Fallback for Azure
import { FaLink } from "react-icons/fa6"; // Fallback for Langchain
import { TbSql } from "react-icons/tb"; // Fallback for SQL

interface Skill {
  name: string;
  icon: React.ElementType | string;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // White on dark bg
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "SQL", icon: TbSql, color: "#003B57" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Claude Code", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg", color: "#D97757" }, // Anthropic orange
    { name: "Cursor", icon: "https://img.icons8.com/color/512/cursor-ai.png", color: "#3B82F6" }, // VS Code blueish
    { name: "Antigravity", icon: "https://static.wikia.nocookie.net/logopedia/images/4/4a/Google_Antigravity_icon.svg/revision/latest/scale-to-width-down/1200?cb=20251119202403", color: "#8B5CF6" }, // Purple rocket
    { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Azure", icon: VscAzure, color: "#0078D4" },
    { name: "Langchain", icon: FaLink, color: "#1C3C3C" }, // Dark chain
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground">Technical Arsenal</h2>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar py-12 px-8 gap-8 items-center snap-x whitespace-nowrap mask-gradient">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors animate-wave snap-center"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {typeof skill.icon === 'string' ? (
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <skill.icon 
                className="text-3xl transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color === "#000000" ? "#E6EDF3" : skill.color }} // Handle black icons on dark theme
              />
            )}
            
            {/* Tooltip */}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-secondary whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
