import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Star, CheckCircle2 } from "lucide-react";

type Role = {
  title: string;
  company: string;
  period: string;
  tagline: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    title: "Associate Software Developer",
    company: "ATOM",
    period: "Aug 2025 – Present",
    tagline: "Building scalable LMS, AMS & workflow automation platforms",
    current: true,
    bullets: [
      "Engineered end-to-end features for three enterprise platforms (LMS, AMS, QMS) — spanning requirement analysis, development, testing, and production deployment.",
      "Delivered the complete candidate interview invitation flow for INTERVEXA AI: built an auth-aware React validation page with secure backend API verification, conditional routing for unauthenticated users, and polished async UX (loading states, error handling).",
      "Designed and deployed Python-based REST APIs supporting automation, analytics, exam scheduling, and data enrichment workflows — improving operational throughput across teams.",
      "Architected ITSM-aligned workflow automation (incident handling, multi-level approvals, real-time notifications, escalation rules) using Flow Designer patterns — reducing manual process overhead.",
      "Developed analytics dashboards and structured performance reports for AMS and LMS; visualized KPIs enabling data-driven stakeholder decisions.",
      "Built real-time data pipelines for exams, evaluations, and user activity — supporting live monitoring and audit-ready reporting.",
      "Implemented Role-Based Access Control (RBAC) across systems, enforcing secure, permission-based data access for 3+ platform modules.",
      "Resolved critical database integration issues across PostgreSQL and MySQL environments, improving data consistency and system uptime.",
      "Improved frontend responsiveness across HTML/CSS/JavaScript UIs through close collaboration with product teams, accelerating feature delivery cycles.",
      "Produced technical documentation and led walkthroughs for workflow automation features, reducing onboarding time for new stakeholders.",
    ],
    tags: ["Python", "Java (J2EE)", "REST APIs", "React", "TypeScript", "PostgreSQL", "MySQL", "ServiceNow", "RBAC", "Analytics", "Workflow Automation"],
  },
  {
    title: "Technical Intern",
    company: "ATOM",
    period: "Mar 2025 – Jun 2025",
    tagline: "Backend development & engineering foundations",
    bullets: [
      "Assisted senior developers in backend development, debugging, and feature enhancements across LMS and AMS production systems using Python and Java.",
      "Contributed to REST API development and backend service integration as part of the core engineering team.",
      "Gained hands-on experience with production deployments, code reviews, and sprint-based development cycles.",
      "Supported data pipeline design and analytics reporting tasks, building foundational experience in data engineering and system integration.",
    ],
    tags: ["Python", "Java", "REST APIs", "CI/CD", "Debugging", "Data Pipelines"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading">
            Professional impact in full-stack development, automation, and data engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title + role.period}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.15 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass-card-hover">
                <div className="h-1 w-full" style={{ background: "var(--gradient-accent)" }} />

                <div className="absolute left-8 top-20 bottom-8 w-px hidden sm:block" style={{ background: "linear-gradient(180deg, hsl(var(--neon-cyan) / 0.4), transparent)" }} />

                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "hsl(var(--neon-cyan) / 0.1)",
                          border: "1px solid hsl(var(--neon-cyan) / 0.2)",
                        }}
                      >
                        <Briefcase size={22} className="text-neon-cyan" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                        <p className="text-neon-cyan font-semibold text-base">{role.company}</p>
                        <p className="text-muted-foreground text-sm mt-0.5">{role.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                      {role.current && (
                        <motion.span
                          animate={{ boxShadow: ["0 0 0px hsl(var(--neon-cyan) / 0)", "0 0 12px hsl(var(--neon-cyan) / 0.4)", "0 0 0px hsl(var(--neon-cyan) / 0)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            background: "hsl(var(--neon-cyan) / 0.1)",
                            color: "hsl(var(--neon-cyan))",
                            border: "1px solid hsl(var(--neon-cyan) / 0.25)",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "hsl(var(--neon-cyan))" }} />
                          Current Role
                        </motion.span>
                      )}
                      <span className="text-sm text-muted-foreground font-medium">{role.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {role.bullets.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-3 cursor-default"
                      >
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5 text-neon-cyan" />
                        <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {role.current && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      className="mt-8 flex items-center gap-3 p-4 rounded-xl cursor-default"
                      style={{
                        background: "hsl(var(--neon-purple) / 0.08)",
                        border: "1px solid hsl(var(--neon-purple) / 0.2)",
                      }}
                    >
                      <Star size={18} className="flex-shrink-0" style={{ color: "hsl(var(--neon-purple))" }} />
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--neon-purple))" }}>
                        Recognized by Director–L&D at ATOM for exceptional technical excellence and collaborative leadership.
                      </p>
                    </motion.div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <motion.span key={tag} whileHover={{ scale: 1.1 }} className="tag-pill text-xs cursor-default">{tag}</motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
