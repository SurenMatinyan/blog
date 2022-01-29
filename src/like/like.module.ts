import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { likeProvider } from './like.providers';
import { LikeService } from './like.service';

@Module({
  controllers: [LikeController],
  providers: [LikeService, likeProvider]
})
export class LikeModule {}
