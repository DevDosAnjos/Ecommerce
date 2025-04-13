import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/User.module';
import { CategoryModule } from './categories/Category.module';
import { ProductModule } from './products/Product.module';
import { OrderModule } from './orders/Order.module';
import { PurchaseModule } from './purchases/Purchase.module';

@Module({
  imports: [CategoryModule,OrderModule,ProductModule,PurchaseModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
