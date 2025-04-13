import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from '../service/UserService';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create() {
  }

  @Get()
  listAll() {
  }

  @Get(':id')
  get(@Param('id') id: number) {
  }

  @Put(':id')
  update(@Param('id') id: number) {
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
  }
}
