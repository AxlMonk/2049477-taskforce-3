import { Module } from '@nestjs/common';
import { TaskUserController } from './task-user.controller';
import { TaskUserService } from './task-user.service';

@Module({
  controllers: [TaskUserController],
  providers: [TaskUserService],
})
export class TaskUserModule {}
