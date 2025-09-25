import { getProjectById } from "@/mocks/projects";
import { mockTasks } from "@/mocks/tasks";
import { MainLayout } from "@/widgets/Layouts";
import { useParams } from "react-router-dom";

function formatDate(value?: string) {
  if (!value) return "-";
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return value;
  }
}

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const projectData = projectId ? getProjectById(projectId) : undefined;
  const projectTasks = projectData
    ? mockTasks.filter((t) => t.project_id === projectData.project_id)
    : [];

  return (
    <MainLayout
      headerProps={{
        title: projectData && `Projects > ${projectData.title}`,
        description: projectData?.description,
      }}
    >
      {projectData ? (
        <div className="space-y-8 flex">
          <section className="basis-3/4 space-y-4">
            <h2 className="text-lg font-semibold">Project tasks</h2>
            <div className="overflow-x-auto rounded-lg border bg-white dark:border-gray-700 dark:bg-gray-900">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <tr>
                    <th className="px-4 py-3 font-medium">Task</th>
                    <th className="px-4 py-3 font-medium">Description</th>
                    <th className="px-4 py-3 font-medium">Deadline</th>
                    <th className="px-4 py-3 font-medium">Start</th>
                    <th className="px-4 py-3 font-medium">End</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Tags</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 dark:text-gray-100">
                  {projectTasks.length === 0 ? (
                    <tr>
                      <td
                        className="px-4 py-4 text-gray-500 dark:text-gray-400"
                        colSpan={8}
                      >
                        No tasks for this project
                      </td>
                    </tr>
                  ) : (
                    projectTasks.map((task) => (
                      <tr
                        key={task.task_id}
                        className="border-t dark:border-gray-700"
                      >
                        <td className="px-4 py-3 font-medium">{task.title}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-[28rem] truncate">
                          {task.description}
                        </td>
                        <td className="px-4 py-3">
                          {formatDate(task.deadline)}
                        </td>
                        <td className="px-4 py-3">
                          {formatDate(task.start_date)}
                        </td>
                        <td className="px-4 py-3">
                          {formatDate(task.end_date)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={
                              task.is_completed
                                ? "inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-200 dark:bg-green-900 dark:text-green-300 dark:ring-green-700"
                                : "inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:ring-yellow-700"
                            }
                          >
                            {task.is_completed ? "Done" : "In progress"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {task.tags?.map((tag) => (
                              <span
                                key={tag.tag_id}
                                className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 ring-1 ring-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600"
                              >
                                {tag.title}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {formatDate(task._updated_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
          <section className="basis-1/4 px-6 mt-11">
            <div className="rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Project ID
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {projectData.project_id}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Status
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {projectData.is_completed ? "Completed" : "In progress"}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Deadline
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData.deadline)}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Start
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData.start_date)}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Planned end
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData.end_date)}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Completed at
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData.completed_date)}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Created
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData._created_at)}
              </div>
              <div className="my-1 border-t border-gray-500/50"></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Updated
              </div>
              <div className="mt-1 text-base font-medium dark:text-gray-100">
                {formatDate(projectData._updated_at)}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          No project data found
        </div>
      )}
    </MainLayout>
  );
}
