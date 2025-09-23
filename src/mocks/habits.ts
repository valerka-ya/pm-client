import type { Habit, HabitLogs } from "@/entities/habit/model";

export const mockHabits: Habit[] = [
  {
    habit_id: "habit_001",
    title: "Утренняя зарядка",
    description: "10–15 минут растяжки и лёгкой разминки перед началом дня.",
    project_id: "proj_009", // можно привязать к Team Collaboration Tool
    is_archived: false,
    frequency_unit: "day",
    frequency_count: 1,
    tags: [
      { tag_id: "tag_001", title: "здоровье" },
      { tag_id: "tag_002", title: "энергия" },
    ],
    _created_at: "2025-09-01T07:00:00Z",
    _updated_at: "2025-09-10T09:30:00Z",
  },
  {
    habit_id: "habit_002",
    title: "Чтение книги",
    description: "Минимум 20 минут чтения нон-фикшн литературы.",
    project_id: "proj_007", // Recruitment Platform
    is_archived: false,
    frequency_unit: "day",
    frequency_count: 1,
    tags: [
      { tag_id: "tag_003", title: "саморазвитие" },
      { tag_id: "tag_004", title: "фокус" },
    ],
    _created_at: "2025-09-03T10:15:00Z",
    _updated_at: "2025-09-12T18:20:00Z",
  },
  {
    habit_id: "habit_003",
    title: "Спортзал",
    description: "Кардио + силовые тренировки в зале.",
    project_id: "proj_006", // AI Chatbot Integration
    is_archived: false,
    frequency_unit: "week",
    frequency_count: 3,
    tags: [
      { tag_id: "tag_001", title: "здоровье" },
      { tag_id: "tag_005", title: "дисциплина" },
    ],
    _created_at: "2025-08-20T12:00:00Z",
    _updated_at: "2025-09-14T20:40:00Z",
  },
  {
    habit_id: "habit_004",
    title: "Ведение дневника",
    description: "Записывать ключевые мысли и результаты дня.",
    project_id: "proj_005", // Customer Feedback Portal
    is_archived: false,
    frequency_unit: "month",
    frequency_count: 12, // типа раз в 2–3 дня (или можно по другому подстроить)
    tags: [
      { tag_id: "tag_004", title: "фокус" },
      { tag_id: "tag_006", title: "осознанность" },
    ],
    _created_at: "2025-09-05T08:30:00Z",
    _updated_at: "2025-09-15T21:15:00Z",
  },
];

export const mockHabitLogs: HabitLogs[] = [
  // --- habit_001: Утренняя зарядка ---
  {
    id: "log_001",
    habit_id: "habit_001",
    comment: "Легкая разминка, всё ок",
    is_completed: true,
    log_date: "2025-09-15T07:15:00Z",
    _created_at: "2025-09-15T07:20:00Z",
    _updated_at: "2025-09-15T07:20:00Z",
  },
  {
    id: "log_002",
    habit_id: "habit_001",
    comment: "Пропустила утро, сделаю вечером",
    is_completed: false,
    log_date: "2025-09-16T07:00:00Z",
    _created_at: "2025-09-16T07:10:00Z",
    _updated_at: "2025-09-16T07:10:00Z",
  },
  {
    id: "log_003",
    habit_id: "habit_001",
    comment: "Зарядка с мужем, супер!",
    is_completed: true,
    log_date: "2025-09-17T07:15:00Z",
    _created_at: "2025-09-17T07:20:00Z",
    _updated_at: "2025-09-17T07:20:00Z",
  },

  // --- habit_002: Чтение книги ---
  {
    id: "log_004",
    habit_id: "habit_002",
    comment: "Прочитала 15 страниц",
    is_completed: true,
    log_date: "2025-09-15T21:00:00Z",
    _created_at: "2025-09-15T21:05:00Z",
    _updated_at: "2025-09-15T21:05:00Z",
  },
  {
    id: "log_005",
    habit_id: "habit_002",
    comment: "Не успела, буду завтра",
    is_completed: false,
    log_date: "2025-09-16T21:00:00Z",
    _created_at: "2025-09-16T21:05:00Z",
    _updated_at: "2025-09-16T21:05:00Z",
  },
  {
    id: "log_006",
    habit_id: "habit_002",
    comment: "Прочитала главу 3",
    is_completed: true,
    log_date: "2025-09-17T21:00:00Z",
    _created_at: "2025-09-17T21:05:00Z",
    _updated_at: "2025-09-17T21:05:00Z",
  },

  // --- habit_003: Спортзал ---
  {
    id: "log_007",
    habit_id: "habit_003",
    comment: "Кардио + силовые, 45 мин",
    is_completed: true,
    log_date: "2025-09-15T18:30:00Z",
    _created_at: "2025-09-15T18:35:00Z",
    _updated_at: "2025-09-15T18:35:00Z",
  },
  {
    id: "log_008",
    habit_id: "habit_003",
    comment: "Пропустила, устала",
    is_completed: false,
    log_date: "2025-09-17T18:30:00Z",
    _created_at: "2025-09-17T18:35:00Z",
    _updated_at: "2025-09-17T18:35:00Z",
  },

  // --- habit_004: Ведение дневника ---
  {
    id: "log_009",
    habit_id: "habit_004",
    comment: "Записала мысли за день",
    is_completed: true,
    log_date: "2025-09-15T22:00:00Z",
    _created_at: "2025-09-15T22:05:00Z",
    _updated_at: "2025-09-15T22:05:00Z",
  },
  {
    id: "log_010",
    habit_id: "habit_004",
    comment: "Пропустила, записала только вечером",
    is_completed: false,
    log_date: "2025-09-16T22:00:00Z",
    _created_at: "2025-09-16T22:05:00Z",
    _updated_at: "2025-09-16T22:05:00Z",
  },
];
