import { Module } from '@nestjs/common';
import { TaskUserController } from './task-user.controller';
import { TaskUserService } from './task-user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskUserModel, TaskUserSchema } from './task-user.model';
import { TaskUserRepository } from './task-user.repository';

@Module({
  imports: [MongooseModule.forFeature([
    { name: TaskUserModel.name, schema: TaskUserSchema }
  ])],
  controllers: [TaskUserController],
  providers: [TaskUserService, TaskUserRepository],
  exports: [TaskUserRepository]
})
export class TaskUserModule {}
