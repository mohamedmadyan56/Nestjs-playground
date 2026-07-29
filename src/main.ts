import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { CarModule } from './car/car.module';

async function bootstrap() {
  const app = await NestFactory.create(CarModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
