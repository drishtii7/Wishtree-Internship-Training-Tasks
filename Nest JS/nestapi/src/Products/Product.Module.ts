import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './Product.Controller';
import { ProductService } from './Product.Service';
import { ProductSchema } from './Product.Schema';
@Module({
    imports :[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])], 
    controllers:[ProductController],
    providers:[ProductService]
})

export class ProductModule {};