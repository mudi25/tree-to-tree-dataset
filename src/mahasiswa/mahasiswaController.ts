import {
  Controller,
  Post,
  Get,
  Query,
  HttpCode,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MahasiswaService } from './mahasiswaService';
import { int } from '../customtype';
import { MahasiswaModel } from './mahasiswaModel';

@Controller('mahasiswa')
export class ControllerMahasiswa {
  constructor(private readonly service: MahasiswaService) {}
  @Get()
  find(@Query('halaman') halaman: int): Promise<MahasiswaModel[]> {
    return this.service.find(halaman);
  }

  @Get()
  findNim(@Query('nim') nim: string): Promise<MahasiswaModel> {
    return this.service.findNim(nim);
  }
  @Post()
  @HttpCode(200)
  create(@Body() body: MahasiswaModel): Promise<MahasiswaModel> {
    return this.service.create(body);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: MahasiswaModel,
  ): Promise<MahasiswaModel> {
    return this.service.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<MahasiswaModel> {
    return this.service.delete(id);
  }
}
