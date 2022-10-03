import { Controller, Get } from '@nestjs/common';

// https://docs.nestjs.com/controllers
// Los controladores son responsables de manejar las solicitudes entrantes (request) y devolver las respuestas (response) al cliente.

// http://localhost:3000/cars
@Controller('cars')
export class CarsController {
  // Con el decorador @Get decimos a Nest que cuando venga una solicitud Get a este endpoint (cars) se ejecute este metodo getAllCars
  @Get()
  getAllCars() {
    return ['Kia', 'Fiat', 'Ford'];
  }
}
