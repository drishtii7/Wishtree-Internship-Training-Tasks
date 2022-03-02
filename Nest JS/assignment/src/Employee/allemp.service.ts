import { Injectable } from '@nestjs/common';

@Injectable()
export class AllEmpService {

    GetEmpShow()
    {
        console.log("Get Employee Information!!");
    }
    AddEmpShow()
    {
        console.log("Add Employee Information!!");
    }
    UpdateEmpShow()
    {
        console.log("Update Employee Information!!");
    }
    DeleteEmpShow()
    {
        console.log("Delete Employee Information!!");
    }
    GetSalShow()
    {
        console.log("Get Salary Information!!");
    }
}