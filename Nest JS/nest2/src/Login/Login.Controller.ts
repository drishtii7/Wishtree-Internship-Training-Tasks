import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { LoginService } from './Login.Service';
import { LoginDTO } from './LoginDTO';
@Controller('/login')
export class LoginController{
    constructor(private loginService : LoginService){}

    @Post()
    async create(@Body() createLoginDTO : LoginDTO) {
        this.loginService.createUser(createLoginDTO);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string) {
        return this.loginService.deleteUser(id);
    }
    @Get()
    async getAllUsers(){
        return this.loginService.getAllUsers();
    }
    @Get(':uid')
    async getUser(@Param('uid') uid:string){
        return this.loginService.getUser(uid);
    }
   
   
}