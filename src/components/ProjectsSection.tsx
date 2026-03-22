import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import wasteImg from "@/assets/project-waste-management.jpg";
import chatbotImg from "@/assets/project-ai-chatbot.jpg";

const projects = [
  {
    title: "Circular Economy & Waste Management",
    image: wasteImg,
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Built a digital platform for waste classification and disposal tracking",
      "Developed APIs with MIT App Inventor for seamless database interaction",
      "Promoted waste segregation and recycling through intuitive user flows",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
    github: "https://github.com/ramcharan976/CE-WM",
    demo: "https://circular-economy-gold.vercel.app/",
  },
  {
    title: "AI Event Planner Chatbot",
    image: chatbotImg,
    period: "Jan 2023 – May 2023",
    bullets: [
      "Designed AI-powered chatbot for personalized event planning recommendations",
      "Implemented NLP-based interaction for venues, themes, and budget management",
      "Integrated automated workflows for booking, guest management, and reminders",
    ],
    tech: ["Python", "HTML", "CSS", "JavaScript", "Gemini AI API", "JSON"],
    github: "https://github.com/ramcharan976/AI-Event-Planner-Chatbot",
    demo: "https://event-planner-chatbot.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected work demonstrating applied skills.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="card-glass group overflow-hidden"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-4">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
              </div>

              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 ring-1 ring-inset ring-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>

              <ul className="space-y-1.5 mb-4">
                {project.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech?.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 border border-white/5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary hover:border-primary/30 transition-all hover-lift"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover-lift"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
