import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  private readonly coffee = [];

  findAll(): string[] {
    return this.coffee;
  }

  create(coffee: string) {
    this.coffee.push(coffee);
  }
}
