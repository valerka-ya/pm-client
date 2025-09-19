import { Routes, Route, Outlet } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailsPage from "@/pages/ProjectsPage/ProjectDetailsPage";
import ProjectTasksPage from "@/pages/ProjectsPage/ProjectTasksPage";
import HomePage from "@/pages/HomePage";

function ProjectsLayout() {
  return <Outlet />; // место для вложенных страниц
}

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectsLayout />}>
        <Route index element={<ProjectDetailsPage />} /> {/* /projects/:id */}
        <Route path="tasks" element={<ProjectTasksPage />} />{" "}
        {/* /projects/:id/tasks */}
      </Route>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
