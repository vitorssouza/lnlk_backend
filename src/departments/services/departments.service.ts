import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

// Module Imports
import { Department } from '../models/department.entity';

@Injectable()
export class DepartmentsService extends TypeOrmCrudService<Department> {
  constructor(@InjectRepository(Department) repo) {
    super(repo);
  }
}
