import { useState, useEffect } from "react";
import { Menu, X, Download, Palette, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [colorTheme, setColorTheme] = useState(localStorage.getItem("portfolio-theme") || "midnight");
  const [isDark, setIsDark] = useState(localStorage.getItem("portfolio-mode") !== "light");

  useEffect(() => {
    const root = window.document.documentElement;
    const activeTheme = isDark ? colorTheme : "light";
    root.setAttribute("data-theme", activeTheme);
    localStorage.setItem("portfolio-theme", colorTheme);
    localStorage.setItem("portfolio-mode", isDark ? "dark" : "light");
  }, [colorTheme, isDark]);

  const toggleColorTheme = () => {
    const themes = ["midnight", "emerald", "rose"];
    const nextTheme = themes[(themes.indexOf(colorTheme) + 1) % themes.length];
    setColorTheme(nextTheme);
    if (!isDark) setIsDark(true);
  };

  const toggleDarkLight = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass shadow-lg" : "bg-transparent"}`}>
      <div className="section-container flex items-center justify-between h-16">
        <a href="#about" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">SRC</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-primary/10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
          <a
            href="/Sai_Ram_CV.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover-lift"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={toggleColorTheme}
            className="ml-3 p-2 rounded-lg bg-secondary/50 border border-border/30 text-muted-foreground hover:text-primary transition-all hover-lift"
            title="Change Color Theme"
          >
            <motion.div
              animate={{ rotate: colorTheme === "midnight" ? 0 : colorTheme === "emerald" ? 120 : 240 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Palette size={20} />
            </motion.div>
          </button>

          <button
            onClick={toggleDarkLight}
            className="ml-1 p-2 rounded-lg bg-secondary/50 border border-border/30 text-muted-foreground hover:text-primary transition-all hover-lift"
            title={isDark ? "Switch to Light" : "Switch to Dark"}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={20} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleColorTheme}
            className="p-2 rounded-lg bg-secondary/50 border border-border/30 text-muted-foreground hover:text-primary"
          >
            <Palette size={18} />
          </button>
          <button
            onClick={toggleDarkLight}
            className="p-2 rounded-lg bg-secondary/50 border border-border/30 text-muted-foreground hover:text-primary"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t border-border"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Sai_Ram_CV.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
