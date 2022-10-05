import { INestApplication, NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

export async function createApp(options?: NestApplicationOptions): Promise<INestApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, options);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        target: false,
      },
    }),
  );
  return app;
}

async function main() {
  const app = await createApp();
  await app.listen(3000);
}

export let viteNodeApp: Promise<INestApplication>;

if (process.env.NODE_ENV === 'production') {
  void main();
} else {
  viteNodeApp = createApp();
}
