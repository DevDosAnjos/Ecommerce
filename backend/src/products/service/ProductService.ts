import { Injectable } from '@nestjs/common';
import { Product } from '../entities/Product';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}

  create() {
  }

  findAll() {
  }

  findOne(id: number) {
  }

  update(id: number) {
  }

  remove(id: number) {
  }
}
