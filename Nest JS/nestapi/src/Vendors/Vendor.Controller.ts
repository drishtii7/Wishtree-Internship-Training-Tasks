import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common";
import { VendorService } from './Vendor.Service';
import { VendorDTO } from './VendorDTO';
@Controller('/vendor')
export class VendorController{
    constructor(private vendorService : VendorService){}

    @Post()
    async create(@Body() createVendorDTO : VendorDTO) {
        this.vendorService.createVendor(createVendorDTO);
    }

    @Delete(':id')
    async deleteVendor(@Param('id') id:string) {
        return this.vendorService.deleteVendor(id);
    }
    @Get()
    async getAllVendor(){
        return this.vendorService.getAllVendor();
    }
    @Get(':vid')
    async getVendor(@Param('vid') vid:string){
        return this.vendorService.getVendor(vid);
    }
}