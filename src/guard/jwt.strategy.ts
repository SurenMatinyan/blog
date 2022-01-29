import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject("USER_REPOSITORY") private readonly userRepository: typeof UserEntity) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'asd123',
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    return await this.userRepository.findByPk(payload.id);
  }
}
