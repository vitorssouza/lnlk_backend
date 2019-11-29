import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import {
  IsDefined,
  IsOptional,
  MaxLength,
  IsString,
  IsNumber,
} from 'class-validator';

// Module Imports
import { Department } from '../../departments/models/department.entity';

@Entity('employee')
export class Employee {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: string;

  @IsDefined()
  @IsString()
  @MaxLength(200)
  @Column({ length: 200 })
  name: string;

  @IsDefined()
  @IsNumber()
  @Column()
  departmentId: number;

  @ManyToOne(type => Department)
  @JoinColumn({ name: 'departmentId' })
  department: Department;
}
