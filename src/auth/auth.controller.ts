import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as dto from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: dto.LoginRequest): Promise<dto.LoginResponse> {
    return this.authService.login(body);
  }

  @Post('signup')
  async signup(@Body() body: dto.SignUpRequest): Promise<dto.SignUpResposen> {
    return this.authService.signUp(body);
  }
}
