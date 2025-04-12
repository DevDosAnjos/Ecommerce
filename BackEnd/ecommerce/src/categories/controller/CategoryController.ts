import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from '../service/CategoryService';
import { CategoryRequest } from '../dto/CategoryRequest';


@Controller('categories')
export class CategoryController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get()
  get(){
  }

  @Get()
  listAll(){
  }

  @Get()
  listActive(){
  }

  @Get()
  listInactive(){
  }

  @Post()
  create(@Body() categoryRequest : CategoryRequest){
  }

  @Put(':id')
  update(@Param('id') id : number, @Body() categoryRequest : CategoryRequest ){
  }

  @Delete(':id')
  delete(@Param('id') id : number){
  }

}
