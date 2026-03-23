import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Back-End",
    skills: ["C# (.NET)", "Python", "Node.js", "Go"],
  },
  {
    title: "Front-End",
    skills: ["React.js", "Next.js", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Bancos de Dados",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Elasticsearch"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Azure DevOps", "AWS", "Docker", "Linux", "Git"],
  },
  {
    title: "Mensageria",
    skills: ["RabbitMQ", "Apache Kafka"],
  },
  {
    title: "Embarcados",
    skills: ["C/C++", "FreeRTOS", "STM32 (ARM)", "I2C/SPI/UART/CAN"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            Do firmware ao cloud — uma stack completa para qualquer desafio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors group"
            >
              <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
