'use client';

import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  CloudLightning, 
  ShieldCheck, 
  Zap, 
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Real-time Sync",
      desc: "Instant updates from global weather stations with zero latency."
    },
    {
      icon: <ShieldCheck className="text-green-400" size={24} />,
      title: "Hyper-Accurate",
      desc: "Proprietary algorithms ensuring 99.9% data precision for every city."
    },
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: "Global Coverage",
      desc: "Access atmospheric insights for over 200,000 cities worldwide."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="relative h-screen flex flex-col items-center justify-center p-6 bg-transparent">
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

          <motion.h1 variants={itemVars} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            ATMO<span className="text-blue-500">SPHERE</span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Experience weather like never before. Hyper-local data meets 
            <span className="text-white font-medium"> precision engineering</span> and breathtaking design.
          </motion.p>

          <motion.div variants={itemVars}>
            <Link href="/weather" className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-slate-950 font-bold rounded-full transition-all hover:pr-14 active:scale-95">
              <span>Launch Atmosphere</span>
              <ArrowRight className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Added exactly where you requested */}
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

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-md pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter mb-2">ATMOSPHERE</h2>
            <p className="text-slate-500 text-sm">Elevating weather intelligence since 2026.</p>
          </div>
          
          <div className="flex gap-6">
            <FooterLink href="http://saileshsingh.com.np/" icon={<Globe size={20} />} />
            <FooterLink href="https://github.com/sailesh-singh" icon={<Globe size={20} />} />
            <FooterLink href="https://linkedin.com/in/saileshsingh36" icon={<Globe size={20} />} />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            &copy; 2026 Atmosphere Lab. Sailesh Singh.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
      {icon}
    </a>
  );
}