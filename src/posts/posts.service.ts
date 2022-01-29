import { Inject, Injectable } from '@nestjs/common';
import { PostsEntity } from './posts.entity';
import * as dto from './dto';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private readonly postsRepository: typeof PostsEntity,
  ) {}

  async create(
    body: dto.CreateRequest,
    file: Express.Multer.File,
  ): Promise<dto.CreateResponse> {
    await this.postsRepository.create({ ...body, image: file.filename });
    return { message: 'Created', status: 201 };
  }
}
