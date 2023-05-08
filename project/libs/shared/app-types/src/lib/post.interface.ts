import {Category, Comment, TaskStatusEnum} from "@project/shared/app-types";

export interface Post {
  userId: string;
  id?: number;
  title: string;
  description: string;
  categories: Category[];
  comment: Comment[];
  price: number;
  executionPeriod: Date;
  image: string;
  address: string;
  tagSet: string;
  city: string;
  taskStatus: TaskStatusEnum;
  createdAt?: Date;
  publishAt?: Date;
}
