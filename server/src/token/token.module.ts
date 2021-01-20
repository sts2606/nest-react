import { TokenShema } from './scemas/token.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Token', schema: TokenShema }])],
  providers: [TokenService],
  controllers: [TokenController],
})
export class TokenModule {}
