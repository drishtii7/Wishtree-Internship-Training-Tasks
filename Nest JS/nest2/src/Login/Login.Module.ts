import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './Login.Controller';
import { LoginService } from './Login.Service';
import { LoginSchema } from './Login.Schema';


@Module({
    imports :[ MongooseModule.forFeature([{name:'Login',schema:LoginSchema}]) ], 
    controllers:[LoginController],
    providers:[LoginService]
})

export class LoginModule {};