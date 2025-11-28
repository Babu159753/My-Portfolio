import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Shield, Globe, Database, Terminal, GitBranch,
  FileCode, Cpu, Lock, Network
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "C"],
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Cybersecurity Tools",
    icon: Shield,
    skills: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "OWASP Top-10", "Packet Tracer"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "REST APIs", "JSON", "Docker (basic)"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "General Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux/Windows", "Railway", "Vercel"],
    color: "from-indigo-500/20 to-purple-500/20"
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building secure, scalable, and modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 glow-effect">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg glow-effect group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-muted text-sm rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Lock, label: "Security-First Mindset", value: "Always" },
            { icon: Network, label: "System Architecture", value: "Strong" },
            { icon: GitBranch, label: "Version Control", value: "Expert" },
            { icon: Cpu, label: "Problem Solving", value: "Advanced" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};