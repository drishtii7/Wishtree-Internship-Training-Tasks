import { Module } from '@nestjs/common';
import { VendorModule } from './Vendors/Vendor.Module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './Products/Product.Module';

@Module({
  imports: [VendorModule, ProductModule, MongooseModule.forRoot('mongodb://localhost:27017/nestdb')],
})
export class AppModule {}
