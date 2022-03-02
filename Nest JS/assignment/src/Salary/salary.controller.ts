import { Controller, Get } from '@nestjs/common';
import { SalaryService } from './salary.service';
@Controller()
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) { }

  @Get('/salinfo')
  getAllSal(): any {
    return this.salaryService.getAllSal();
  }
}