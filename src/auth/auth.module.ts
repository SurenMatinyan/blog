import { Module } from '@nestjs/common';
import { GuardModule } from 'src/guard/auth.module';
import { UserModule } from 'src/user/user.module';
import { userProvider } from 'src/user/user.providers';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, GuardModule],
  controllers: [AuthController],
  providers: [AuthService, userProvider]
})
export class AuthModule {}
