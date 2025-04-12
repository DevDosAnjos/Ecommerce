import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from '../service/ProductService';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get(':id')
  get(@Param('id') id: number) {
  }

  @Get()
  listAll() {
  }

  @Get()
  listByCategory(){
  }

  @Get()
  listByPrice(){
  }

  @Get()
  listByBrand(){
  }

  @Get()
  listInStock(){
  }

  @Get()
  listOutOfStock(){
  }

  @Post()
  create() {
  }

  @Put()
  update(){

  }

  @Delete(':id')
  delete(@Param('id') id: number) {
  }
}
