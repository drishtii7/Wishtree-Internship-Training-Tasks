import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class ProductNew{
    @Prop()
    mfg:string;

    @Prop()
    pname:string;

   
}

export const ProductNewSchema=SchemaFactory.createForClass(ProductNew);