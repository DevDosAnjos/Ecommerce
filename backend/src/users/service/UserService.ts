import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
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
