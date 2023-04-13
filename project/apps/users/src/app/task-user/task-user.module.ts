import { Module } from '@nestjs/common';
import { TaskUserController } from './task-user.controller';
import { TaskUserService } from './task-user.service';
import { TaskUserMemoryRepository } from './task-user-memory.repository';

@Module({
  controllers: [TaskUserController],
  providers: [TaskUserService, TaskUserMemoryRepository],
  exports: [TaskUserMemoryRepository]
})
export class TaskUserModule {}
