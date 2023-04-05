import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { TaskUserModule } from './task-user/task-user.module';
import { CommentUserModule } from './comment-user/comment-user.module';
import { ReviewUserModule } from './review-user/review-user.module';

@Module({
  imports: [
    AuthenticationModule,
    TaskUserModule,
    CommentUserModule,
    ReviewUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
