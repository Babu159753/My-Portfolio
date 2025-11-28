import { Github, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gradient">Xalimov Mustafo</h3>
            <p className="text-muted-foreground text-sm">
              Cybersecurity & Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:mustafoxalimov12@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                mustafoxalimov12@gmail.com
              </a>
              <a 
                href="tel:+998915449469" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +998 91 544 94 69
              </a>
              <a 
                href="https://github.com/Joffreyg9173" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                @Joffreyg9173
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Xalimov Mustafo. All rights reserved.</p>
          <p className="mt-2">Built with precision and passion</p>
        </div>
      </div>
    </footer>
  );
};