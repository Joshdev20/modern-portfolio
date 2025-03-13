import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown } from "lucide-react";

export function Hero() {
  const downloadResume = () => {
    // Open resume in a new tab - it will use the HTML version for better accessibility
    window.open('/Joshua_Patrick_Resume.html', '_blank');
  };

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
        <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-4">Joshua Patrick</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-8"
      >
        <p className="text-xl text-muted-foreground">
          With over 4 years of experience crafting modern web applications using MERN, PERN and MEAN stacks.
          Specializing in creating robust, scalable solutions with clean, efficient code.
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
          className="bg-primary hover:bg-primary/90"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={downloadResume}
          className="border-primary text-primary hover:bg-primary/10"
        >
          View Resume <FileDown className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 flex gap-4 justify-center items-center text-muted-foreground"
      >
        <div className="h-[1px] w-12 bg-border"></div>
        <span>4+ Years of Experience</span>
        <div className="h-[1px] w-12 bg-border"></div>
      </motion.div>
    </section>
  );
}