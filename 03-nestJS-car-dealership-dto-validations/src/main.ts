import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// main se ejecuta al inicio del proyecto
async function main() {
  // se ejecuta NestFactory que crea la app de Nest
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whiteList: Remueve todo lo que no está incluído en los DTOs
      forbidNonWhitelisted: true, // forbidNonWhiteListed: Retorna bad request si hay propiedades en el objeto no requeridas
    }),
  );

  await app.listen(3000);
}
main();
