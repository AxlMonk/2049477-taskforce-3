import { Entity } from '@project/util/util-types';
import {Category, Task, Comment, Post} from '@project/shared/app-types';
import {TaskStatusEnum} from "@project/shared/app-types";

export class TaskPostEntity implements Entity<TaskPostEntity>, Task {
  public id: number;
  public title: string;
  public description: string;
  public content: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public categories: Category[];
  public createdAt: Date;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity(entity: Post): void {
    this.title = entity.title;
    this.description = entity.description;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.categories = [...entity.categories];
    this.createdAt = new Date();
  }

  public toObject(): TaskPostEntity {
    return {
      ...this,
      categories: [...this.categories],
      comments: [...this.comments],
    };
  }

  address: string;
  city: string;
  comment: Comment[];
  executionPeriod: Date;
  image: string;
  price: number;
  tagSet: string;
  taskStatus: TaskStatusEnum;

}
