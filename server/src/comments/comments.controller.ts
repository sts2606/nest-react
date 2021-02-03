import { CommentsService } from './comments.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('comments')
export class CommentsController {
  constructor(private commentServics: CommentsService) {}

  @Post()
  create(@Body() createCommenrDto: CreateCommentDto) {
    return this.commentServics.create(createCommenrDto);
  }

  @Get(':carId')
  findByCar(@Param('carId') carId) {
    return this.commentServics.findByCar(carId);
  }
}
