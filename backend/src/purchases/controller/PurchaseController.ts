import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseService } from '../service/PurchaseService';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchasesService: PurchaseService) {}

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
