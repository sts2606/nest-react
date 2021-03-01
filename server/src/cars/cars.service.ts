import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { CreateCommentDto } from './dto/createCommentDto';
import { Car, CarDocument } from './schemas/car.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async findAllCars() {
    return this.carModel.find();
  }

  async findOneCar(id: ObjectId): Promise<Car> {
    const car = await this.carModel.findById(id).populate('comments');
    return car;
  }

  async addComment(
    createCommentDto: CreateCommentDto,
  ): Promise<CommentDocument> {
    const car = await this.carModel.findById(createCommentDto.car);
    const user = await this.userModel.findById(createCommentDto.userId);
    const userFullName = `${user.firstName} ${user.lastName}`;
    const comment = await this.commentModel.create({
      ...createCommentDto,
      userFullName,
    });
    car.comments.push(comment._id);
    await car.save();
    return comment;
  }
}
