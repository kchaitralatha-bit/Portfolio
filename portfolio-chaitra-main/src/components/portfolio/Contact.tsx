import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, ArrowRight, Github } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    { icon: Mail, label: "Email", value: "kchaitralatha@gmail.com", href: "mailto:kchaitralatha@gmail.com", neonVar: "--neon-pink" },
    { icon: Linkedin, label: "LinkedIn", value: "k-chaitra-latha", href: "https://www.linkedin.com/in/k-chaitra-latha-0179371bb/", neonVar: "--neon-blue" },
    { icon: Github, label: "GitHub", value: "kchaitralatha-bit", href: "https://github.com/kchaitralatha-bit", neonVar: "--neon-purple" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Let's Connect</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Open to Software Developer, Data Analyst, and Data Scientist opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden mb-8 relative"
            style={{
              background: "var(--gradient-hero)",
              boxShadow: "var(--shadow-neon)",
              border: "1px solid hsl(var(--neon-cyan) / 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            {/* Animated corner glows */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.15), transparent 70%)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--neon-purple) / 0.15), transparent 70%)" }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative p-8 sm:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={16} className="text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Bangalore, India · Available for Remote & Hybrid
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-foreground">
                Ready to Build Something <span className="gradient-text">Great</span> Together?
              </h3>
              <p className="mb-8 text-sm sm:text-base leading-relaxed max-w-lg mx-auto text-muted-foreground">
                Whether you're looking for a developer who understands data, or a data scientist who can ship production code —
                I bring both to the table.
              </p>
              <MagneticButton
                href="mailto:kchaitralatha@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 text-background"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
                  boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)",
                }}
              >
                Send Email <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6, borderColor: `hsl(${link.neonVar} / 0.4)` }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl glass-card-hover text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `hsl(${link.neonVar} / 0.1)`,
                    border: `1px solid hsl(${link.neonVar} / 0.2)`,
                  }}
                >
                  <link.icon size={20} style={{ color: `hsl(${link.neonVar})` }} />
                </motion.div>
                <div>
                  <p className="font-bold text-sm text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 break-all">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
