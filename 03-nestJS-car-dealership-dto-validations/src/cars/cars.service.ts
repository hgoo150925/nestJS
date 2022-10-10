import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index';

// Services alojan la lógica de negocio de tal manera que sea
// reutilizable mediante inyección de dependencias.
// Ej: PeliculasService para todo lo relacionado a obtener,
// grabar, actualizar o eliminar información de películas
@Injectable()
export class CarsService {
  // private significa que solo podra ser consumida dentro del servicio
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Kia',
      model: 'Seltos',
    },
    {
      id: uuid(),
      brand: 'Fiat',
      model: 'Mobi',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Gol',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((item) => item.id === id);

    if (!car) {
      // Exception Filters:
      // Maneja los errores de código en mensajes de respuesta http.
      // Usualmente Nest ya incluye todos los casos de uso comunes, pero se pueden expandir basado en las necesidades.
      throw new NotFoundException(`Car with id: '${id}' not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    // validacion de que el id exista
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car id: ${id} is not valid`);
    }

    // generar un nuevo array en el car
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
}
