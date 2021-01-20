import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async getAllUsers(): Promise<IUser[] | undefined> {
    return this.userModel.find().exec();
  }

  async getUserByEmail(email: string): Promise<IUser> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const saltRounds = +process.env.saltRounds;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hash,
    });
    return await createdUser.save();
  }
}
