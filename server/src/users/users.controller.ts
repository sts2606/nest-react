import { LoginUserDto } from 'src/users/dto/loginUserDto.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':email')
  findByEmail(@Param('email') email) {
    return this.userService.getByEmail(email);
  }

  @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads' });
  }
}
