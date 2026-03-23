import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { Mail, Github, Linkedin, Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(82 85% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(82 85% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      {/* Content */}
      <div className="flex-1 flex items-center relative z-10 section-padding">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-heading font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-primary inline-block" />
              Engenheiro de Software Sênior
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.95] mb-6">
              Flavio<br />
              <span className="text-gradient">Tapparo</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              Full-Stack · Sistemas Embarcados · IA — Mais de 15 anos transformando requisitos complexos em arquiteturas eficientes e escaláveis.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex gap-3">
                <a href="mailto:tapparo.flavio@gmail.com" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/ftapparo" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/flaviotapparo" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="tel:+5517996053856" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                  <Phone size={18} />
                </a>
              </div>

              <span className="hidden md:inline text-muted-foreground/50">|</span>

              <p className="text-muted-foreground text-sm">
                📍 São José do Rio Preto, SP — Brasil
              </p>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-[28rem] md:w-[22rem] md:h-[32rem] lg:w-[26rem] lg:h-[36rem] rounded-2xl overflow-hidden glow border-2 border-primary/20">
                <img
                  src={profilePhoto}
                  alt="Flavio Tapparo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-[28rem] md:w-[22rem] md:h-[32rem] lg:w-[26rem] lg:h-[36rem] rounded-2xl border border-primary/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
