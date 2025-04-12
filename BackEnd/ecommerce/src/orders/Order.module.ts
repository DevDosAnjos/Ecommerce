import { Module } from '@nestjs/common';
import { OrderService } from './service/OrderService';
import { OrderController } from './controller/OrderController';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
