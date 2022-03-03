import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
    @Prop()
    productname:string;

    @Prop()
    mname:string;


}

export const ProductSchema = SchemaFactory.createForClass(Product)