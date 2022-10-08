import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// https://docs.nestjs.com/modules
// Un módulo es una clase anotada con un @Module()decorador.
// El @Module() decorador proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.

// Es decir que los Modulos agrupan y desacoplan un conjunto de funcionalidad específica por dominio.
// Ej: auth.module.ts, encargado de todo lo relacionado a la autenticación

// El modulo principal tiene referencia a todo el modulo de la app
@Module({
  // se importa el modulo CarsModule que representa a cars
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
