import type { Project } from "@/entities/project/model";
import { Link } from "react-router-dom";

export default function ProjectCard(props: { projectData: Project }) {
  const { projectData } = props;

  return (
    <div
      key={projectData.project_id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {projectData.title}
        </h3>
        {projectData.is_completed ? (
          <span className="px-3 py-1 bg-success-light text-success-dark rounded-full text-sm font-medium">
            Finished
          </span>
        ) : (
          <span className="px-3 py-1 bg-primary-light text-primary-dark rounded-full text-sm font-medium">
            Active
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {projectData.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Дедлайн: {new Date(projectData.deadline).toLocaleDateString()}
        </span>
        <Link
          to={`/projects/${projectData.project_id}`}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
