import { Module } from '@nestjs/common';
import { PurchaseService } from './service/PurchaseService';
import { PurchaseController } from './controller/PurchaseController';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
