import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import { TrophyIcon, LightbulbIcon, DNAIcon, GraduationCapIcon, StarIcon } from "./AchievementIcons";

const achievements = [
  {
    icon: TrophyIcon,
    title: "Head Coordinator – Bitotsav 2k23",
    subtitle: "State-Level Cultural & Technical Festival",
    description: "Led end-to-end coordination for a state-level fest, managing cross-functional teams, logistics, and 500+ participants.",
    type: "Leadership",
    neonVar: "--neon-cyan",
    glowHsl: "185 100% 50%",
  },
  {
    icon: LightbulbIcon,
    title: "Core Member – MIT Hackathon 2k25",  
    subtitle: "MIT Mysore",
    description: "Core organizing member contributing to problem statement design, judging criteria, and mentorship.",
    type: "Hackathon",
    neonVar: "--neon-purple",
    glowHsl: "270 100% 65%",
  },
  {
    icon: DNAIcon,
    title: "Mentored – Amaravati Quantum Valley",
    subtitle: "Pre-Selection Round Mentor",
    description: "Guided a team through the pre-selection round, providing technical strategy, ML approach design, and presentation coaching.",
    type: "Mentorship",
    neonVar: "--neon-pink",
    glowHsl: "330 100% 65%",
  },
  {
    icon: GraduationCapIcon,
    title: "Certificate of Appreciation – NxtWave",
    subtitle: "AI Workshop Leadership",
    description: "Received official recognition from NxtWave for exceptional leadership in organizing an AI/ML workshop.",
    type: "Recognition",
    neonVar: "--neon-blue",
    glowHsl: "220 100% 60%",
  },
  {
    icon: StarIcon,
    title: "Director L&D Appreciation – ATOM",
    subtitle: "Professional Excellence",
    description: "Personally recognized by ATOM's Director of Learning & Development for technical excellence and team collaboration.",
    type: "Professional",
    neonVar: "--neon-cyan",
    glowHsl: "185 100% 50%",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Achievements & Leadership</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Demonstrated impact beyond code — in leadership, mentorship, and community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <TiltCard key={item.title} glowColor={item.glowHsl} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="rounded-2xl p-6 glass-card-hover flex flex-col h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5"
                      style={{
                        background: `hsl(${item.neonVar} / 0.1)`,
                        border: `1px solid hsl(${item.neonVar} / 0.2)`,
                      }}
                    >
                      {/* ✅ Neon colored SVG icon with glow */}
                      <IconComponent
                        className="w-6 h-6 stroke-current fill-current"
                        style={{
                          color: `hsl(${item.neonVar})`,
                          filter: `
                            drop-shadow(0 0 4px hsl(${item.neonVar}))
                            drop-shadow(0 0 8px hsl(${item.neonVar}))
                            drop-shadow(0 0 12px hsl(${item.neonVar}))
                          `,
                        }}
                      />
                    </motion.div>

                    <div>
                      <span
                        className="inline-block px-2 py-0.5 rounded-md text-xs font-bold mb-1"
                        style={{
                          background: `hsl(${item.neonVar} / 0.1)`,
                          color: `hsl(${item.neonVar})`,
                        }}
                      >
                        {item.type}
                      </span>
                      <h3 className="font-bold text-foreground text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
