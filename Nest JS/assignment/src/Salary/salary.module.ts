import { Module } from '@nestjs/common';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';
import { AllEmpService } from '../Employee/allemp.service';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService, AllEmpService],
})
export class SalaryModule {}