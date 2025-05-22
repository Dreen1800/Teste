export type Priority = 'Alta' | 'Média' | 'Baixa';
export type ProjectStatus = 'Planejamento' | 'Em Andamento' | 'Pausado' | 'Concluído';
export type TaskStatus = 'Pendente' | 'Em Andamento' | 'Bloqueada' | 'Concluída';

export interface Project {
  id: string;
  name: string;
  description: string;
  priority: Priority;
  status: ProjectStatus;
  startDate: Date;
  endDate: Date;
  progress: number;
  category: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  startDate: Date;
  dueDate: Date;
  estimatedTime: number;
  dependencies?: string[];
  projectId: string;
  order: number;
  completedAt?: Date;
}