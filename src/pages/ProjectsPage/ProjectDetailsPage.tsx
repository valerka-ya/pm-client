import { getProjectById } from "@/mocks/projects";
import { MainLayout } from "@/widgets/Layouts";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const projectData = projectId ? getProjectById(projectId) : undefined;

  return (
    <MainLayout
      headerProps={{
        title: projectData && `Projects > ${projectData.title}`,
        description: projectData?.description,
      }}
    >
      {projectData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.deadline}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          No project data found
        </div>
      )}
    </MainLayout>
  );
}
