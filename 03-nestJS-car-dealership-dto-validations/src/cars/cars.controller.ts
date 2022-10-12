import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  // Post crea un recurso y para enviar el body se le agrega el decorador @Body a la funcion
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
      return this.carsService.delete(id);
  }
}
