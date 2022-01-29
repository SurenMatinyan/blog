import { IsString } from 'class-validator';

export class CreateRequest {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateResponse {
  status: number;
  message: string;
}
