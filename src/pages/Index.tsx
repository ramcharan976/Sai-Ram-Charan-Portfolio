import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import PortfolioEntry from "@/components/PortfolioEntry";
import Preloader from "@/components/Preloader";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const entered = sessionStorage.getItem("portfolio_entered");
    if (entered) setHasEntered(true);
    
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    sessionStorage.setItem("portfolio_entered", "true");
  };

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="mesh-bg" />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <PortfolioEntry onEnter={handleEnter} key="entry" />
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
            key="content"
          >
            <Navbar />
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <AchievementsSection />
            <EducationSection />
            <ContactSection />
            
            <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Sai Ram Charan Adapala. Built with Passion.</p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
