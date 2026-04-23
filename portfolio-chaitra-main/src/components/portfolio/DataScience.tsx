import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, TrendingUp, Activity, PenTool, type LucideIcon } from "lucide-react";

type DSProject = {
  title: string;
  algorithm: string;
  icon: LucideIcon;
  description: string;
  metrics: { label: string; value: string; neonVar: string }[];
  techExplain: string;
  neonVar: string;
};

const dsProjects: DSProject[] = [
  {
    title: "COVID-19 Outcome Prediction",
    algorithm: "K-Nearest Neighbors (KNN)",
    icon: Activity,
    description: "Predicted patient outcomes (recovery vs. critical) using clinical features like age, comorbidities, and symptom severity.",
    metrics: [
      { label: "Accuracy", value: "91.4%", neonVar: "--neon-cyan" },
      { label: "Precision", value: "89.2%", neonVar: "--neon-purple" },
      { label: "Recall", value: "88.7%", neonVar: "--neon-pink" },
    ],
    techExplain: "KNN identifies similar patients based on feature similarity — like finding your 'nearest neighbors' in data space — and predicts outcomes based on how those similar cases resolved.",
    neonVar: "--neon-pink",
  },
  {
    title: "Handwritten Digit Classification",
    algorithm: "Neural Networks (MNIST)",
    icon: PenTool,
    description: "Classified handwritten digits 0-9 from the MNIST dataset using deep neural networks with multi-layer architecture.",
    metrics: [
      { label: "Accuracy", value: "98.2%", neonVar: "--neon-cyan" },
      { label: "Precision", value: "97.8%", neonVar: "--neon-purple" },
      { label: "Recall", value: "97.5%", neonVar: "--neon-pink" },
    ],
    techExplain: "Neural networks mimic the human brain — each layer learns progressively complex features, from raw pixels to stroke patterns to full digit recognition.",
    neonVar: "--neon-cyan",
  },
];

function MetricBar({ label, value, neonVar }: { label: string; value: string; neonVar: string }) {
  const numericValue = parseFloat(value);
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-sm font-bold" style={{ color: `hsl(${neonVar})` }}>{value}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(var(--glass))" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${numericValue}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(${neonVar}), hsl(${neonVar} / 0.6))`,
            boxShadow: `0 0 8px hsl(${neonVar} / 0.4)`,
          }}
        />
      </div>
    </div>
  );
}

export default function DataScience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="datascience" className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Data Science Showcase</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            ML models explained for both technical teams and business stakeholders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dsProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl overflow-hidden glass-card-hover"
            >
              <div className="h-1" style={{ background: `linear-gradient(90deg, hsl(${project.neonVar}), hsl(${project.neonVar} / 0.3))` }} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `hsl(${project.neonVar} / 0.1)`,
                      border: `1px solid hsl(${project.neonVar} / 0.2)`,
                    }}
                  >
                    <project.icon size={22} style={{ color: `hsl(${project.neonVar})` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base">{project.title}</h3>
                    <span className="text-xs font-semibold" style={{ color: `hsl(${project.neonVar})` }}>
                      {project.algorithm}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6 p-4 rounded-xl" style={{ background: `hsl(${project.neonVar} / 0.05)`, border: `1px solid hsl(${project.neonVar} / 0.1)` }}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Model Performance
                  </h4>
                  {project.metrics.map((m) => (
                    <MetricBar key={m.label} {...m} />
                  ))}
                </div>

                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "hsl(var(--neon-purple) / 0.05)",
                    border: "1px solid hsl(var(--neon-purple) / 0.15)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Brain size={14} style={{ color: "hsl(var(--neon-purple))" }} />
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--neon-purple))" }}>
                      For Non-Technical Readers
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.techExplain}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 rounded-2xl p-6 glass-card-hover"
        >
          <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-neon-cyan" />
            Model Comparison at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid hsl(var(--border))" }}>
                  <th className="text-left py-2 px-3 font-semibold text-muted-foreground text-xs">Model</th>
                  <th className="text-left py-2 px-3 font-semibold text-muted-foreground text-xs">Algorithm</th>
                  <th className="text-center py-2 px-3 font-semibold text-muted-foreground text-xs">Accuracy</th>
                  <th className="text-center py-2 px-3 font-semibold text-muted-foreground text-xs">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {dsProjects.map((p) => (
                  <tr key={p.title} style={{ borderBottom: "1px solid hsl(var(--border) / 0.5)" }} className="hover:bg-secondary/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-foreground text-xs">{p.title}</td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{p.algorithm}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: `hsl(${p.neonVar} / 0.1)`, color: `hsl(${p.neonVar})` }}
                      >
                        {p.metrics[0].value}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-center text-xs text-muted-foreground">Healthcare / CV</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
