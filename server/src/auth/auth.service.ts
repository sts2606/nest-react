import { JwtPayload } from './interfaces/jwtPayload.interface';
import { CreateUserDto } from './../users/dto/createUser.dto';
import { UsersService } from './../users/users.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegistrationStatus } from './interfaces/registrationStatus.interface';
import { LoginUserDto } from 'src/users/dto/loginUserDto.dto';
import { UserDto } from 'src/users/dto/userDto.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private iwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.userService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByLogin(loginUserDto);
    const token = this._createToken(user);
    console.log('sxsx');
    return {
      email: user.email,
      ...token,
    };
  }

  private _createToken({ email }: UserDto): any {
    const user: JwtPayload = { email };
    const accessToken = this.iwtService.sign(user);
    return {
      expiresIn: '180s',
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  //   async validateUser(email: string, pass: string): Promise<any> {
  //     const user = await this.userService.find(email);
  //     if (user && user.password === pass) {
  //       const { password, ...result } = user;
  //       return result;
  //     }
  //     return null;
  //   }

  //   async login(user: any) {
  //     const payload = { email: user.email, sub: user._id };
  //     return {
  //       //   acces_token: this.iwtService.sign(payload),
  //       user,
  //     };
  //   }
}
