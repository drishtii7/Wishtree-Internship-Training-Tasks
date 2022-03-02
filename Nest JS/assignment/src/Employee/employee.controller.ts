import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }


  @Get()
  getHello(): string {
    return this.employeeService.getHello();
  }
  @Get('/emp')
  getAllEmp(): string {
    return this.employeeService.getAllEmp();
  }
  @Get('/addemp')
  addnewemployee(): string {
    return this.employeeService.AddNewEmployee();
  }
  @Get('/updateemp')
  editemployee(): string {
    return this.employeeService.UpdateEmployee();
  }
  @Get('/deleteemp')
  deleteemployee(): string {
    return this.employeeService.DeleteEmployee();
  }
}