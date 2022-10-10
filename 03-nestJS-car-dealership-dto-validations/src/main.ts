import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main se ejecuta al inicio del proyecto
async function main() {
  // se ejecuta NestFactory que crea la app de Nest
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
main();
