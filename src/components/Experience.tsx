import { motion } from "framer-motion";

const experiences = [
  {
    company: "Grupo Sifra",
    role: "Desenvolvedor Sênior",
    period: "Abr 2024 — Presente",
    description: "Desenvolvimento de sistemas distribuídos com C# .NET e Python. Arquitetura de eventos com RabbitMQ, Clean Architecture, DDD e SOLID.",
  },
  {
    company: "UNORTE",
    role: "Professor Universitário",
    period: "Jan 2022 — Jul 2025",
    description: "Engenharia Elétrica e da Computação — Instrumentação Industrial, Sistemas Microcontrolados, Projeto Aplicativo.",
  },
  {
    company: "YAK — Tratores Elétricos",
    role: "Engenheiro de Software Sênior",
    period: "Jun 2022 — Abr 2024",
    description: "YAK Cloud: plataforma de gestão de frotas. Back-end Node.js/Python, front-end React/Next.js, deploy AWS.",
  },
  {
    company: "AGTech Agrotecnologia",
    role: "Pesquisador Engenheiro Eletrônico",
    period: "Jun 2018 — Jan 2021",
    description: "Projetos eletrônicos para agricultura de precisão e indústria 4.0 com tecnologia embarcada.",
  },
  {
    company: "UNORP",
    role: "Professor Universitário",
    period: "Jan 2015 — Dez 2021",
    description: "Microprocessadores, Circuitos Digitais, Redes, Segurança — pesquisador no Laboratório de Engenharia Robótica.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            +15 anos de trajetória entre software, hardware e academia.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5px]" />

                <p className="text-primary text-sm font-heading font-semibold tracking-wide mb-1">
                  {exp.period}
                </p>
                <h3 className="text-xl font-heading font-bold mb-1">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-sm font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
