import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Aberto a oportunidades, parcerias e projetos desafiadores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:tapparo.flavio@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Email <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/flaviotapparo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/ftapparo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={18} /> GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <p className="text-muted-foreground text-sm mt-16">
          © {new Date().getFullYear()} Flavio Tapparo. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default Contact;
