import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Brain, LineChart, BarChart3, Layers, Database, Globe, Wrench } from "lucide-react";

import skillsLanguages from "@/assets/skills-languages.jpg";
import skillsBackend from "@/assets/skills-backend.jpg";
import skillsMl from "@/assets/skills-ml.jpg";
import skillsFrontend from "@/assets/skills-frontend.jpg";
import skillsViz from "@/assets/skills-viz.jpg";
import skillsTools from "@/assets/skills-tools.jpg";

const skillGroups = [
  {
    category: "Languages",
    icon: Code2,
    neonVar: "--neon-cyan",
    image: skillsLanguages,
    skills: ["Python", "Java", "C", "C++", "C#.NET", "TypeScript", "JavaScript"],
  },
  {
    category: "ML / AI",
    icon: Brain,
    neonVar: "--neon-pink",
    image: skillsMl,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Neural Networks", "CNN", "K-Means", "KNN"],
  },
  {
    category: "Data Analysis",
    icon: LineChart,
    neonVar: "--neon-purple",
    image: skillsBackend,
    skills: ["Pandas", "NumPy", "SQL", "Statistical Modeling", "Feature Engineering"],
  },
  {
    category: "Visualization",
    icon: BarChart3,
    neonVar: "--neon-cyan",
    image: skillsViz,
    skills: ["Tableau", "Power BI", "Apache Superset", "Matplotlib"],
  },
  {
    category: "Big Data",
    icon: Layers,
    neonVar: "--neon-blue",
    image: skillsBackend,
    skills: ["PySpark", "Apache Kafka"],
  },
  {
    category: "Databases",
    icon: Database,
    neonVar: "--neon-purple",
    image: skillsBackend,
    skills: ["PostgreSQL", "MySQL", "NoSQL"],
  },
  {
    category: "Web / APIs",
    icon: Globe,
    neonVar: "--neon-blue",
    image: skillsFrontend,
    skills: ["React", "Flask", "REST APIs", "HTML", "CSS", "JavaScript", "TypeScript", "Workflow Automation"],
  },
  {
    category: "Tools",
    icon: Wrench,
    neonVar: "--neon-cyan",
    image: skillsTools,
    skills: ["Git", "Jupyter Notebook", "VS Code", "Ubuntu", "ServiceNow (Basic)"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            A comprehensive toolkit spanning full-stack development, data engineering, and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden glass-card-hover group relative"
            >
              {/* Image header with animations */}
              <div className="relative h-32 overflow-hidden">
                <motion.img
                  src={group.image}
                  alt={group.category}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, hsl(${group.neonVar} / 0.1) 0%, hsl(var(--background)) 100%)`,
                  }}
                />
                {/* Shimmer animation on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(105deg, transparent 40%, hsl(${group.neonVar} / 0.15) 50%, transparent 60%)`,
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s infinite",
                  }}
                />
                {/* Bottom neon line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, hsl(${group.neonVar} / 0.5), transparent)` }}
                />
              </div>

              {/* Radial glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, hsl(${group.neonVar} / 0.15), transparent 70%)`,
                }}
              />

              <div className="relative p-6 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `hsl(${group.neonVar} / 0.1)`,
                      border: `1px solid hsl(${group.neonVar} / 0.2)`,
                    }}
                  >
                    <group.icon size={18} style={{ color: `hsl(${group.neonVar})` }} />
                  </motion.div>
                  <h3 className="font-bold text-sm" style={{ color: `hsl(${group.neonVar})` }}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.12, y: -2 }}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-300 cursor-default relative"
                      style={{
                        background: hoveredSkill === skill ? `hsl(${group.neonVar} / 0.2)` : `hsl(${group.neonVar} / 0.08)`,
                        color: hoveredSkill === skill ? `hsl(${group.neonVar})` : "hsl(var(--foreground) / 0.8)",
                        border: `1px solid hsl(${group.neonVar} / ${hoveredSkill === skill ? 0.4 : 0.15})`,
                        boxShadow: hoveredSkill === skill ? `0 0 12px hsl(${group.neonVar} / 0.3)` : "none",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
