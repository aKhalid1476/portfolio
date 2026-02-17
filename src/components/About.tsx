"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src="/images/image.JPG"
                alt="Abdullah Khalid"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl z-20" />
            </div>
            
            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-700" />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider border border-blue-500/20">
                PERSONAL STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                intro to me<span className="text-blue-500">.</span>
              </h2>
            </div>

            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                I am a first year software engineering student at uWaterloo. I basically just like to build
                apps and more importantly solve pain-points for people through code. 
              </p>
              <p>
                Right now I am building the next big Muslim startup, Hadi AI. Also doing a few side projects 
                for uWaterloo students.
              </p>
              <p>
                I am looking for a 2026 summer internship, so if you are looking for a quick learner who adapts
                easily to new codebases and technologies, I am your go-to candidate.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-xs text-secondary uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-xs text-secondary uppercase tracking-wider">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">UW</div>
                <div className="text-xs text-secondary uppercase tracking-wider">Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
