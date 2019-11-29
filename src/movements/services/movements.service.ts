import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

// Module Imports
import { Movement } from '../models/movement.entity';

@Injectable()
export class MovementsService extends TypeOrmCrudService<Movement> {
  constructor(@InjectRepository(Movement) repo) {
    super(repo);
  }
}
