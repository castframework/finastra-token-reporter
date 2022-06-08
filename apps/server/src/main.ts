import { HttpLoggingInterceptor, OMSLogger } from '@finastra/nestjs-logger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const omsLogger = new OMSLogger();
  const app = await NestFactory.create(AppModule, {
    logger: omsLogger,
  });
  app.useLogger(omsLogger);
  app.useGlobalInterceptors(new HttpLoggingInterceptor());

  app.use(compression());

  const corsWhitelist = process.env.CORS_WHITELIST ? process.env.CORS_WHITELIST.split(',') : [];
  app.enableCors({
    origin: [...corsWhitelist],
  });

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port, 'main');
  });
}

bootstrap();
