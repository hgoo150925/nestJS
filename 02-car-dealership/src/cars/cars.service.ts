import { Injectable, NotFoundException } from '@nestjs/common';

// Services alojan la lógica de negocio de tal manera que sea
// reutilizable mediante inyección de dependencias.
// Ej: PeliculasService para todo lo relacionado a obtener,
// grabar, actualizar o eliminar información de películas
@Injectable()
export class CarsService {
  // private significa que solo podra ser consumida dentro del servicio
  private cars = [
    {
      id: 1,
      brand: 'Kia',
      model: 'Seltos',
    },
    {
      id: 2,
      brand: 'Fiat',
      model: 'Mobi',
    },
    {
      id: 3,
      brand: 'Volkswagen',
      model: 'Gol',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((item) => item.id === id);

    if (!car) {
      // Exception Filters:
      // Maneja los errores de código en mensajes de respuesta http.
      // Usualmente Nest ya incluye todos los casos de uso comunes, pero se pueden expandir basado en las necesidades.
      throw new NotFoundException(`Car with id: '${id}' not found`);
    }
    return car;
  }
}
