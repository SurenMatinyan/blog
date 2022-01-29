import { Inject, Injectable } from '@nestjs/common';
import * as dto from './dto';
import { LikeEntity } from './like.entity';

@Injectable()
export class LikeService {
  constructor(
    @Inject('LIKE_REPOSITORY')
    private readonly likeRepository: typeof LikeEntity,
  ) {}

  async create(
    body: dto.CreateRequest,
    user_id: string,
  ): Promise<dto.CreateResponse> {
    await this.likeRepository.create({ ...body, user_id });
    return { status: 201, message: 'Created' };
  }
}
