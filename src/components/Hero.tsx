import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(82 85% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(82 85% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            Engenheiro de Software Sênior
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-6">
            Flavio<br />
            <span className="text-gradient">Tapparo</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-8">
            Full-Stack · Sistemas Embarcados · IA — Mais de 15 anos transformando requisitos complexos em arquiteturas eficientes e escaláveis.
          </p>

          <div className="flex gap-4 mb-8">
            <a href="mailto:tapparo.flavio@gmail.com" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/ftapparo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/flaviotapparo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="tel:+5517996053856" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            📍 São José do Rio Preto, SP — Brasil
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden glow border-2 border-primary/20">
              <img
                src={profilePhoto}
                alt="Flavio Tapparo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border border-primary/30 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
