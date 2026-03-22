import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import certImg from "@/assets/certificates-preview.jpg";
import nptelCloudImg from "@/assets/nptel-cloud-computing.jpg";
import fccResponsiveImg from "@/assets/fcc-responsive-web.jpg";
import courseraTcpImg from "@/assets/coursera-tcp-ip.jpg";
import courseraCommImg from "@/assets/coursera-computer-comm.jpg";


const certificates = [
  { 
    name: "Cloud Computing (Swayam - Elite)", 
    issuer: "NPTEL | IIT Kharagpur", 
    date: "Jan-Apr 2025", 
    link: nptelCloudImg,
    image: nptelCloudImg
  },
  { 
    name: "Computer Communications", 
    issuer: "Coursera | University of Colorado", 
    date: "Nov 2024", 
    link: courseraCommImg,
    image: courseraCommImg 
  },
  { 
    name: "TCP/IP And Advanced Topics", 
    issuer: "Coursera | University of Colorado", 
    date: "Nov 2024", 
    link: courseraTcpImg,
    image: courseraTcpImg 
  },
  { 
    name: "Responsive Web Design", 
    issuer: "freeCodeCamp", 
    date: "Nov 2023", 
    link: "https://freecodecamp.org/certification/fccf59077ec-4690-4041-b718-6beb31f002eb/responsive-web-design",
    image: fccResponsiveImg 
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">Professional certifications and course completions.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="card-glass flex flex-col group overflow-hidden"
            >
              {cert.image && (
                <div className="h-32 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-white/5">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award size={16} />
                </div>
                <span className="text-xs font-mono text-muted-foreground tabular-nums">{cert.date}</span>
              </div>
              <h3 className="text-sm font-semibold mb-1 flex-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
              >
                <ExternalLink size={12} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
