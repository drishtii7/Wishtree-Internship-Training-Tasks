import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './Login/Login.Module';


@Module({
  imports: [LoginModule, MongooseModule.forRoot('mongodb://localhost:27017/nestdb')],
})
export class AppModule {}
