import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users } from "lucide-react";

const achievements = [
  {
    title: "Volunteer — Old Age Home (NGO Service)",
    date: "Aug 2024",
    icon: <Heart size={18} />,
    bullets: [
      "Contributed to community service by engaging with elderly residents and assisting in daily activities",
      "Demonstrated empathy, teamwork, and commitment to social responsibility",
    ],
  },
  {
    title: "Volunteer — CARECLUB FOUNDATION",
    date: "Jul 2024",
    icon: <Users size={18} />,
    bullets: [
      "Organized community outreach programs and awareness drives",
      "Improved participation and engagement among local beneficiaries",
    ],
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Community contributions and volunteer work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-glass"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <span className="text-xs font-mono text-muted-foreground tabular-nums">{item.date}</span>
                </div>
              </div>
              <ul className="space-y-2 flex-1">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
