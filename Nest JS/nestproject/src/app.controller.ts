import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './students.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly userService: StudentService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/allstudent')
  liststudent(): any {
    return this.userService.GetAllStudents();
  }
  @Get('/addstudent')
  addnewstudent(): string {
    return this.userService.AddNewStudent();
  }
  @Get('/updatestudent')
  editstudent(): string {
    return this.userService.UpdateStudent();
  }
  @Get('/deletestudent')
  deletestudent(): string {
    return this.userService.DeleteStudent();
  }
}
