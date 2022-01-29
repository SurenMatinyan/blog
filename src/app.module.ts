import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { DatabaseModule } from 'config/database.module ';
import { UserModule } from './user/user.module';
import { GuardModule } from './guard/auth.module';
import { AuthModule } from './auth/auth.module'
 
@Module({
  imports: [
    PostsModule,
    CommentModule,
    LikeModule,
    DatabaseModule,
    UserModule,
    GuardModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
