import { Module } from '@nestjs/common';
import { ProductService } from './service/ProductService';
import { ProductController } from './controller/ProductController';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
