import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LikeService } from './like.service';
import * as dto from './dto';
import { User } from 'decorators/user';
import { JwtAuth } from 'src/guard/auth.guard';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  @UseGuards(JwtAuth)
  async create(@Body() body: dto.CreateRequest, @User() user): Promise<dto.CreateResponse> {
    return this.likeService.create(body, user.id);
  }
}
