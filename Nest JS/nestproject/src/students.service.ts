import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  AddNewStudent(): string {
    return 'New student is successfully added';
  }
  UpdateStudent(): string {
    return 'Student record has been updated successfully!!';
  }
  DeleteStudent(): string {
    return 'Student record has been deleted successfully!!';
  }
  GetAllStudents(): any {
    return ['Drishti', 'Parth', 'Riya'];
  }
}