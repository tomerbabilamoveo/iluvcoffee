import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
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
      flavors: ['caramel', 'mocha'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(newCoffeeDto: any) {
    this.coffees.push({ id: this.coffees.length + 1, ...newCoffeeDto });
    return newCoffeeDto;
  }

  update(id: number, updatedCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // IMPLEMENT HERE
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);
    if (coffeeIndex !== -1) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
