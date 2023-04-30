import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { TaskUserModule } from './task-user/task-user.module';
import { CommentUserModule } from './comment-user/comment-user.module';
import { ReviewUserModule } from './review-user/review-user.module';
import { ConfigUsersModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthenticationModule,
    TaskUserModule,
    CommentUserModule,
    ReviewUserModule,
    ConfigUsersModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )],
  controllers: [],
  providers: [],
})
export class AppModule {}
