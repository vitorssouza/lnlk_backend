import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

// Module Imports
import { Employee } from '../models/employee.entity';

@Injectable()
export class EmployeesService extends TypeOrmCrudService<Employee> {
  constructor(@InjectRepository(Employee) repo) {
    super(repo);
  }
}
