import { Inject, Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import * as dto from './dto';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private readonly commentRepository: typeof CommentEntity,
  ) {}

  async create(
    body: dto.CreateRequest,
    user_id: string,
  ): Promise<dto.CreateResponse> {
    await this.commentRepository.create({ ...body, user_id });
    return { status: 201, message: 'created' };
  }
}
