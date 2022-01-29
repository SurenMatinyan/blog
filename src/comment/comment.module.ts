import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { commentProvider } from './comment.provider';
import { CommentService } from './comment.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, commentProvider]
})
export class CommentModule {}
