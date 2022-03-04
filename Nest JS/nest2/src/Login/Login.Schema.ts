import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Login {
    @Prop()
    username:string;

    @Prop()
    pwd:string;

}

export const LoginSchema = SchemaFactory.createForClass(Login)