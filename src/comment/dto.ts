import { IsString } from 'class-validator';

export class CreateRequest {
  @IsString()
  text: string;

  @IsString()
  post_id: string;
}

export class CreateResponse {
  status: number;

  message: string;
}
