import { Module } from '@nestjs/common';
import { ReviewUserController } from './review-user.controller';
import { ReviewUserService } from './review-user.service';

@Module({
  controllers: [ReviewUserController],
  providers: [ReviewUserService],
})
export class ReviewUserModule {}
