import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo with animated background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 animate-float relative"
          >
            {/* Pulsing gradient glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/30 via-blue-500/20 to-indigo-500/30 blur-2xl"
            />

            {/* Rotating orbital ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-5 rounded-full border border-primary/20"
            >
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </motion.div>

            {/* Rotating orbital ring 2 (reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-indigo-400/15 hidden md:block"
            >
              <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-blue-400/80 shadow-lg shadow-blue-400/40" />
              <div className="absolute bottom-4 -left-1 w-1.5 h-1.5 rounded-full bg-indigo-400/70" />
            </motion.div>

            {/* Photo */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 border-white/10 group shadow-2xl">
              <img
                src={profilePhoto}
                alt="Sai Ram Charan Adapala"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2.5rem]" />
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Sai Ram Charan
                <br />
                <span className="gradient-text">Adapala</span>
              </h1>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-3 justify-center md:justify-start text-base md:text-xl text-muted-foreground font-medium mb-6 md:mb-8"
              >
                <span className="w-10 h-[1px] bg-border hidden md:block" />
                ML Student @ Lovely Professional University
              </motion.div>
              <p className="text-muted-foreground max-w-[55ch] mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-light">
                Aspiring <span className="text-foreground font-medium">Machine Learning Engineer</span> dedicated to building intelligent systems that transform raw data into actionable insights through innovative AI architectures.
              </p>

              <div className="flex flex-wrap items-center gap-5 justify-center md:justify-start">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  Let's Connect
                </motion.a>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com/ramcharan976" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-2xl bg-secondary/50 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover-lift"
                  >
                    <Github size={22} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/adapalachandu/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-2xl bg-secondary/50 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover-lift"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a 
                    href="mailto:chanduadapala46@gmail.com" 
                    className="p-3.5 rounded-2xl bg-secondary/50 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover-lift"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a href="#about-detailed" className="text-muted-foreground animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
