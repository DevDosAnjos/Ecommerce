import { Module } from '@nestjs/common';
import { PurchaseService } from './service/PurchaseService';
import { PurchaseController } from './controller/PurchaseController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/Purchase';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
