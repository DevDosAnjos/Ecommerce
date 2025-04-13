import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from './PurchaseController';
import { PurchaseService } from '../service/PurchaseService';

describe('PurchasesController', () => {
  let controller: PurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseController],
      providers: [PurchaseService],
    }).compile();

    controller = module.get<PurchaseController>(PurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
