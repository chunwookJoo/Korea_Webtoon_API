import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const configService = app.get(ConfigService);
  // const port = configService.get<string>('server.port');
  const serverConfig = config.get('server');
  const port = serverConfig.port;

  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
