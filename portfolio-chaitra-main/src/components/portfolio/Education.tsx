import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MCA – Data Science",
    institution: "Chanakya University",
    location: "Bangalore, India",
    period: "2023 – 2025",
    neonVar: "--neon-cyan",
    highlights: [
      "Specialization in Machine Learning & Data Science",
      "Projects in NLP, Computer Vision, and Predictive Analytics",
      "Top performer with distinction",
    ],
  },
  {
    degree: "BCA – Computer Applications",
    institution: "VSK University",
    location: "Karnataka, India",
    period: "2020 – 2023",
    neonVar: "--neon-purple",
    highlights: [
      "Core foundations in programming, algorithms, and databases",
      "Active in technical clubs and events",
      "Graduated with distinction",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Education</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Strong academic foundation in computer science and data science.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl overflow-hidden glass-card-hover"
            >
              <div className="h-1" style={{ background: `linear-gradient(90deg, hsl(${edu.neonVar}), hsl(${edu.neonVar} / 0.3))` }} />
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `hsl(${edu.neonVar} / 0.1)`,
                        border: `1px solid hsl(${edu.neonVar} / 0.2)`,
                      }}
                    >
                      <GraduationCap size={22} style={{ color: `hsl(${edu.neonVar})` }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: `hsl(${edu.neonVar})` }}>
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `hsl(${edu.neonVar})` }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
