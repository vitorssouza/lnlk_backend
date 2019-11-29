import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module Imports
import { User } from './models/user.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
