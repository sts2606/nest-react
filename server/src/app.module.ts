import { GreetingModule } from './greeting/greeting.module';
import { configureModule } from './configure.root';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GreetingModule,
    UsersModule,
    AuthModule,
    configureModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
