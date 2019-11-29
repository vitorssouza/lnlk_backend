import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module Imports
import { Employee } from './models/employee.entity';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
