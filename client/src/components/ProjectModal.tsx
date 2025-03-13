import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <Button onClick={() => window.open(project.liveUrl, '_blank')}>
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
            Source Code <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
