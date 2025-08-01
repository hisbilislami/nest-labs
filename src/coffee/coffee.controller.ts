import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  findAll(): string[] {
    return this.coffeeService.findAll();
  }

  @Post()
  create(@Body() coffee: string) {
    this.coffeeService.create(coffee);
  }
}
