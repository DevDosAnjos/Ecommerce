import { Module } from '@nestjs/common';
import { UsersService } from './service/UserService';
import { UsersController } from './controller/UserController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
