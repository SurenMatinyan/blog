import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProvider } from './user.providers';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, userProvider]
})
export class UserModule {}
