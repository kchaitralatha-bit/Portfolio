import { motion } from "framer-motion";
import { Linkedin, Mail, Heart, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-10 neon-border-top" style={{ background: "hsl(230 20% 4%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
                color: "hsl(var(--background))",
              }}
            >
              KCL
            </motion.div>
            <div>
              <p className="font-bold text-sm text-foreground">K Chaitra Latha</p>
              <p className="text-xs text-muted-foreground">
                Software Developer · Data Analyst · Data Scientist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
                className="p-2 rounded-lg transition-all duration-300 glass-card text-muted-foreground hover:text-neon-cyan"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <p className="text-xs flex items-center justify-center gap-1 text-muted-foreground">
            © {currentYear} K Chaitra Latha · Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={11} className="mx-0.5 text-neon-cyan" />
            </motion.span>
            passion for great software.
          </p>
        </div>
      </div>
    </footer>
  );
}
