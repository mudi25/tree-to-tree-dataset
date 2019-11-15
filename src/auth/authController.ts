import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthModel } from './authModel';

@Controller()
export class AuthController {
  @Post('auth')
  @HttpCode(200)
  async loginUser(@Body() body: AuthModel): Promise<string> {
    return body.email;
  }
}
