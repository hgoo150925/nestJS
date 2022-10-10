// Una clase es la representación de un objeto en la vida real
// La clase me permite crear instancias de esta clase mientras que una interface me permite crear reglas y condiciones pero no crear una instancia de la misma
export class Pokemon {
  public readonly id: number; // readonly no me permite cambiar el valor del id una vez inicializada su valor
  public name: string;
  public country: string;

  // El constructor me permite inicializar las propiedades de esta clase
  // El constructor se ejecuta cuando creamos una instancia de la clase
  constructor(id: number, name: string, country: string) {
    this.id = id;
    this.name = name;
    this.country = country;
  }
}

export const meow = new Pokemon(1, "Meow", "Argentina");
