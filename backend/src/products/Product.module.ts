import { Module } from '@nestjs/common';
import { ProductService } from './service/ProductService';
import { ProductController } from './controller/ProductController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
