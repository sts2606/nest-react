import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async findAllCars() {
    return this.carModel.find();
  }

  async findOneCar(id) {
    return await this.carModel.findOne({ _id: id });
  }
}
