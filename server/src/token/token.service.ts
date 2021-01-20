import { CreateTokenDto } from './dto/create-token.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToken } from './interfaces/token.interface';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<IToken>,
  ) {}

  async create(createTokenDto: CreateTokenDto): Promise<IToken> {
    const createdToken = new this.tokenModel(createTokenDto);
    return await createdToken.save();
  }

  async exists(userId: string, token: string): Promise<boolean> {
    return await this.tokenModel.exists({ userId, token });
  }
}
