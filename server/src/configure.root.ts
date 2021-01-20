import { ConfigModule } from '@nestjs/config';

export const configureModule = ConfigModule.forRoot({
  envFilePath: `.env`,
  isGlobal: true,
});
