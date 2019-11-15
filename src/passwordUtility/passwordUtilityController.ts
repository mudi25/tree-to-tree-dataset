import { Controller, Post, HttpCode, Query } from '@nestjs/common';
import { int } from '../customType';

@Controller('password')
export class PasswordUtilityController {
  @Post('generate')
  @HttpCode(200)
  async generatePassword(
    @Query('length') length: int,
    @Query('upperCase') upperCase: boolean,
    @Query('digits') digits: boolean,
    @Query('specialCharacters') specialCharacters: boolean,
  ): Promise<string> {
    return `${length.toString()}-${upperCase}-${digits}${specialCharacters}`;
  }
  @Post('validate')
  @HttpCode(200)
  async validatePassword(@Query('password') password: string): Promise<string> {
    return password;
  }
}
