import { Module } from '@nestjs/common';
import { CategoryService } from './service/CategoryService';
import { CategoryController } from './controller/CategoryController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/Category';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
