import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

// https://docs.nestjs.com/controllers
// Los controladores son responsables de manejar las solicitudes entrantes (request) y devolver las respuestas (response) al cliente.

// http://localhost:3000/cars
@Controller('cars')
export class CarsController {
  // Inyección de dependencias
  constructor(private readonly carsService: CarsService) {}

  // Con el decorador @Get decimos a Nest que cuando venga una solicitud Get a este endpoint (cars) se ejecute este metodo getAllCars
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  // Post crea un recurso
  @Post()
  createCar() {
    return {
      ok: true,
      method: 'POST',
    };
  }
}
