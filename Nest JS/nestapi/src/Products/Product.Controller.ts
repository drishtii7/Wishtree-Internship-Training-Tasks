import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common";
import { ProductService } from './Product.Service';
import { ProductDTO } from './ProductDTO';
@Controller('/product')
export class ProductController{
    constructor(private productService : ProductService){}

    @Post()
    async create(@Body() createProductDTO : ProductDTO) {
        this.productService.createProduct(createProductDTO);
    }

    @Get()
    async getAllProduct(){
        return this.productService.getAllProduct();
    }
    @Get(':pid')
    async getProduct(@Param('vid') pid:string){
        return this.productService.getProduct(pid);
    }
}