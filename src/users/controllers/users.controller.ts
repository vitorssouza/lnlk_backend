import { Crud } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Module Imports
import { User } from '../models/user.entity';
import { UsersService } from '../services/users.service';

@Crud({
  model: {
    type: User,
  },
})
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}
