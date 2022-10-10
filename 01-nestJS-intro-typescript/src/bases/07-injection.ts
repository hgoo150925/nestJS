import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  HttpAdapter,
} from '../api/pokeApi.adapter';

import {
  Move,
  PokeAPIResponse,
} from '../interfaces/pokeapi-response.interface';

// Inyección de dependencias es un patrón de diseño orientado a objetos, en el que se suministran objetos a una clase en lugar de ser la propia clase la que cree dichos objetos
// Añadir una dependencia a mi clase de Pokemon para evitar que mi clase tenga toda la funcionalidad interna
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    public country: string,
    // TODO: inyectar dependencias
    // https://refactoring.guru/es/design-patterns/adapter/typescript/example
    // Inyección de dependencia: añadir a una clase una dependencia
    private readonly http: HttpAdapter
  ) {}

  get imageUrl(): string {
    // En una clase el this apunta a la instancia de una clase
    return `https://pokemon.com/${this.id}.jpg`;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }
  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  // Metodo asincrono
  // Promise<Move[]> es un generico y esto indica que va a retornar una promesa de tipo Move
  async getMoves(): Promise<Move[]> {
    //  const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/151`);
    const data = await this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/152`
    );
    console.log(data.abilities);
    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();
export const meow = new Pokemon(1, 'Mew', 'Argentina', pokeApiFetch);
export const bulbasaur = new Pokemon(2, 'Bulbasaur', 'Brasil', pokeApiAxios);

meow.getMoves();
bulbasaur.getMoves();
