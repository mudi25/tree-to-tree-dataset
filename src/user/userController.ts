import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserModel, UserModelCreate, UserJenisKelaminType } from './userModel';
import { int } from '../customtype';
import { UserService } from './userService';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  findUser(@Query('page') page: int): Promise<UserModel[]> {
    return this.service.findUser(page);
  }

  @Get()
  findUserByJenisKelamin(@Query()
  query: {
    page: int;
    jenisKelamin: UserJenisKelaminType;
  }): Promise<UserModel[]> {
    return this.service.findUserByJenisKelamin(query.page, query.jenisKelamin);
  }

  @Get(':uid')
  findUserById(@Param('uid') uid: string): Promise<UserModel> {
    return this.service.findUserById(uid);
  }

  @Post()
  @HttpCode(200)
  createNewUser(@Body() body: UserModelCreate): Promise<void> {
    return this.service.createNewUser(body);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UserModelCreate,
  ): Promise<UserModel> {
    return this.service.updateUser(id, body);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return this.service.deleteUser(id);
  }
}
