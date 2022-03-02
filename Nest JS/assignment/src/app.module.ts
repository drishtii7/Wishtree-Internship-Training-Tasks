import { Module } from '@nestjs/common';
import { EmployeeModule } from './Employee/employee.module';
import { SalaryModule } from './Salary/salary.module';

@Module({
  imports: [EmployeeModule, SalaryModule],
})
export class AppModule {}
