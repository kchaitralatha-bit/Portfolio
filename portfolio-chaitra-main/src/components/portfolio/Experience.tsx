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
      "Developed and maintained Learning Management System (LMS), Assessment Management System (AMS), and Quick Assessment Management System — covering end-to-end lifecycle from requirement analysis to production deployment",
      "Built and deployed scalable REST APIs for automation, analytics, reporting, exam scheduling, and data enrichment workflows using Python and Java (J2EE)",
      "Designed and implemented workflow automation systems aligned with ServiceNow ITSM processes — including incident handling, multi-level approval mechanisms, real-time notifications, and escalation rules using Flow Designer concepts",
      "Engineered exam filtering, scheduling fix modules, and dynamic question paper template generation to improve platform reliability and user experience",
      "Developed analytics dashboards and performance reports for AMS and LMS platforms using structured datasets; visualized metrics to support data-driven decision-making for stakeholders",
      "Designed data pipelines for exams, evaluations, and user activity tracking — enabling real-time monitoring and audit-ready reporting",
      "Implemented Role-Based Access Control (RBAC) across multiple systems to ensure secure, permission-based data access and user management",
      "Resolved complex database and cross-system integration issues across PostgreSQL and MySQL environments, improving system stability and data consistency",
      "Worked on the React-based QMS (Quality Management System) platform — building reusable components, integrating REST APIs, and improving frontend interactivity using React, TypeScript, and modern JavaScript",
      "Improved UI responsiveness and frontend interactivity using React, TypeScript, HTML, CSS, and JavaScript — collaborating with product teams to translate requirements into working features",
      "Assisted users and stakeholders in understanding workflow automation, system functionalities, and new feature rollouts through documentation and walkthroughs",
      "Collaborated with cross-functional teams to analyze business requirements and improve operational workflows through automation and system integration",
    ],
    tags: ["Python", "Java (J2EE)", "REST APIs", "React", "TypeScript", "PostgreSQL", "MySQL", "ServiceNow", "RBAC", "Analytics", "Workflow Automation"],
  },
  {
    title: "Technical Intern",
    company: "ATOM",
    period: "Mar 2025 – Jun 2025",
    tagline: "Backend development & engineering foundations",
    bullets: [
      "Assisted senior developers in backend development, debugging, and feature enhancements across LMS and AMS production systems using Python and Java",
      "Contributed to REST API development and backend service integration as part of the core engineering team",
      "Gained hands-on exposure to production deployments, CI/CD workflows, collaborative development practices, and code reviews",
      "Participated in sprint-based development cycles — documenting features, writing test cases, and iteratively improving platform modules",
      "Supported data pipeline design and analytics reporting tasks, building foundational experience in data engineering and system integration",
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
