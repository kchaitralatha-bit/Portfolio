import { motion } from "framer-motion";
import { MapPin, ArrowDown, Linkedin, Mail, Github, Brain, Database, Code, BarChart3, Eye } from "lucide-react";
import ParticleField from "./ParticleField";
import { useTypewriter } from "./useTypewriter";
import MagneticButton from "./MagneticButton";
import profileImg from "@/assets/profile-hero.jpg";

const roles = ["AI & ML Developer", "Data Scientist", "Software Developer", "Researcher"];

const techBadges = [
  { icon: Code, label: "Python" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Science" },
  { icon: BarChart3, label: "Deep Learning" },
];

export default function Hero() {
  const typedRole = useTypewriter(roles, 90, 50, 2200);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <ParticleField />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, hsl(var(--neon-cyan) / 0.08) 0%, transparent 50%),
                              radial-gradient(ellipse at 80% 20%, hsl(var(--neon-purple) / 0.06) 0%, transparent 50%),
                              radial-gradient(ellipse at 50% 80%, hsl(var(--neon-blue) / 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.3), transparent)" }}
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              <MapPin size={14} className="text-neon-cyan" />
              <span className="text-sm font-medium text-muted-foreground">
                Bangalore, India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-2 text-foreground leading-tight"
            >
              Hi, I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
                }}
              >
                Chaitra Latha
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-neon-cyan/80"
            >
              AI & Machine Learning Developer | Data Scientist | Software Developer | Researcher
            </motion.h2>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-5"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg font-medium font-mono">
                <span className="text-neon-purple">{">"}</span>
                <span className="text-neon-cyan">{typedRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  className="text-neon-cyan"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed text-muted-foreground"
            >
              I build intelligent systems using Machine Learning, Deep Learning, and Data Science to solve real-world problems.
            </motion.p>

            {/* Technology icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {techBadges.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card text-sm font-medium text-foreground/80"
                  style={{ border: "1px solid hsl(var(--neon-cyan) / 0.15)" }}
                >
                  <Icon size={16} className="text-neon-cyan" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <MagneticButton
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 text-background"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
                  boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)",
                }}
              >
                View Projects
              </MagneticButton>
              <motion.a
                href="/K_Chaitra_Latha_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 glass-card text-foreground"
                style={{ border: "1px solid hsl(var(--neon-cyan) / 0.4)" }}
              >
                <Eye size={16} className="text-neon-cyan" />
                View Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/k-chaitra-latha-0179371bb/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kchaitralatha@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/kchaitralatha-bit", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg transition-all duration-300 glass-card text-muted-foreground hover:text-neon-cyan"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Orbiting ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{ border: "1px dashed hsl(var(--neon-cyan) / 0.2)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full"
                style={{ border: "1px dashed hsl(var(--neon-purple) / 0.15)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Orbiting dots */}
              <motion.div
                className="absolute -inset-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: "hsl(var(--neon-cyan))", boxShadow: "0 0 8px hsl(var(--neon-cyan))" }} />
              </motion.div>
              <motion.div
                className="absolute -inset-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--neon-purple))", boxShadow: "0 0 8px hsl(var(--neon-purple))" }} />
              </motion.div>

              <div
                className="absolute -inset-4 rounded-full opacity-30 animate-pulse"
                style={{
                  background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), transparent 70%)",
                }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden"
                style={{
                  border: "2px solid hsl(var(--neon-cyan) / 0.4)",
                  boxShadow: "var(--glow-cyan), inset 0 0 30px hsl(var(--neon-cyan) / 0.05)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Chaitra Latha - AI & ML Developer"
                  className="w-full h-full object-cover"
                  style={{
                    background: "linear-gradient(135deg, hsl(230 20% 12%), hsl(185 30% 15%))",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 pb-8"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-xs font-medium cursor-pointer text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
