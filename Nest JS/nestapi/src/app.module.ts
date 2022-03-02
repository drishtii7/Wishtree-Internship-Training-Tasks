import { Module } from '@nestjs/common';
import { VendorModule } from './Vendors/Vendor.Module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [VendorModule, MongooseModule.forRoot('mongodb://localhost:27017/nestdb')],
})
export class AppModule {}
