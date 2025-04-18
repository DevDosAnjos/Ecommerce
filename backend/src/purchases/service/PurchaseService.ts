import { Injectable } from '@nestjs/common';
import { Purchase } from '../entities/Purchase';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PurchaseService {

  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>
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
