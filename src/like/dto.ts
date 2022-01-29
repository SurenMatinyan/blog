import { IsUUID } from 'class-validator';

export class CreateRequest {
  @IsUUID()
  post_id: string;
}

export class CreateResponse {
  status: number;

  message: string;
}
