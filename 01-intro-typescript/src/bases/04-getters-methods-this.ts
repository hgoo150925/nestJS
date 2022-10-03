// Una clase es la representación de un objeto en la vida real
// La clase me permite crear instancias de esta clase mientras que una interface me permite crear reglas y condiciones pero no crear una instancia de la misma
export class Pokemon {
  // Definicion corta de las propiedades de la clase en el constructor
  constructor(
    public readonly id: number, // readonly no me permite establecer/cambiar el valor de la propiedad una vez inicializada su valor
    public name: string,
    public country: string
  ) {}

  get imageUrl(): string {
    // En una clase el this apunta a la instancia de una clase
    return `https://pokemon.com/${this.id}.jpg`;
  }

  // Los metodos funciones que tienen acceso a las propiedades y otros metodos

  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }
  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}
export const meow = new Pokemon(1, 'Meow', 'Argentina');

meow.scream();
meow.speak();
