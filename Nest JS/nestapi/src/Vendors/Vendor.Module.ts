import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { VendorController } from './Vendor.Controller';
import { VendorService } from './Vendor.Service';
import { VendorSchema } from './Vendor.Schema';
import { ProductNew, ProductNewSchema } from "./ProductNew.Schema";


@Module({
    imports :[ MongooseModule.forFeature([{name:'Vendor',schema:VendorSchema}]),MongooseModule.forFeature([{name:'ProductNew',schema:ProductNewSchema}]) ], 
    controllers:[VendorController],
    providers:[VendorService]
})

export class VendorModule {};