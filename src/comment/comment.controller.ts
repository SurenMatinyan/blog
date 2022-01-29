import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from 'decorators/user';
import { JwtAuth } from 'src/guard/auth.guard';
import { CommentService } from './comment.service';
import * as dto from './dto'

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Post()
    @UseGuards(JwtAuth)
    async create(@Body() body: dto.CreateRequest, @User() user): Promise<dto.CreateResponse>{
        return this.commentService.create(body, user.id)
    }
}
