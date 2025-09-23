import type { Project } from "@/entities/project/model";

export const mockProjects: Project[] = [
  {
    project_id: "proj_001",
    title: "Redesign Landing Page",
    description: "Создание нового UI/UX для маркетинговой страницы продукта.",
    deadline: "2025-10-15T23:59:59Z",
    start_date: "2025-09-01T09:00:00Z",
    end_date: "2025-10-15T23:59:59Z",
    completed_date: "",
    is_completed: false,
    _created_at: "2025-09-01T09:05:00Z",
    _updated_at: "2025-09-12T14:20:00Z",
  },
  {
    project_id: "proj_002",
    title: "Mobile App MVP",
    description:
      "Разработка базового функционала мобильного приложения для iOS и Android.",
    deadline: "2025-12-01T23:59:59Z",
    start_date: "2025-09-10T10:00:00Z",
    end_date: "2025-12-01T23:59:59Z",
    completed_date: "",
    is_completed: false,
    _created_at: "2025-09-10T10:15:00Z",
    _updated_at: "2025-09-17T16:30:00Z",
  },
  {
    project_id: "proj_003",
    title: "Internal Dashboard",
    description: "Админ-панель для управления пользователями и контентом.",
    deadline: "2025-09-30T23:59:59Z",
    start_date: "2025-08-20T09:30:00Z",
    end_date: "2025-09-30T23:59:59Z",
    completed_date: "2025-09-14T18:00:00Z",
    is_completed: true,
    _created_at: "2025-08-20T09:35:00Z",
    _updated_at: "2025-09-14T18:05:00Z",
  },
  {
    project_id: "proj_004",
    title: "Marketing Campaign Q4",
    description:
      "Подготовка и запуск digital-кампании для привлечения новых клиентов.",
    deadline: "2025-11-05T23:59:59Z",
    start_date: "2025-09-15T09:00:00Z",
    end_date: "2025-11-05T23:59:59Z",
    completed_date: "",
    is_completed: false,
    _created_at: "2025-09-15T09:10:00Z",
    _updated_at: "2025-09-16T15:45:00Z",
  },
  {
    project_id: "proj_005",
    title: "Customer Feedback Portal",
    description: "Веб-приложение для сбора и анализа отзывов клиентов.",
    deadline: "2025-09-10T23:59:59Z",
    start_date: "2025-07-15T09:00:00Z",
    end_date: "2025-09-10T23:59:59Z",
    completed_date: "",
    is_completed: false, // ❌ просрочен
    _created_at: "2025-07-15T09:10:00Z",
    _updated_at: "2025-09-11T08:30:00Z",
  },
  {
    project_id: "proj_006",
    title: "AI Chatbot Integration",
    description: "Интеграция чат-бота для автоматизации клиентской поддержки.",
    deadline: "2025-10-01T23:59:59Z",
    start_date: "2025-08-01T10:00:00Z",
    end_date: "2025-10-01T23:59:59Z",
    completed_date: "",
    is_completed: false,
    _created_at: "2025-08-01T10:05:00Z",
    _updated_at: "2025-09-15T12:45:00Z",
  },
  {
    project_id: "proj_007",
    title: "Recruitment Platform",
    description: "Платформа для найма сотрудников с системой рекомендаций.",
    deadline: "2025-11-20T23:59:59Z",
    start_date: "2025-09-05T09:00:00Z",
    end_date: "2025-11-20T23:59:59Z",
    completed_date: "",
    is_completed: false,
    _created_at: "2025-09-05T09:15:00Z",
    _updated_at: "2025-09-17T14:00:00Z",
  },
  {
    project_id: "proj_008",
    title: "E-learning Platform Upgrade",
    description: "Добавление модулей для видеоуроков и интерактивных тестов.",
    deadline: "2025-09-05T23:59:59Z",
    start_date: "2025-07-20T09:30:00Z",
    end_date: "2025-09-05T23:59:59Z",
    completed_date: "2025-09-04T20:00:00Z",
    is_completed: true, // ✅ завершён вовремя
    _created_at: "2025-07-20T09:35:00Z",
    _updated_at: "2025-09-04T20:05:00Z",
  },
  {
    project_id: "proj_009",
    title: "Team Collaboration Tool",
    description:
      "Создание приложения для совместной работы и управления задачами.",
    deadline: "2025-12-31T23:59:59Z",
    start_date: "2025-09-12T09:00:00Z",
    end_date: "2025-12-31T23:59:59Z",
    completed_date: "",
    is_completed: false, // долгосрочный, ещё в работе
    _created_at: "2025-09-12T09:05:00Z",
    _updated_at: "2025-09-16T11:20:00Z",
  },
];

export function getProjectById(project_id: string) {
  return mockProjects.find((el) => el.project_id === project_id);
}
