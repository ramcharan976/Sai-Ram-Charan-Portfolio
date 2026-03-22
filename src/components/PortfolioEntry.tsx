import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { useState, useEffect } from "react";

interface PortfolioEntryProps {
  onEnter: () => void;
}

const PortfolioEntry = ({ onEnter }: PortfolioEntryProps) => {
  const fullName = "SAI RAM CHARAN";
  const lastName = "ADAPALA";
  const [displayedName, setDisplayedName] = useState("");
  const [displayedLast, setDisplayedLast] = useState("");
  const [phase, setPhase] = useState<"first" | "second" | "done">("first");

  useEffect(() => {
    if (phase === "first") {
      if (displayedName.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayedName(fullName.slice(0, displayedName.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setPhase("second");
      }
    } else if (phase === "second") {
      if (displayedLast.length < lastName.length) {
        const timeout = setTimeout(() => {
          setDisplayedLast(lastName.slice(0, displayedLast.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setPhase("done");
      }
    }
  }, [displayedName, displayedLast, phase]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Background ML Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/40 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Connection Lines (Simulating Neural Network) */}
        <svg className="absolute inset-0 w-full h-full">
            <defs>
                 <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                 </linearGradient>
            </defs>
            {[...Array(15)].map((_, i) => (
                <motion.line
                    key={i}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="url(#line-grad)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
            boxShadow: ["0 0 20px rgba(96, 165, 250, 0.2)", "0 0 40px rgba(96, 165, 250, 0.4)", "0 0 20px rgba(96, 165, 250, 0.2)"]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 md:w-28 md:h-28 bg-primary/10 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mx-auto mb-8 md:mb-10 border border-primary/30 backdrop-blur-md shadow-2xl"
        >
          <Brain className="w-10 h-10 md:w-14 md:h-14 text-primary" />
        </motion.div>

        {/* Typewriter Name */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tighter min-h-[2.4em]">
          <span>
            {displayedName}
            {phase === "first" && (
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-baseline" />
            )}
          </span>
          {displayedName.length === fullName.length && (
            <>
              <br />
              <span className="gradient-text tracking-normal drop-shadow-sm">
                {displayedLast}
                {phase === "second" && (
                  <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-baseline" />
                )}
              </span>
            </>
          )}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-muted-foreground font-mono text-base md:text-xl mb-10 md:mb-14 max-w-md mx-auto leading-relaxed px-4"
        >
          Engineering the future with <br />
          <span className="text-primary font-bold">Machine Learning</span>
        </motion.p>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-primary text-primary-foreground px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Exploration Starts Here
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%]"
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.8 }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PortfolioEntry;
