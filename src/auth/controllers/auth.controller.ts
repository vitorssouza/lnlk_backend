import { Controller, Post, Body } from '@nestjs/common';

// Module Imports
import Login from '../interfaces/login.interface';
import LoginDto from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Chama o AuthService para autenticar o usuário
   * passado na URL.
   * @param LoginDto
   * @returns {Login}
   */
  @Post('login')
  async login(@Body() user: LoginDto): Promise<Login> {
    return await this.authService.login(user);
  }
}
