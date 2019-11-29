import { Crud } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Module Imports
import { Employee } from '../models/employee.entity';
import { EmployeesService } from '../services/employees.service';

@Crud({
  model: {
    type: Employee,
  },
  query: {
    join: {
      department: {
        eager: true,
      },
    },
  },
})
@Controller('employees')
@UseGuards(AuthGuard('jwt'))
export class EmployeesController {
  constructor(public service: EmployeesService) {}
}
