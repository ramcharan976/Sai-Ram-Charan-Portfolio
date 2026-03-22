import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code size={18} />,
    skills: ["Python", "Java", "JavaScript", "C", "C++", "SQL", "HTML", "CSS",],
  },
  {
    title: "Tools & Platforms",
    icon: <Brain size={18} />,
    skills: ["Jupyter Notebook", "Google Colab", "GitHub", "Git", "MySQL", "Bootstrap"],
  },
  {
    title: "Soft Skills",
    icon: <Users size={18} />,
    skills: ["Project Management", "Critical Thinking", "Time Management", "Adaptability", "Teamwork"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block relative">
            Technical Arsenal
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
            />
          </h2>
          <p className="section-subtitle mt-6">A curated list of technologies and methodologies I specialize in.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
              className="card-glass group p-8"
            >
              <div className="flex items-center gap-4 mb-8 transition-transform group-hover:scale-110 duration-500">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight">{cat.title}</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2.5"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.4)' }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
