import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { JwtAuthenticationGuard } from './guards/jwtAuthentication.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.authService.register(registerUserDto);
    const token = await this.authService.login(user);
    return { user, token };
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
