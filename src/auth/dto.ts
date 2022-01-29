import { IsEmail, IsString } from 'class-validator';

export class LoginRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class LoginResponse {
  token: string;
}

export class SignUpRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}

export class SignUpResposen {
  message: string;
  token: string;
}
