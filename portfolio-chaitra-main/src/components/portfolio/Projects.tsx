import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Vote, Cpu, BrainCircuit, TrendingUp, Satellite, Wheat, PenTool, Wallet, CandlestickChart } from "lucide-react";
import TiltCard from "./TiltCard";

const PROFILE_REPOS = "https://github.com/kchaitralatha-bit?tab=repositories";

import projEvote from "@/assets/proj-evote.jpg";
import projIde from "@/assets/proj-ide.jpg";
import projBrain from "@/assets/proj-brain.jpg";
import projStockWeather from "@/assets/proj-stock-weather.jpg";
import projGeospatial from "@/assets/proj-geospatial.jpg";
import projAgriculture from "@/assets/proj-agriculture.jpg";
import projDigits from "@/assets/proj-digits.jpg";
import projFinance from "@/assets/proj-finance.jpg";
import projStockpred from "@/assets/proj-stockpred.jpg";

const projects = [
  {
    title: "E-Vote Cast",
    icon: Vote,
    image: projEvote,
    category: "Security System",
    neonVar: "--neon-cyan",
    glowHsl: "185 100% 50%",
    problem: "Traditional voting systems lack transparency, security, and real-time result visibility.",
    tech: ["Java", "JDBC", "MySQL", "Swing UI"],
    contribution: "Built secure admin-controlled election management with encrypted voter authentication and real-time result computation.",
    outcome: "100% tamper-proof voting with instant result visibility and full audit trail.",
    github: "https://github.com/kchaitralatha-bit/E-VOTE-CASTE",
  },
  {
    title: "Silver-J IDE",
    icon: Cpu,
    image: projIde,
    category: "Developer Tool",
    neonVar: "--neon-purple",
    glowHsl: "270 100% 65%",
    problem: "Existing Java IDEs are resource-heavy and slow on low-spec machines.",
    tech: ["C#", ".NET", "WinForms", "Java Compiler API"],
    contribution: "Engineered a lightweight Java IDE with syntax highlighting, code completion, and integrated compiler.",
    outcome: "70% lower memory footprint vs IntelliJ IDEA on comparable workloads.",
    github: "https://github.com/kchaitralatha-bit/Silver-J-IDE",
  },
  {
    title: "Brain Tumor Risk Analysis",
    icon: BrainCircuit,
    image: projBrain,
    category: "Healthcare Analytics",
    neonVar: "--neon-pink",
    glowHsl: "330 100% 65%",
    problem: "Early brain tumor risk assessment requires statistical analysis of patient data without accessible tools.",
    tech: ["Java", "Statistics", "Regression", "Correlation"],
    contribution: "Implemented regression and correlation algorithms on clinical datasets for risk scores and decision support.",
    outcome: "Clinical decision support system usable by medical staff without data science expertise.",
    github: PROFILE_REPOS,
  },
  {
    title: "Real-Time Stock & Weather",
    icon: TrendingUp,
    image: projStockWeather,
    category: "Streaming Analytics",
    neonVar: "--neon-blue",
    glowHsl: "220 100% 60%",
    problem: "Real-time financial and weather data streams require efficient ingestion and live visualization.",
    tech: ["Kafka", "PostgreSQL", "Superset", "Python", "REST APIs"],
    contribution: "Built end-to-end streaming pipeline: Kafka producers → PostgreSQL → Superset dashboards.",
    outcome: "Sub-second latency dashboards for real-time market and weather monitoring.",
    github: PROFILE_REPOS,
  },
  {
    title: "Geospatial ML Analysis",
    icon: Satellite,
    image: projGeospatial,
    category: "Remote Sensing",
    neonVar: "--neon-cyan",
    glowHsl: "185 100% 50%",
    problem: "Satellite imagery classification for land use mapping requires both ML and geospatial expertise.",
    tech: ["QGIS", "GeoPandas", "Scikit-learn", "TensorFlow"],
    contribution: "Classified satellite images using CNN and ML models, integrated with QGIS for visualization.",
    outcome: "High classification accuracy on multi-spectral satellite datasets for land cover mapping.",
    github: "https://github.com/kchaitralatha-bit/ML-Algorithms-using-GIS--Delhi",
  },
  {
    title: "Agriculture Management",
    icon: Wheat,
    image: projAgriculture,
    category: "Predictive Analytics",
    neonVar: "--neon-purple",
    glowHsl: "270 100% 65%",
    problem: "Farmers lack data-driven tools to optimize crop yield and resource allocation decisions.",
    tech: ["Python", "Scikit-learn", "Tableau", "Pandas", "MySQL"],
    contribution: "Built ML pipeline for crop yield prediction with Tableau dashboards for farm insights.",
    outcome: "Predictive accuracy enabling proactive agricultural planning and resource optimization.",
    github: PROFILE_REPOS,
  },
  {
    title: "Handwritten Digit Recognition",
    icon: PenTool,
    image: projDigits,
    category: "Deep Learning",
    neonVar: "--neon-pink",
    glowHsl: "330 100% 65%",
    problem: "Accurate recognition of handwritten digits is essential for automating document processing.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "MNIST"],
    contribution: "Designed and trained a convolutional neural network on the MNIST dataset with data augmentation and dropout regularization.",
    outcome: "High-accuracy digit classification model suitable for real-world OCR applications.",
    github: "https://github.com/kchaitralatha-bit/Handwritten-Digit-Classification",
  },
  {
    title: "Financial Personality Segmentation",
    icon: Wallet,
    image: projFinance,
    category: "Unsupervised ML",
    neonVar: "--neon-blue",
    glowHsl: "220 100% 60%",
    problem: "Understanding diverse customer spending behaviors requires data-driven segmentation beyond demographics.",
    tech: ["Python", "K-Means", "Pandas", "Matplotlib", "Seaborn"],
    contribution: "Clustered customers by spending patterns using K-Means, with PCA-reduced visualizations and elbow method optimization.",
    outcome: "Distinct financial personality segments enabling targeted marketing and personalized financial products.",
    github: "https://github.com/kchaitralatha-bit/Financial-Personality-Segmentation-Spending-Intelligence-System",
  },
  {
    title: "Stock Market Direction Prediction",
    icon: CandlestickChart,
    image: projStockpred,
    category: "Time-Series ML",
    neonVar: "--neon-cyan",
    glowHsl: "185 100% 50%",
    problem: "Predicting short-term stock market direction from historical data and technical indicators is challenging.",
    tech: ["Python", "Scikit-learn", "Pandas", "Technical Indicators"],
    contribution: "Built classification models using engineered features from technical indicators and time-series lag variables.",
    outcome: "Market trend prediction model with actionable signals for informed trading decisions.",
    github: "https://github.com/kchaitralatha-bit/Stock-Market-Direction-Prediction",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            End-to-end solutions across web apps, data pipelines, ML systems, and developer tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.title} glowColor={project.glowHsl} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                className="rounded-2xl overflow-hidden glass-card-hover flex flex-col group cursor-pointer h-full"
              >
                {/* Project image header */}
                <div className="relative h-36 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, hsl(${project.neonVar} / 0.1) 40%, hsl(var(--background)) 100%)`,
                    }}
                  />
                  {/* Shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(105deg, transparent 40%, hsl(${project.neonVar} / 0.2) 50%, transparent 60%)`,
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s infinite",
                    }}
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md"
                    style={{
                      background: `hsl(${project.neonVar} / 0.15)`,
                      color: `hsl(${project.neonVar})`,
                      border: `1px solid hsl(${project.neonVar} / 0.3)`,
                    }}
                  >
                    {project.category}
                  </div>
                  {/* Bottom neon line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, hsl(${project.neonVar} / 0.5), transparent)` }}
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: `hsl(${project.neonVar} / 0.1)`,
                        border: `1px solid hsl(${project.neonVar} / 0.2)`,
                      }}
                    >
                      <project.icon size={16} style={{ color: `hsl(${project.neonVar})` }} />
                    </motion.div>
                    <h3 className="font-bold text-foreground text-base leading-tight">{project.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    <strong className="text-foreground/80">Problem: </strong>{project.problem}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedIdx === i ? "auto" : 0, opacity: expandedIdx === i ? 1 : 0 }}
                    className="overflow-hidden mb-2"
                  >
                    <p className="text-sm text-foreground/75 leading-relaxed pb-2">
                      <strong className="text-foreground/90">How: </strong>{project.contribution}
                    </p>
                  </motion.div>

                  <div className="mb-3">
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      <strong className="text-foreground/90">Outcome: </strong>{project.outcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{
                          background: `hsl(${project.neonVar} / 0.08)`,
                          color: `hsl(${project.neonVar})`,
                          border: `1px solid hsl(${project.neonVar} / 0.15)`,
                        }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <div
                      className="flex items-center gap-1 text-xs font-medium"
                      style={{ color: `hsl(${project.neonVar})` }}
                    >
                      <span>{expandedIdx === i ? "Show less" : "Show more"}</span>
                      <motion.span animate={{ rotate: expandedIdx === i ? 180 : 0 }}>
                        <ExternalLink size={12} />
                      </motion.span>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-300 hover:scale-105"
                      style={{
                        background: `hsl(${project.neonVar} / 0.1)`,
                        color: `hsl(${project.neonVar})`,
                        border: `1px solid hsl(${project.neonVar} / 0.25)`,
                      }}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={12} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
