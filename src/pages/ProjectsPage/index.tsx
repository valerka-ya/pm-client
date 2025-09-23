import { mockProjects } from "@/mocks/projects";
import { MainLayout } from "@/widgets/Layouts";
import ProjectCard from "./components/ProjectCard/ProjectCard";

export default function ProjectPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard projectData={project} />
        ))}
      </div>
    </MainLayout>
  );
}
