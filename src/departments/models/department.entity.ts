import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDefined, IsOptional, IsString, MaxLength } from 'class-validator';

@Entity('department')
export class Department {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: string;

  @IsDefined()
  @IsString()
  @MaxLength(100)
  @Column({ length: 100 })
  name: string;
}
