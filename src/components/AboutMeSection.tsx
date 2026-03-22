import { motion } from "framer-motion";
import { User, Target, Rocket } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section id="about-detailed" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="section-title text-5xl md:text-6xl font-black mb-4">About the Vision</h2>
          <p className="section-subtitle max-w-2xl text-xl leading-relaxed">A deep dive into my professional journey, mission, and what drives me to push the boundaries of AI.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="card-glass group flex flex-col items-center text-center p-10 hover:border-primary/40 duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20 group-hover:bg-primary/20 duration-500">
              <User className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              Passionate B.Tech student specializing in Computer Science and Machine Learning. I thrive on translating complex mathematical concepts into efficient, data-driven code that solves real-world challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="card-glass group flex flex-col items-center text-center p-10 border-primary/20 hover:border-primary/60 duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20 group-hover:bg-primary/20 duration-500">
              <Target className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">My Mission</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              To bridge the gap between high-level AI research and user-centric applications. I am committed to developing ethical, scalable, and intelligent systems that empower users and industries alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="card-glass group flex flex-col items-center text-center p-10 hover:border-primary/40 duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20 group-hover:bg-primary/20 duration-500">
              <Rocket className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">The Future</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              Exploring the frontiers of deep learning, generative AI, and advanced data analytics. I seek out environments that demand innovation and offer the scale to make a significant impact on technology.
            </p>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary animate-ping" />
                Current Focus
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-[80ch]">
              Deeply immersed in the world of <span className="text-foreground font-medium">Generative AI</span> and <span className="text-foreground font-medium">Large Language Models</span>. My work involves designing intelligent chatbots and streamlining ML pipelines for cloud deployment, with a focus on efficiency and real-time inference.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
