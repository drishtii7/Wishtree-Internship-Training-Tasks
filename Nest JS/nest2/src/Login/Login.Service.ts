import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { LoginSchema } from './Login.Schema';
import { LoginDTO } from "./LoginDTO";

@Injectable()
export class LoginService {
    constructor( @InjectModel('Login') private readonly loginModel : Model<typeof LoginSchema>) { }
  
    async getAllUsers() {
        const Result  = await this.loginModel.find().exec();
        console.log(Result);
        return Result;
    }

    async deleteUser(id:string)
    {
        const Result = await this.loginModel.findByIdAndRemove({_id:id}).exec();
        return Result;
    }
    async getUser(uid:string)
    {
        const Result = await this.loginModel.findOne({_id:uid}).exec();
        return Result;
    }
    async createUser(loginDto: LoginDTO)
    {
        return await this.loginModel.create(loginDto)
    }
   
}