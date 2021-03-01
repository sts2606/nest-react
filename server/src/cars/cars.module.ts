import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car, CarSchema } from './schemas/car.schema';
import { Comment, CommentSchema } from 'src/cars/schemas/comment.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
