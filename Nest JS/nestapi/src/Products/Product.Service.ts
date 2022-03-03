import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ProductSchema } from './Product.Schema';
import { ProductDTO } from './ProductDTO';
@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel : Model<typeof ProductSchema>) { }

    async getAllProduct() {
        const Result  = await this.productModel.find().exec();
        console.log(Result);
        return Result;
    }


    async getProduct(pid:string)
    {
        const Result = await this.productModel.findOne({_id:pid}).exec();
        return Result;
    }

    async createProduct(productDto: ProductDTO)
    {
        return await this.productModel.create(productDto)
    }
}