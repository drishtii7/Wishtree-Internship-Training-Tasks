import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ProductNew, ProductNewSchema } from "./ProductNew.Schema";
import { VendorSchema } from './Vendor.Schema';
import { VendorDTO } from './VendorDTO';
@Injectable()
export class VendorService {
    constructor( @InjectModel('Vendor') private readonly vendorModel : Model<typeof VendorSchema>,
    @InjectModel(ProductNew.name) private productnewModel: Model<typeof ProductNewSchema>) { }
  
    async getAllVendor() {
        const Result  = await this.vendorModel.find().exec();
        console.log(Result);
        return Result;
    }

    async deleteVendor(id:string)
    {
        const Result = await this.vendorModel.findByIdAndRemove({_id:id}).exec();
        return Result;
    }
    async getVendor(vid:string)
    {
        const Result = await this.vendorModel.findOne({_id:vid}).exec();
        return Result;
    }
    async getProducts(name:string):Promise<ProductNew[]>
    {
       return  this.productnewModel.find({mfg:name},{_id:0,mfg:0});
    }
    async update(mrname:string, id:string):Promise<any>
    {
        var getp= await this.getProducts(mrname);
        console.log("Getp : ",getp);
        var myproducts=new Array();
        getp.forEach((item) => myproducts.push(item.pname));
        console.log("Products : ",myproducts);
        
        return  await this.vendorModel.findByIdAndUpdate({_id:id},{$push:{productlist:myproducts}});
    }
    

    async createVendor(vendorDto: VendorDTO)
    {
        return await this.vendorModel.create(vendorDto)
    }
}