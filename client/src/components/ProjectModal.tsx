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
      <DialogContent className="sm:max-w-[600px] w-[95vw] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">{project.description}</DialogDescription>
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
              className="px-2 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button 
            className="w-full sm:w-auto"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            Source Code <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}