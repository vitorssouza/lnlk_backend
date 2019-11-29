import { Crud } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Module Imports
import { Movement } from '../models/movement.entity';
import { MovementsService } from '../services/movements.service';

@Crud({
  model: {
    type: Movement,
  },
  query: {
    join: {
      employee: {
        eager: true,
      },
    },
  }
})
@UseGuards(AuthGuard('jwt'))
@Controller('movements')
export class MovementsController {
  constructor(public service: MovementsService) {}
}
