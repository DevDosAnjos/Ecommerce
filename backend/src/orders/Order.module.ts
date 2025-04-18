import { Module } from '@nestjs/common';
import { OrderService } from './service/OrderService';
import { OrderController } from './controller/OrderController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/Order';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
