import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from '../service/OrderService';

@Controller('orders')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  @Get(':id')
  get(@Param('id') id: number) {
  }

  @Get()
  listAll() {
  }

  @Post()
  create() { 
  }
  
}
