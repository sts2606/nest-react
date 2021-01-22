import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: 'process.env.JWT_SECRET',
      signOptions: { expiresIn: '180s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
