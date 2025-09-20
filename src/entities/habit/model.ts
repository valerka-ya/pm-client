export interface Habit {
  habit_id: string;
  title: string;
  description: string;
  project_id: string;
  is_archived: boolean;
  frequency_unit: "day" | "week" | "month";
  frequency_count: number;
  _created_at: string;
  _updated_at: string;
}

export interface HabitLogs {
  id: string;
  habit_id: Habit["habit_id"];
  comment: string;
  is_completed: boolean;
  log_date: string;
  _created_at: string;
  _updated_at: string;
}

export interface HabitTagDictionary {
  tag_id: string;
  title: string;
  _created_at: string;
  _updated_at: string;
}

export interface HabitTags {
  tag_id: HabitTagDictionary["tag_id"];
  habit_id: Habit["habit_id"];
  _created_at: string;
  _updated_at: string;
}
