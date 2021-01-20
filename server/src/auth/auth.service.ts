import { TokenService } from './../token/token.service';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { SignOptions } from 'jsonwebtoken';
import { UnauthorizedException } from '@nestjs/common';
import { CreateTokenDto } from 'src/token/dto/create-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async generateToken(data, options?: SignOptions): Promise<string> {
    return this.jwtService.sign(data, options);
  }

  async verifyToken(token): Promise<any> {
    try {
      const data = this.jwtService.verify(token);
      const tokenExists = await this.tokenService.exists(data._id, token);

      if (tokenExists) {
        return data;
      }
      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async saveToken(createTokenDto: CreateTokenDto) {
    const userToken = await this.tokenService.create(createTokenDto);

    return userToken;
  }
}
