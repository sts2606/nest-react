import { configureModule } from './configure.root';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    UsersModule,
    AuthModule,
    configureModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
