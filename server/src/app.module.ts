import { configureModule } from './configure.root';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    configureModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
