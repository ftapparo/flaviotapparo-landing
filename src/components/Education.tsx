import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Faculdades Prominas",
    degree: "Pós-Graduação em Automação Industrial e Controladores Programáveis",
    period: "2016 — 2017",
  },
  {
    institution: "UNORP — Centro Universitário do Norte Paulista",
    degree: "Engenheiro da Computação",
    period: "2006 — 2010",
  },
  {
    institution: "Etec Philadelpho Gouvêa Netto",
    degree: "Técnico em Mecatrônica",
    period: "2003 — 2004",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
            Formação <span className="text-gradient">Acadêmica</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors"
            >
              <GraduationCap className="text-primary mb-4" size={28} />
              <p className="text-primary text-sm font-heading font-semibold mb-2">{edu.period}</p>
              <h3 className="font-heading font-bold text-lg mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
