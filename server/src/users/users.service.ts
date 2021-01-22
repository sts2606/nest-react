import { UserDto } from './dto/userDto.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { LoginUserDto } from './dto/loginUserDto.dto';
import { toUserDto } from 'src/utils/toUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userModel.findOne(options).exec();
    return toUserDto(user);
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const { email } = createUserDto;
    const userInDb = await this.userModel.findOne({ email }).exec();
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();
    return toUserDto(createdUser);
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.findOne({ email });
  }

  async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userModel.findOne({ email }).exec();

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    if (user && user.password !== password) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    if (user && user.password === password) {
      return toUserDto(user);
    }
  }
}
