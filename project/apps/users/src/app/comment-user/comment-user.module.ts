import { Module } from '@nestjs/common';
import { CommentUserController } from './comment-user.controller';
import { CommentUserService } from './comment-user.service';

@Module({
  controllers: [CommentUserController],
  providers: [CommentUserService],
})
export class CommentUserModule {}
