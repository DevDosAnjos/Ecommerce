import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entity/Category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ){}

  create() {
  }

  findAll() {
  }

  findOne(id: number) {
  }

  update(id: number) {
  }

  delete(id: number) {
  }
}
