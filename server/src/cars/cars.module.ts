import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car, CarSchema } from './schemas/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
