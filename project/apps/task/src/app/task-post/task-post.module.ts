import { Module } from "@nestjs/common";
import { TaskCategoryModule } from '../task-category/task-category.module';
import { TaskPostController } from './task-post.controller';
import { TaskPostService } from './task-post.service';
import { TaskPostRepository } from './task-post.repository';

@Module({
  imports: [TaskCategoryModule],
  controllers: [TaskPostController],
  providers: [TaskPostService, TaskPostRepository],
})
export class TaskPostModule {}
