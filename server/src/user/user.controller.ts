import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAll(): Promise<IUser[]> {
    return this.userService.getAllUsers();
  }

  @Get(':email')
  getUserByEmail(@Param('email') email): Promise<IUser | undefined> {
    return this.userService.getUserByEmail(email);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
