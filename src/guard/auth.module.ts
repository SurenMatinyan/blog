import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { userProvider } from 'src/user/user.providers';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'asd123',
      signOptions: {
        expiresIn: `30d`,
      },
    }),
  ],
  providers: [JwtStrategy, userProvider],
  exports: [JwtModule],
})
export class GuardModule {}
