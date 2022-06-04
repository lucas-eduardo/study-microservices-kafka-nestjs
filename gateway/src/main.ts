import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(3332).then(() => {
    console.log('[Gateway] HTTP server running in port 3332!');
  });
}
bootstrap();
