import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Shield, Code2 } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 glow-effect">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Education</h3>
                      <p className="text-muted-foreground">
                        Samarkand International University of Technology (SIUT)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        School of Computing — Cybersecurity
                      </p>
                      <p className="text-sm text-primary">2nd Year, 3rd Semester</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Specialization</h3>
                      <p className="text-muted-foreground">
                        Cybersecurity & Full-Stack Development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Approach</h3>
                      <p className="text-muted-foreground">
                        Learn fast, think critically, execute professionally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground">
              I am <span className="text-primary font-semibold">Xalimov Mustafo</span> — a Cybersecurity and Full-Stack Developer studying at the Samarkand International University of Technology (SIUT), School of Computing, Cybersecurity faculty.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I work with modern backend and frontend technologies, build secure architectures, and approach every project with discipline and seriousness. My mindset is simple: <span className="text-foreground font-medium">learn fast, think critically, and execute professionally</span>.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I combine technical development with an interest in psychology and philosophy, which helps me build systems that are both <span className="text-primary font-medium">secure and human-focused</span>.
            </p>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};