import { TaskStatusEnum } from "./task-status.enum";

export interface Task {
  _taskId?: string;
  header: string;
  detailedTaskDescription: string;
  taskCategory: string;
  price: number;
  executionPeriod: Date;
  image: string;
  address: string;
  tagSet: string;
  city: string;
  taskStatus: TaskStatusEnum;
}
