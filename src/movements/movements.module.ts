import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module Imports
import { Movement } from './models/movement.entity';
import { MovementsService } from './services/movements.service';
import { MovementsController } from './controllers/movements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movement])],
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
