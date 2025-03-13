import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace these with actual
        'YOUR_TEMPLATE_ID', // EmailJS credentials after signing up
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_email: 'joshuaoluchukwu215@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
  }

  return (
    <section className="py-20" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg">Got a project in mind? Let's discuss how I can help bring your ideas to life.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <a 
              href="mailto:joshuaoluchukwu215@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              joshuaoluchukwu215@gmail.com
            </a>
            <a 
              href="https://github.com/Joshdev20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              github.com/Joshdev20
            </a>
          </div>

          <div className="mt-8 p-6 bg-card rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Why Work With Me?</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ 4+ years of full-stack development experience</li>
              <li>✓ Strong expertise in MERN, PERN, and MEAN stacks</li>
              <li>✓ Focus on clean, maintainable code</li>
              <li>✓ Proven track record of successful project delivery</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg shadow-lg"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project" 
                        {...field} 
                        className="min-h-[150px] bg-background"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}