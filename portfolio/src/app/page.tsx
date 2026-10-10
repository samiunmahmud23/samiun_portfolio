"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt, FaCameraRetro, FaEnvelope } from "react-icons/fa";
import { ExternalLink, PlayCircle, Code2, BrainCircuit, Terminal, Briefcase, ChevronRight, X, Database, BookOpen, Wrench, Laptop, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [currentTravelImage, setCurrentTravelImage] = useState(0);
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTravelImage(prev => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Cursor tracker for subtle interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#050505] text-zinc-200 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Custom Cursor Glow (Folio/Unfold mix vibe) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300 mix-blend-screen opacity-40"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">
          <div className="text-2xl font-black tracking-tighter">SAMIUN.</div>
          <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-zinc-400">
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#creative" className="hover:text-cyan-400 transition-colors">Creative</a>
            <a href="/Samiun_Mahmud_Resume.pdf" download="Samiun_Mahmud_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">Resume <ExternalLink size={14}/></a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
          {/* Giant background text inspired by Unfold */}
          <h1 className="text-[15vw] font-black leading-none whitespace-nowrap text-zinc-800 select-none">
            AI ENGINEER
          </h1>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={fadeInUp} className="flex gap-4 items-center">
                <span className="h-[2px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Portfolio 2026</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white">
                Building <br/>
                <span className="text-zinc-500">Intelligent</span> <br/>
                Systems.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-400 font-light max-w-xl">
                I am an AI/ML Researcher, Full-Stack Developer, Cinematographer, and World Traveler. Bridging the gap between data logic and visual storytelling.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <a href="#work" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors">
                  Explore Work
                </a>
                <a href="/Samiun_Mahmud_Resume.pdf" download="Samiun_Mahmud_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2">
                  <Briefcase size={18} /> View Resume
                </a>
                <div className="flex gap-4 items-center">
                  <a href="mailto:samiunmahmud23@gmail.com" className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"><FaEnvelope size={24}/></a>
                  <a href="https://github.com/samiunmahmud23" className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"><FaGithub size={24}/></a>
                  <a href="https://www.linkedin.com/in/samiun-mahmud-267388261/" className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"><FaLinkedin size={24}/></a>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/profile.jpg" 
                  alt="Samiun Mahmud" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 bg-zinc-900 border-l-4 border-cyan-500 hidden md:block">
                <p className="text-sm font-mono text-zinc-400">Currently studying at</p>
                <p className="text-lg font-bold text-white">North South University</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10 bg-[#050505] border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              About <span className="text-zinc-600">Me.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-12 h-1 bg-cyan-500 mx-auto"></motion.div>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              Computer Science and Engineering undergraduate and Research Assistant with an IEEE-accepted conference publication in air-quality forecasting. Experienced in applied ML project design, real-world data collection, and CFD-driven applications across healthcare imaging and socio-economic domains. Led the development of an AI-powered autonomous marketing platform, demonstrating a focus on model generalization, data integrity, ethical AI deployment, and measurable real-world impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section (Folio style split layout) */}
      <section id="work" className="py-32 relative z-10 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Selected <span className="text-zinc-600">Work.</span></h2>
          </motion.div>

          {/* MarketMind AI Hero Project */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="group relative grid lg:grid-cols-2 gap-0 border border-zinc-800 overflow-hidden hover:border-cyan-500/50 transition-colors"
          >
            <div className="p-10 md:p-16 flex flex-col justify-center bg-zinc-900/50">
              <div className="text-cyan-400 font-mono text-sm mb-4">Featured SaaS</div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">MarketMind AI</h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Full-stack AI marketing platform combining audit, SEO, copywriting, and analytics into one dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-12">
                {["Next.js", "Gen AI", "Supabase", "Prisma"].map(t => (
                  <span key={t} className="px-3 py-1 bg-zinc-800 text-xs text-zinc-300 uppercase tracking-widest">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors"
                >
                  <PlayCircle size={18} /> Live Demo
                </button>
                <a href="https://github.com/samiunmahmud23/MarketMind_AI" className="flex items-center gap-3 px-6 py-3 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors">
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-full bg-zinc-800/20 overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-zinc-800">
                {/* Abstract visualization of MarketMind AI */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative w-3/4 h-3/4 border border-zinc-700/50 bg-zinc-900/80 backdrop-blur-sm p-6 shadow-2xl rounded-sm transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="h-4 w-1/3 bg-zinc-800 mb-4 rounded-sm"></div>
                  <div className="h-24 w-full bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-zinc-800 mb-4 rounded-sm flex items-end p-2 gap-2">
                    <div className="w-full h-[30%] bg-cyan-500/50"></div>
                    <div className="w-full h-[60%] bg-cyan-500/70"></div>
                    <div className="w-full h-[40%] bg-cyan-500/40"></div>
                    <div className="w-full h-[90%] bg-cyan-400"></div>
                  </div>
                  <div className="h-4 w-2/3 bg-zinc-800 rounded-sm"></div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Projects (Unfold style masonry/grid) */}
      <section className="py-20 relative z-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vision–Language Model for Chest X-Ray",
                desc: "Multimodal medical imaging model with cross-institution generalization.",
                tech: ["PyTorch", "Transformers", "CV"],
                icon: <BrainCircuit size={32} className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              },
              {
                title: "ML-Based Cow Price Prediction",
                desc: "Regression models and ensemble learning for Eid-ul-Adha livestock price forecasting.",
                tech: ["Scikit-Learn", "Regression", "Ensemble"],
                icon: <Database size={32} className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              },
              {
                title: "Automated Plant Watering System",
                desc: "STM32-based embedded system with soil monitoring for autonomous irrigation.",
                tech: ["C++", "STM32", "Hardware"],
                icon: <Code2 size={32} className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              },
              {
                title: "Advanced Expense Tracker",
                desc: "Financial analytics, stock tracking, and inventory handling systems.",
                tech: ["Python", "Analytics", "Inventory"],
                icon: <Terminal size={32} className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="group p-10 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all cursor-crosshair"
              >
                {p.icon}
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-zinc-400 mb-8">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2 py-1">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 relative z-10 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid lg:grid-cols-12 gap-12"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Research & <br/><span className="text-zinc-600">Publications.</span></h2>
              <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
              <p className="text-zinc-400">Pushing the boundaries of data integrity and applied machine learning in real-world scenarios.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="lg:col-span-8 space-y-6">
              <div className="group p-8 md:p-10 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase border border-cyan-500/20">IEEE CSDE 2026</span>
                    <span className="text-zinc-500 text-sm font-mono">Conference Paper</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-400 transition-colors">Air Quality Forecasting for Dhaka: Data Integrity over Model Complexity</h3>
                  
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    Developed a multimodal AQI forecasting system for Dhaka fusing four free data modalities. Conducted a two-check data provenance audit revealing a widely-circulated 26-year dataset was unverifiable before 2022, causing −1.70 skill degradation. LightGBM (RMSE 13.92) significantly outperformed deep fusion.
                  </p>
                  
                  <motion.div 
                    initial={false} 
                    animate={{ height: isAbstractExpanded ? 'auto' : 0, opacity: isAbstractExpanded ? 1 : 0, marginTop: isAbstractExpanded ? 16 : 0 }} 
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500 text-sm text-justify leading-relaxed border-l-2 border-zinc-800 pl-4">
                      <strong>Full Abstract:</strong> Hourly air-quality forecasts for Dhaka, among the world’s most polluted megacities, remain dominated by single modality baselines, while multimodal architectures are rarely evaluated against strong baselines, significance tests, or integrity audits. We develop, audit, and deploy a multimodal system fusing four free modalities: CAMS-derived ground pollutants, ERA5 meteorology with an NWP forecast leg, CAMS assimilated aerosol optical depth, and a documented human-activity record. Four findings emerge. First, a two-check provenance audit shows that a widely circulated 26-year hourly Dhaka AQI dataset is unsupported by its identified source archive before August 2022, and training on that portion causes severe degradation in forecast skill: with features and model held fixed, skill relative to persistence degrades from positive 0.46 to negative 1.70 (RMSE 13.92 versus 32.77). Second, perfect-prognosis forecast-weather features valid at the target time are the largest single source of skill at the 24-hour horizon, raising skill from positive 0.31 to positive 0.46. Third, on roughly 21,600 real training hours, LightGBM (RMSE 13.92) significantly outperforms a cross-attention Transformer fusion network (RMSE 18.27; Diebold–Mariano p &lt; 0.001) in this single-seed experiment. Fourth, an operational forecaster with dedicated per-horizon models retains positive skill through the 72-hour horizon on the present test window. All data sources are freely accessible and require no authentication.
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-zinc-800/50">
                    <button 
                      onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {isAbstractExpanded ? "Hide Abstract" : "Read Full Abstract"} <ChevronRight size={16} className={`transform transition-transform ${isAbstractExpanded ? "rotate-90" : ""}`} />
                    </button>
                    <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
                      View Publication <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10 bg-[#050505] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">Core <br/><span className="text-zinc-600">Competencies.</span></h2>
            <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Programming",
                icon: <Code2 size={24} className="text-cyan-400 mb-4" />,
                skills: ["Python", "C", "C++", "Java"]
              },
              {
                title: "AI & Machine Learning",
                icon: <BrainCircuit size={24} className="text-cyan-400 mb-4" />,
                skills: ["Machine Learning", "Deep Learning", "Multimodal Modeling", "LightGBM", "XGBoost", "LSTM", "Transformers", "SHAP", "Diebold–Mariano Testing"]
              },
              {
                title: "Research Methods",
                icon: <Search size={24} className="text-cyan-400 mb-4" />,
                skills: ["Data Provenance Auditing", "Perfect-Prognosis Feature Engineering", "Chronological Evaluation", "Statistical Significance Testing"]
              },
              {
                title: "Engineering Tools",
                icon: <Wrench size={24} className="text-cyan-400 mb-4" />,
                skills: ["COMSOL", "Power BI", "AutoCAD", "NI Multisim", "Logisim"]
              },
              {
                title: "Productivity & Creative",
                icon: <Laptop size={24} className="text-cyan-400 mb-4" />,
                skills: ["MS Office", "Google Workspace", "Adobe Photoshop", "DaVinci Resolve", "CapCut"]
              }
            ].map((category, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`p-8 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-colors ${
                  idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                {category.icon}
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Creative Section */}
      <section id="creative" className="py-32 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-8">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                Beyond <br/><span className="text-zinc-600">The Code.</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
                <p>
                  I believe the best AI systems are built by those who understand the physical world. That's why I am a passionate <strong className="text-white">World Traveler</strong>.
                </p>
                <p>
                  Traveling exposes me to new cultures, diverse environments, and complex real-world problems. It shifts my perspective from purely academic algorithms to solutions that actually impact human lives.
                </p>
                <p>
                  I document these journeys through <strong className="text-white">Cinematography</strong>. Using tools like DaVinci Resolve and CapCut, I blend visual storytelling with technical precision—much like how I architect machine learning models.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-6 text-zinc-400">
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-cyan-500"/> Avid Traveler</div>
                <div className="flex items-center gap-2"><FaCameraRetro className="text-cyan-500"/> Cinematographer</div>
              </motion.div>
            </div>

            {/* Creative Slideshow */}
            <motion.div variants={fadeInUp} className="relative h-[600px] w-full overflow-hidden border border-zinc-800 group">
              {['/travel5.jpg', '/travel3.jpg', '/travel2.jpg', '/travel1.jpg', '/travel4.jpg'].map((img, index) => (
                <div 
                  key={img}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                    currentTravelImage === index ? "opacity-60 scale-105" : "opacity-0 scale-100"
                  }`}
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4 text-white">
                    <PlayCircle size={40} className="text-cyan-400 hover:scale-110 transition-transform cursor-pointer" />
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-widest">Wanderlust</h4>
                      <p className="text-sm text-zinc-400">Cinematography & Travel</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[0,1,2,3,4].map((i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-colors ${currentTravelImage === i ? 'bg-cyan-400' : 'bg-zinc-700'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 mb-8 tracking-tighter">SAMIUN MAHMUD</h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:samiunmahmud23@gmail.com" className="text-zinc-600 hover:text-cyan-400 transition-colors"><FaEnvelope size={24}/></a>
          <a href="https://github.com/samiunmahmud23" className="text-zinc-600 hover:text-cyan-400 transition-colors"><FaGithub size={24}/></a>
          <a href="https://www.linkedin.com/in/samiun-mahmud-267388261/" className="text-zinc-600 hover:text-cyan-400 transition-colors"><FaLinkedin size={24}/></a>
          <a href="https://www.instagram.com/samiun.mahmud/" className="text-zinc-600 hover:text-cyan-400 transition-colors"><FaInstagram size={24}/></a>
        </div>
        <p className="text-zinc-600 text-sm font-mono">&copy; {new Date().getFullYear()} Md Samiun Mahmud. All rights reserved.</p>
      </footer>

      {/* Interactive Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-6xl h-full max-h-[85vh] bg-zinc-950 border border-zinc-800 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-black">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Live Demo</span>
                <span className="text-sm font-bold text-white">MarketMind AI</span>
              </div>
              <button 
                onClick={() => setIsDemoOpen(false)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 w-full bg-white relative">
              <iframe 
                src="https://market-mind-ai-sigma.vercel.app/" 
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
