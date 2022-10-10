export const pokemonIds = [1, 2, 3, 4, 5];

// las interfaces no pueden ser intanciadas
interface Pokemon {
  id: number;
  name: string;
  country?: string; // el simbolo ? indica que la propiedad country es opcional
}

// pokemon es de tipo interface Pokemon
const meow: Pokemon = {
  id: 1,
  name: "Meow",
  country: "Argentina",
};

// Types en arrays
let pokemons: Pokemon[] = [];
pokemons.push(meow);
