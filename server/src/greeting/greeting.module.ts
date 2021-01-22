import { UsersModule } from './../users/users.module';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { GreetingController } from './greeting.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [GreetingController],
})
export class GreetingModule {}
