import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vendor {
    @Prop()
    vendorname:string;

    @Prop()
    address:string;

    @Prop()
    phone:number;

    @Prop([String])
    productlist:string[];

}

export const VendorSchema = SchemaFactory.createForClass(Vendor)