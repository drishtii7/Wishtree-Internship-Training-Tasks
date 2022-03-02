import { Injectable } from '@nestjs/common';
import { SalaryDTO } from './salary.dto';
import { AllEmpService } from '../Employee/allemp.service';

@Injectable()
export class SalaryService {
constructor(private readonly saldata : AllEmpService) {}
  sal:SalaryDTO = {
    empId: 101,
    wdays: 5,
    total_salary: 40000,
  };
  
  getAllSal():any {
    this.saldata.GetSalShow();
    return this.sal;
  }
}