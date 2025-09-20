export interface Task {
  task_id: string;
  title: string;
  description: string;
  project_id: string;
  deadline: string;
  start_date: string;
  end_date: string;
  completed_date: string;
  is_completed: boolean;
  parent_id: null | string;
  _created_at: string;
  _updated_at: string;
}

export interface TaskTagDictionary {
  tag_id: string;
  title: string;
  _created_at: string;
  _updated_at: string;
}

export interface TaskTags {
  tag_id: TaskTagDictionary["tag_id"];
  task_id: Task["task_id"];
  _created_at: string;
  _updated_at: string;
}
