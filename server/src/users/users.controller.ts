import { LoginUserDto } from 'src/users/dto/loginUserDto.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':email/:password')
  findByLogin(@Param() loginUserDtpo: LoginUserDto) {
    return this.userService.findByLogin(loginUserDtpo);
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.userService.findById(id);
  }
}
