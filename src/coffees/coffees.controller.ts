import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `these is the limit: ${limit} and this is the offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this is ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `lets update ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `lets remove ${id}`;
  }
}
