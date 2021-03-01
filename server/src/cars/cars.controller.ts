import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/createCommentDto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  async getCar(@Param('id') id: ObjectId) {
    return await this.carsService.findOneCar(id);
  }

  @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads' });
  }

  @Post('/comment')
  async addComment(@Body() createCommentDto: CreateCommentDto) {
    return this.carsService.addComment(createCommentDto);
  }
}
