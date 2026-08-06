import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  const config = new DocumentBuilder().setTitle('NestJS Master Class Blog App API').setDescription('Use API URL as http://localhost:3000').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
