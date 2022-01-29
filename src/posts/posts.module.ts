import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { postsProvider } from './posts.providers';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, postsProvider]
})
export class PostsModule {}
