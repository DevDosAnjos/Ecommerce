import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './OrderController';
import { OrderService } from '../service/OrderService';

describe('OrdersController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
