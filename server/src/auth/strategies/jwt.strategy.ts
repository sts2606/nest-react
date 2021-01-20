import { IUser } from './../../user/interfaces/user.interface';
import { TokenService } from './../../token/token.service';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req, user: Partial<IUser>) {
    const token = req.headers.authorization.slice(7);
    const tokenExists = await this.tokenService.exists(user._id, token);
    if (!tokenExists) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
