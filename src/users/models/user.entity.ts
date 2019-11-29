import bcrypt from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import {
  IsDefined,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from 'class-validator';

@Entity('user')
export class User {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: string;

  @IsDefined()
  @IsString()
  @MaxLength(100)
  @Column({ length: 100 })
  name: string;

  @IsDefined()
  @IsString()
  @MaxLength(25)
  @Column({ length: 25 })
  login: string;

  @IsDefined()
  @IsString()
  @MaxLength(120)
  @Column({ length: 120 })
  password: string;

  @IsDefined()
  @IsBoolean()
  @Column()
  isActive: boolean;

  @BeforeInsert()
  generatePasswordHash = async () => {
    this.password = await bcrypt.hashSync(this.password, 8);
  };
}
