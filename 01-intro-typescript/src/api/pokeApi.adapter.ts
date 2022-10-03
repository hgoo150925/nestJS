import axios from 'axios';

// https://refactoring.guru/es/design-patterns/adapter/typescript/example
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data = resp.json();
    console.log('con fetch');
    return data;
  }
}

// Clase adapatadora
export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  // <T> -> representa a un generico
  // Promise<T> -> retornamos una promesa de tipo generico
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log('con axios');
    return data;
  }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}

  async delete(url: string) {}
}
