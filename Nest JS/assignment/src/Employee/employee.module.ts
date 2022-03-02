import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { AllEmpService } from './allemp.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, AllEmpService],
})
export class EmployeeModule {}