import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "joshuaoluchukwu215@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please try selecting and copying the email manually.",
      });
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg">Ready to discuss your project? Get in touch and let's create something amazing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 text-left h-auto py-4 px-6"
                  onClick={() => window.location.href = `mailto:${email}`}
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="text-sm">{email}</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 text-left h-auto py-4 px-6"
                  onClick={copyEmail}
                >
                  {copied ? <CheckCheck className="h-5 w-5 shrink-0 text-green-500" /> : <Copy className="h-5 w-5 shrink-0" />}
                  <span className="text-sm">Copy Email Address</span>
                </Button>
                <a 
                  href="https://github.com/Joshdev20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 text-left h-auto py-4 px-6"
                  >
                    <Github className="h-5 w-5 shrink-0" />
                    <span className="text-sm">github.com/Joshdev20</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Why Work With Me?</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>4+ years of full-stack development experience with modern web technologies</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Expertise in MERN, PERN, and MEAN stacks for scalable applications</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Focus on clean, maintainable code and optimal performance</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Strong problem-solving skills and attention to detail</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a specific project in mind or just want to explore possibilities, 
            I'm here to help turn your ideas into reality.
          </p>

          <div className="space-y-6">
            <h4 className="text-lg font-medium">What you can expect:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">1.</span>
                <span>Quick response within 24 hours</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">2.</span>
                <span>Professional consultation about your project</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">3.</span>
                <span>Clear communication and project timeline</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">4.</span>
                <span>Detailed project proposal and cost estimation</span>
              </li>
            </ul>

            <Button 
              className="w-full mt-8"
              size="lg"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              Send Me an Email
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}