import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import projectComplaint from "@/assets/project-complaint.png";
import projectJefi from "@/assets/project-jefi.png";
import projectTelegram from "@/assets/project-telegram.png";
import projectAiMonitor from "@/assets/project-ai-monitor.png";

const projects = [
  {
    id: 1,
    title: "Complaint Management System",
    description: "A web-based platform for university students to submit, track, and communicate about complaints in real time.",
    image: projectComplaint,
    tags: ["React", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "Clear role-based access (Student/Admin/Staff)",
      "Real-time status tracking and priority levels",
      "Admin panel inspired by modern SaaS dashboards",
      "Built with professional software engineering principles"
    ],
    fullDescription: "A comprehensive web application designed to streamline complaint management in university environments. Features include structured messaging between students and administrators, complaint categorization, status tracking, and a modern dashboard interface. The system demonstrates clean architecture, secure authentication, and responsive design."
  },
  {
    id: 2,
    title: "JeFi - Hackathon Project",
    description: "A real-world IT solution demonstrating problem-solving approach with clear value proposition.",
    image: projectJefi,
    tags: ["React", "Next.js", "TypeScript", "UI/UX"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "Problem → Solution pathway visualization",
      "Team collaboration structure",
      "Interactive user interface",
      "Hackathon-winning presentation"
    ],
    fullDescription: "Developed for a competitive hackathon environment, JeFi showcases a systematic approach to problem-solving through technology. The project emphasizes clarity, usability, and demonstrable value, with a focus on presenting complex ideas in an accessible format."
  },
  {
    id: 3,
    title: "Telegram Bot - University Schedule",
    description: "Fully deployed bot providing schedule lookups for university students with clean automation.",
    image: projectTelegram,
    tags: ["Python", "Telegram API", "Railway", "Automation"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "Automated deployment via Railway",
      "Environment-managed configuration",
      "Real-time schedule queries",
      "Clean code structure and documentation"
    ],
    fullDescription: "An intelligent Telegram bot that serves as a personal assistant for students, providing instant access to class schedules, room locations, and academic calendar information. The bot features natural language processing, error handling, and seamless deployment infrastructure."
  },
  {
    id: 4,
    title: "AI Network Monitoring System",
    description: "Advanced monitoring system detecting suspicious patterns and anomaly events for critical infrastructure.",
    image: projectAiMonitor,
    tags: ["Python", "Wireshark", "Machine Learning", "Security"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "ML-powered anomaly detection",
      "Real-time threat analysis",
      "Designed for banks and critical infrastructure",
      "Financial benefit analysis and ROI calculation"
    ],
    fullDescription: "A sophisticated network security solution leveraging machine learning to identify unusual traffic patterns and potential threats. The system analyzes packet data in real-time, identifies deviations from normal behavior, and provides actionable insights for security teams. Includes comprehensive documentation addressing implementation concerns and data privacy considerations."
  },
  {
    id: 5,
    title: "Student Marks Management",
    description: "Desktop application for managing student records with admin controls and dark theme UI.",
    image: projectComplaint, // Reusing image for now
    tags: ["Python", "KivyMD", "MySQL", "Desktop"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "Admin panel with authentication",
      "Editable marks and ratings system",
      "Search and filter functionality",
      "Modern dark theme interface"
    ],
    fullDescription: "A complete student information management system built with KivyMD for cross-platform desktop deployment. Features include secure admin authentication, CRUD operations for student records, grade calculation, and report generation. The application showcases clean database design and intuitive user experience."
  },
  {
    id: 6,
    title: "The Line",
    description: "A conceptual design-heavy project demonstrating strong UI/UX and technical discipline.",
    image: projectJefi, // Reusing image for now
    tags: ["UI/UX", "Design", "React", "Animation"],
    github: "https://github.com/Joffreyg9173",
    highlights: [
      "Strong visual design language",
      "Conceptual and innovative approach",
      "Technical implementation excellence",
      "User experience focused"
    ],
    fullDescription: "An experimental project exploring the boundaries of web design and user interaction. The Line combines conceptual thinking with practical implementation, featuring smooth animations, innovative layouts, and attention to micro-interactions that enhance the overall user experience."
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-card/30" ref={ref}>
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Real-world applications demonstrating technical expertise and problem-solving ability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 border-primary/50 hover:bg-primary/10"
                        >
                          Learn More
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary/50 hover:bg-primary/10"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <p className="text-foreground leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div>
                <h4 className="font-semibold text-lg mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};