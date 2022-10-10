// https://refactoring.guru/es/design-patterns/decorator

class NewPokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scream() {
    console.log(`No quiero`);
  }

  speack() {
    console.log(`No quiero hablar`);
  }
}

const MyDecorator = () => {
  // El decorador es una funcion que tiene acceso a la definicion de la clase, propiedad, metodo
  return (target: Function) => {
    // console.log(target);
    return NewPokemon;
  };
};

// Los decoradores son funciones
@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }

  speack() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const mew = new Pokemon(1, 'Mew');
mew.scream();
mew.speack();
