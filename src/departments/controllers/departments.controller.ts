import { Crud } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Module Imports
import { Department } from '../models/department.entity';
import { DepartmentsService } from '../services/departments.service';

@Crud({
  model: {
    type: Department,
  },
})
@Controller('departments')
@UseGuards(AuthGuard('jwt'))
export class DepartmentsController {
  constructor(public service: DepartmentsService) {}
}
