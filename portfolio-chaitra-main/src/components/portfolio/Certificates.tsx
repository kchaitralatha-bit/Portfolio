import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, BadgeCheck } from "lucide-react";
import TiltCard from "./TiltCard";

const certificates = [
  {
    title: "Scikit-learn Classification Essentials",
    subtitle: "Imbalanced Data & Pipelines",
    issuer: "LetsUpgrade × NSDC × ITM Edutech",
    date: "19 Feb 2026",
    certId: "LUESLCFEB12695",
    skills: ["Scikit-learn", "Classification", "SMOTE", "Pipelines"],
    glowHsl: "185 100% 50%",
    neonVar: "--neon-cyan",
  },
  {
    title: "Advanced Content-Based Recommender Systems",
    subtitle: "Recommendation Engine Workshop",
    issuer: "LetsUpgrade × NSDC × ITM Edutech",
    date: "27 Feb 2026",
    certId: "LUERSFEB12677",
    skills: ["Recommender Systems", "TF-IDF", "Cosine Similarity", "NLP"],
    glowHsl: "270 100% 65%",
    neonVar: "--neon-purple",
  },
  {
    title: "Python ATM Simulation Essentials",
    subtitle: "Mini Project",
    issuer: "LetsUpgrade × NSDC × ITM Edutech",
    date: "10 Feb 2026",
    certId: "LUEATMFEB126417",
    skills: ["Python", "OOP", "Logic Building"],
    glowHsl: "330 100% 65%",
    neonVar: "--neon-pink",
  },
  {
    title: "Data Science with Python",
    subtitle: "Intensive Bootcamp",
    issuer: "LetsUpgrade × NSDC × ITM Edutech",
    date: "5–7 Jun 2025",
    certId: "LUEDSJUN1251298",
    skills: ["Pandas", "NumPy", "Matplotlib", "EDA"],
    glowHsl: "220 100% 60%",
    neonVar: "--neon-blue",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Certifications</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Verified credentials in AI, ML, and Data Science — issued in collaboration with NSDC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <TiltCard key={cert.certId} glowColor={cert.glowHsl}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl p-6 glass-card-hover h-full flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `hsl(${cert.neonVar} / 0.1)`,
                      border: `1px solid hsl(${cert.neonVar} / 0.2)`,
                    }}
                  >
                    <Award className="w-6 h-6" style={{ color: `hsl(${cert.neonVar})` }} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <BadgeCheck className="w-3.5 h-3.5" style={{ color: `hsl(${cert.neonVar})` }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: `hsl(${cert.neonVar})` }}>
                        Verified · NSDC
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-base leading-snug">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-muted/40 text-muted-foreground border border-border/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-border/40">
                  <span className="text-[10px] text-muted-foreground/70 font-mono truncate">
                    ID: {cert.certId}
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
