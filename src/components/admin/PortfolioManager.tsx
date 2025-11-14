import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  category: string;
  technologies: string[];
  live_url: string | null;
}

const PortfolioManager = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    category: "",
    technologies: "",
    live_url: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      title: formData.title,
      description: formData.description,
      image_url: formData.image_url || null,
      category: formData.category,
      technologies: formData.technologies.split(",").map((t) => t.trim()),
      live_url: formData.live_url || null,
    };

    try {
      if (editingProject) {
        const { error } = await supabase
          .from("portfolio_projects")
          .update(projectData)
          .eq("id", editingProject.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("portfolio_projects")
          .insert([projectData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Project added successfully",
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchProjects();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (project: PortfolioProject) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image_url: project.image_url || "",
      category: project.category,
      technologies: project.technologies.join(", "),
      live_url: project.live_url || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const { error } = await supabase
        .from("portfolio_projects")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project deleted successfully",
      });

      fetchProjects();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image_url: "",
      category: "",
      technologies: "",
      live_url: "",
    });
    setEditingProject(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Portfolio Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Websites">Websites</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Mobile Apps">Mobile Apps</SelectItem>
                    <SelectItem value="Branding">Branding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                <Input
                  id="technologies"
                  value={formData.technologies}
                  onChange={(e) =>
                    setFormData({ ...formData, technologies: e.target.value })
                  }
                  placeholder="React, Node.js, MongoDB"
                  required
                />
              </div>

              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div>
                <Label htmlFor="live_url">Live URL</Label>
                <Input
                  id="live_url"
                  type="url"
                  value={formData.live_url}
                  onChange={(e) =>
                    setFormData({ ...formData, live_url: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-gradient-primary flex-1">
                  {editingProject ? "Update" : "Add"} Project
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-xl border border-border p-4"
          >
            {project.image_url && (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}
            <h3 className="font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {project.description}
            </p>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-muted rounded text-xs">
                {project.category}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(project)}
              >
                <Pencil className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDelete(project.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No projects yet. Add your first project to get started!
        </div>
      )}
    </div>
  );
};

export default PortfolioManager;
