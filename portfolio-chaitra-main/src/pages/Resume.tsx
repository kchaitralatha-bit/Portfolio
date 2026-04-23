import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const RESUME_URL = "/K_Chaitra_Latha_Resume.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm glass-card text-foreground hover:text-neon-cyan transition-colors"
            style={{ border: "1px solid hsl(var(--neon-cyan) / 0.4)" }}
          >
            <Download size={14} className="text-neon-cyan" />
            Download PDF
          </a>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-foreground">
          Resume —{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
            }}
          >
            K Chaitra Latha
          </span>
        </h1>

        <div
          className="rounded-xl overflow-hidden glass-card"
          style={{ border: "1px solid hsl(var(--neon-cyan) / 0.25)" }}
        >
          <object
            data={RESUME_URL}
            type="application/pdf"
            className="w-full"
            style={{ height: "85vh" }}
          >
            <iframe
              src={RESUME_URL}
              title="K Chaitra Latha Resume"
              className="w-full"
              style={{ height: "85vh", border: 0 }}
            />
            <div className="p-8 text-center text-muted-foreground">
              <p className="mb-4">
                Your browser cannot display the PDF inline.
              </p>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-background"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
                }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </object>
        </div>
      </motion.main>
    </div>
  );
}
