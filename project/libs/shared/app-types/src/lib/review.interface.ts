import { ExecutorRatingEnum } from "./executor-rating.enum";

export interface Review {
  _taskId?: string;
  text: string;
  executorRating: ExecutorRatingEnum;
}
