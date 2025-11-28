import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Completed",
    description: "Comprehensive introduction to cybersecurity concepts, threats, and defense strategies"
  },
  {
    title: "Python Programming",
    issuer: "Online Learning Platform",
    date: "2023",
    status: "Completed",
    description: "Advanced Python programming including data structures, algorithms, and best practices"
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    status: "Completed",
    description: "Full-stack web development with HTML, CSS, JavaScript, React, and Node.js"
  },
  {
    title: "Network Security",
    issuer: "SIUT Training Program",
    date: "2024",
    status: "In Progress",
    description: "Advanced network security protocols, penetration testing, and threat analysis"
  },
  {
    title: "Ethical Hacking",
    issuer: "EC-Council (CEH Prep)",
    date: "2024",
    status: "In Progress",
    description: "Preparation for Certified Ethical Hacker certification covering penetration testing methodologies"
  }
];

export const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Continuous learning and professional development in cybersecurity and development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block glow-effect"></div>

                {/* Content */}
                <div className="md:ml-20">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg glow-effect">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span 
                        className={`px-3 py-1 text-xs rounded-full ${
                          cert.status === "Completed" 
                            ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                            : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Certificates Earned", value: "3+" },
            { label: "In Progress", value: "2" },
            { label: "Learning Hours", value: "500+" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};