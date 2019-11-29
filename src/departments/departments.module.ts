import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module Imports
import { Department } from './models/department.entity';
import { DepartmentsService } from './services/departments.service';
import { DepartmentsController } from './controllers/departments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
