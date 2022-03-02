import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from './employee.dto';
import { AllEmpService } from './allemp.service';

@Injectable()
export class EmployeeService {
constructor(private readonly empdata : AllEmpService) {}
  emp:EmployeeDTO = {
    empName: 'Riya',
    desg: 'Admin',
    salary: 40000,
  };
  
  getAllEmp():any {
    this.empdata.GetEmpShow();
    return this.emp;
  }
  getHello(): string {
    return 'Welcome to my dashboard!';
  }
  AddNewEmployee(): string {
    this.empdata.AddEmpShow();
    return 'Employee is successfully added';
  }
  UpdateEmployee(): string {
    this.empdata.UpdateEmpShow();
    return 'Employee record has been updated successfully!!';
  }
  DeleteEmployee(): string {
    this.empdata.DeleteEmpShow();
    return 'Employee record has been deleted successfully!!';
  }
}