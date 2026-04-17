'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, CloudLightning } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // Explicitly typing variants as 'Variants' fixes the 'ease' string error
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      } 
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" // Now TS knows this matches the Easing type
      } 
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-transparent">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="z-10 text-center"
      >
        <motion.div variants={itemVars} className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative p-5 bg-slate-900 rounded-2xl border border-white/10 backdrop-blur-xl">
              <CloudLightning size={40} className="text-blue-400 animate-pulse" />
            </div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVars} 
          className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          ATMO<span className="text-blue-500">SPHERE</span>
        </motion.h1>

        <motion.p 
          variants={itemVars} 
          className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Experience weather like never before. Hyper-local data meets 
          <span className="text-white font-medium"> precision engineering</span> and breathtaking design.
        </motion.p>

        <motion.div variants={itemVars}>
          <Link 
            href="/weather" 
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-slate-950 font-bold rounded-full transition-all hover:pr-14 active:scale-95"
          >
            <span>Launch Atmosphere</span>
            <ArrowRight 
              className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" 
              size={20} 
            />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Interactive Experience</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </main>
  );
}