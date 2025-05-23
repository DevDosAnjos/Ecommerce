import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './ProductController';
import { ProductService } from '../service/ProductService';

describe('ProductsController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
