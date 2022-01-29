import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateFileInterceptor } from 'src/interceptor/file.upload';
import { PostsService } from './posts.service';
import * as dto from './dto';
import { JwtAuth } from 'src/guard/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuth)
  @UseInterceptors(CreateFileInterceptor('image'))
  async create(
    @Body() body: dto.CreateRequest,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<dto.CreateResponse> {
    return this.postsService.create(body, file);
  }
}
