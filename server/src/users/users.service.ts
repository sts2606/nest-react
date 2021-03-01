import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const { email } = createUserDto;
    const userInDb = await this.userModel.findOne({ email }).exec();
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(createUserDto);
    createdUser.set('id', createdUser._id);
    await createdUser.save();
    return createdUser;
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
