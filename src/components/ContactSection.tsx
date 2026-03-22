import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const contacts = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/adapalachandu/", value: "adapalachandu" },
  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/ramcharan976", value: "ramcharan976" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:chanduadapala46@gmail.com", value: "chanduadapala46@gmail.com" },
  { icon: <Phone size={20} />, label: "Mobile", href: "tel:+919392451456", value: "+91 9392451456" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 12 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Open to opportunities in Machine Learning, Data Science, and software development. Feel free to reach out via the form below or through my social profiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Web3Forms Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="text-primary" size={20} />
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Replace with your actual Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">Name</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm disabled:opacity-50" placeholder="Your name" disabled={isSubmitting} />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm disabled:opacity-50" placeholder="Your email" disabled={isSubmitting} />
                </div>
              </div>
              
              <div className="space-y-2 text-left">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80 pl-1">Subject</label>
                <input type="text" name="subject" id="subject" required className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm disabled:opacity-50" placeholder="Subject" disabled={isSubmitting} />
              </div>
              
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">Description</label>
                <textarea name="message" id="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm resize-none disabled:opacity-50" placeholder="Your message..." disabled={isSubmitting}></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={18} />
                      Sent Successfully!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle size={18} />
                      Error Sending
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-500 mt-3 text-center animate-in fade-in slide-in-from-bottom-2">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-destructive mt-3 text-center animate-in fade-in slide-in-from-bottom-2">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-glass group flex flex-col items-center justify-center gap-4 p-8 text-center hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xl shadow-primary/5">
                  {c.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{c.label}</h4>
                  <p className="text-xs text-muted-foreground break-all px-2">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
