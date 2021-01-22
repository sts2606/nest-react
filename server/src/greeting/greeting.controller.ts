import { Request, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('greeting')
export class GreetingController {
  @Get()
  @UseGuards(AuthGuard())
  greet(@Request() req) {
    return req.user;
  }
}
