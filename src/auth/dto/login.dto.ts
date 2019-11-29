import { IsBoolean, IsDefined, IsEmail, IsString } from 'class-validator';

import { User } from '../../users/models/user.entity';

export default class LoginDto implements Partial<User> {
  @IsDefined()
  @IsString()
  login: string;

  @IsDefined()
  @IsString()
  password: string;
}
