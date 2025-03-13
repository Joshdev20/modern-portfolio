import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown } from "lucide-react";

export function Hero() {
  const downloadResume = () => {
    window.open('/Joshua_Patrick_Resume.html', '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-8 px-4 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Full Stack Developer
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4">Joshua Patrick</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-8 px-4 text-center"
      >
        <p className="text-lg sm:text-xl text-muted-foreground">
          With over 4 years of experience crafting modern web applications using MERN, PERN and MEAN stacks.
          Specializing in creating robust, scalable solutions with clean, efficient code.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none px-4"
      >
        <Button
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={downloadResume}
          className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
        >
          View Resume <FileDown className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 sm:mt-12 flex gap-4 justify-center items-center text-muted-foreground px-4"
      >
        <div className="h-[1px] w-8 sm:w-12 bg-border"></div>
        <span className="text-sm sm:text-base">4+ Years of Experience</span>
        <div className="h-[1px] w-8 sm:w-12 bg-border"></div>
      </motion.div>
    </section>
  );
}