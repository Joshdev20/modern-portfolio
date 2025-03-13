import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiTypescript, SiExpress, SiAngular, SiMysql, SiPhp, SiPython } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiExpress, name: "Express" },
  { icon: SiAngular, name: "Angular" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiPython, name: "Python" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section className="py-12 sm:py-20 px-4" id="skills">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground">Technologies I work with</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 max-w-6xl mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-card hover:bg-accent transition-colors"
          >
            <skill.icon className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-primary" />
            <span className="text-sm sm:text-base font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}