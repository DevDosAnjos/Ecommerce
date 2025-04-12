import { Module } from '@nestjs/common';
import { CategoryService } from './service/CategoryService';
import { CategoryController } from './controller/CategoryController';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
