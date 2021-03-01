import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthenticationGuard } from './auth/guards/jwtAuthentication.guard';

@Controller()
export class AppController {
  @UseGuards(JwtAuthenticationGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {}
}
