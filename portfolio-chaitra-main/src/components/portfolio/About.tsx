import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import TiltCard from "./TiltCard";

const bioPoints = [
  "MCA in Data Science from Chanakya University, Bangalore — graduated with CGPA 9.13, consistently ranked among top performers",
  "1+ year of professional experience as Associate Software Developer at ATOM, scaling LMS, AMS & workflow automation platforms used by thousands of users",
  "Specialized in Machine Learning, Deep Learning, and Data Science — building production-grade models with TensorFlow, Scikit-learn & Keras",
  "Strong backend engineer fluent in Python, Java (J2EE), Flask, REST APIs, Apache Kafka, and real-time data pipelines",
  "Skilled in turning raw data into business intelligence using Tableau, Power BI, Apache Superset, and PySpark analytics",
  "Implemented Role-Based Access Control (RBAC), workflow automation, and ServiceNow ITSM-aligned approval systems across enterprise platforms",
  "Recognized by Director–L&D for technical excellence; Head Coordinator of state-level fest Bitotsav 2k23 and key driver in MIT Hackathon execution",
  "Passionate problem-solver who thrives in cross-functional teams — translating business requirements into reliable, scalable, user-first solutions",
];

const traits = [
  "Quick Learner",
  "Team Player",
  "Detail-Oriented",
  "Problem Solver",
  "Self-Motivated",
  "Strong Communicator",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Engineer by craft. Data scientist by passion. Builder by nature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-2">
              I'm <span className="text-neon-cyan font-semibold">Chaitra Latha</span> — a results-driven{" "}
              <span className="text-foreground font-semibold">AI & Machine Learning Developer</span>,
              Data Scientist, and Software Developer based in Bangalore, India.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              I build intelligent, end-to-end systems that combine machine learning, scalable backend
              engineering, and real-time analytics to solve real-world business problems. From designing
              REST APIs and data pipelines to deploying ML models and workflow automation — I deliver
              measurable impact across the full product lifecycle.
            </p>

            {bioPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                whileHover={{ x: 8, borderColor: "hsl(var(--neon-cyan) / 0.4)" }}
                className="flex items-start gap-3 p-4 rounded-xl glass-card-hover cursor-default"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "hsl(var(--neon-cyan))", boxShadow: "0 0 8px hsl(var(--neon-cyan) / 0.6)" }}
                />
                <p className="text-sm text-foreground/80 leading-relaxed">{point}</p>
              </motion.div>
            ))}

            {/* Soft skills / traits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="pt-4"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                What I bring to the team
              </p>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait, i) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="tag-pill text-xs cursor-default"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4 self-stretch auto-rows-fr"
          >
            {[
              { value: 9, suffix: "+", label: "Key Projects", color: "var(--neon-cyan)", glowHsl: "185 100% 50%" },
              { value: 1, suffix: "+", label: "Years Experience", color: "var(--neon-purple)", glowHsl: "270 100% 65%" },
              { value: 9.13, suffix: "", label: "MCA CGPA", color: "var(--neon-pink)", glowHsl: "330 100% 65%", decimals: 2 },
              { value: 5, suffix: "+", label: "Awards & Recognitions", color: "var(--neon-blue)", glowHsl: "220 100% 60%" },
              { value: 15, suffix: "+", label: "Technologies", color: "var(--neon-purple)", glowHsl: "270 100% 65%" },
              { value: 3, suffix: "+", label: "Hackathons Led", color: "var(--neon-cyan)", glowHsl: "185 100% 50%" },
            ].map((stat, i) => (
              <TiltCard key={stat.label} glowColor={stat.glowHsl} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl glass-card-hover text-center h-full"
                >
                  <span
                    className="text-3xl font-black flex items-baseline"
                    style={{ color: `hsl(${stat.color})` }}
                  >
                    <AnimatedCounter target={stat.value} decimals={stat.decimals ?? 0} />
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground mt-1">{stat.label}</span>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
