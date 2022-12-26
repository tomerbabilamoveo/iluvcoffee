import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Coffee #1',
      brand: 'Brand #1',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Coffee #2',
      brand: 'Brand #2',
      flavors: ['sour', 'cream'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === parseInt(id));
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(newCoffee: Coffee) {
    this.coffees.push(newCoffee);
  }

  update(id: string, updatedCoffee: Coffee) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // IMPLEMENT HERE
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(
      (item) => item.id === parseInt(id),
    );
    if (coffeeIndex !== -1) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
