import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

// Module Imports
import LoginDto from '../dto/login.dto';
import Login from '../interfaces/login.interface';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Chama o UsersService para validar um usuário no banco de dados.
   * @param LoginDto
   * @returns {Client}
   */
  async login({ login, password }: LoginDto): Promise<Login> {
    console.log('login', login);
    console.log('password', password);
    const user = await this.userService.find({
      where: { login: login, isActive: true },
    });

    console.log('user', user[0]);

    if (!user[0]) {
      throw new NotFoundException('User not found or not active');
    }

    if (user[0] && !bcrypt.compareSync(password, user[0].password)) {
      throw new UnauthorizedException('Password incorrect');
    }

    const payload = {
      uuid: user[0].id,
      name: user[0].name,
    };

    const accessToken = this.jwtService.sign(payload);

    return { token: accessToken };
  }
}
