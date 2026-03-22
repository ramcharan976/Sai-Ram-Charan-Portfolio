import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 6.59",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Narayana Junior College",
    location: "Gudavalli, Andhra Pradesh",
    degree: "Intermediate",
    score: "Percentage: 78.5%",
    period: "Apr 2021 – Mar 2023",
  },
  {
    institution: "Universal High School",
    location: "Pusapadu, Andhra Pradesh",
    degree: "Matriculation",
    score: "Percentage: 98%",
    period: "Apr 2020 – Mar 2021",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic journey and qualifications.</p>
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 pl-8 space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="card-glass">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-sm mt-1">{edu.degree}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-mono text-primary">{edu.score}</span>
                      <span className="text-xs font-mono text-muted-foreground tabular-nums">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
