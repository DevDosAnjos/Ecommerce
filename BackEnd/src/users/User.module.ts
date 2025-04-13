import { Module } from '@nestjs/common';
import { UsersService } from './service/UserService';
import { UsersController } from './controller/UserController';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
