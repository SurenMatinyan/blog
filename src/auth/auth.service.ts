import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import * as dto from './dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof UserEntity,
    private readonly jwtService: JwtService,
  ) {}

  async login(body: dto.LoginRequest): Promise<dto.LoginResponse> {
    const user = await this.userRepository.findOne({
      where: { email: body.email },
    });
    if (!user) {
      throw new Error('Email or Password incorrect');
    }
    const passwordEquals = await bcrypt.compare(body.password, user.password);
    if (!passwordEquals) {
      throw new Error('Email or Password incorrect');
    }
    return { token: this.genereteToken({ email: user.email, id: user.id }) };
  }

  async signUp(body: dto.SignUpRequest): Promise<dto.SignUpResposen> {
    const hash = await bcrypt.hash(body.password, 10);
    const check = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });
    if (check) {
      throw new Error('Email already exists');
    }
    const user = await this.userRepository.create({ ...body, password: hash });
    return {
      message: 'Created',
      token: this.genereteToken({ email: user.email, id: user.id }),
    };
  }

  genereteToken({ email, id }: { email: string; id: string }) {
    return this.jwtService.sign({ email, id });
  }
}
