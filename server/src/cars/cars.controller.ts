import { CarsService } from './cars.service';
import { Controller, Get, Param, Request, Res } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  async getCar(@Param('id') id) {
    return await this.carsService.findOneCar(id);
  }

  @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads' });
  }
}
