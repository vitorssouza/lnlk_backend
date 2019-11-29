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
import { Employee } from '../../employees/models/employee.entity';
import { MovementType } from './enum/movement-type.enum';

@Entity('movement')
export class Movement {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: string;

  @IsDefined()
  @IsString()
  @MaxLength(500)
  @Column({ length: 500 })
  description: string;

  @IsDefined()
  @IsString()
  @Column()
  movementType: MovementType;

  @IsDefined()
  @IsNumber()
  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  value: number;

  @IsDefined()
  @IsNumber()
  @Column()
  employeeId: number;

  @ManyToOne(type => Employee)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;
}
