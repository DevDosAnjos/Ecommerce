import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseService } from './PurchaseService';

describe('PurchasesService', () => {
  let service: PurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseService],
    }).compile();

    service = module.get<PurchaseService>(PurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
