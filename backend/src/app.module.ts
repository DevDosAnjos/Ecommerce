import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/User.module';
import { CategoryModule } from './categories/Category.module';
import { ProductModule } from './products/Product.module';
import { OrderModule } from './orders/Order.module';
import { PurchaseModule } from './purchases/Purchase.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './configurations/DatabaseConfig'; 

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    TypeOrmModule.forRootAsync({imports: [ConfigModule], useFactory: DatabaseConfig, inject: [ConfigService],}),
    CategoryModule,
    OrderModule,
    ProductModule,
    PurchaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
