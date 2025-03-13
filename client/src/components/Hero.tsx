import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Full Stack Developer
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-8"
      >
        <p className="text-xl text-muted-foreground">
          I craft modern web applications using MERN, PERN and MEAN stacks.
          Specializing in creating robust and scalable solutions with clean, efficient code.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Button
          size="lg"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Download Resume <FileDown className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
}
