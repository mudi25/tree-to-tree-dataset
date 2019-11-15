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
import { MobilModel, MobilModelManipulasi } from './mobilModel';
import { int } from '../customtype';
import { MobilService } from './mobilService';
@Controller('mobil')
export class MobilController {
  constructor(private readonly service: MobilService) {}
  @Get()
  findMobil(@Query('page') page: int): Promise<MobilModel[]> {
    return this.service.findMobil(page);
  }

  @Get()
  findMobilByMaxPrize(@Query()
  query: {
    page: int;
    harga: int;
  }): Promise<MobilModel[]> {
    return this.service.findMobilByMaxPrize(query.page, query.harga);
  }

  @Get(':uid')
  findMobilById(@Param('uid') uid: string): Promise<MobilModel> {
    return this.service.findMobilById(uid);
  }

  @Post()
  @HttpCode(200)
  createNewMobil(@Body() body: MobilModelManipulasi): Promise<void> {
    return this.service.createNewMobil(body);
  }
  @Put(':id')
  updateMobil(
    @Param('id') id: string,
    @Body() body: MobilModelManipulasi,
  ): Promise<MobilModel> {
    return this.service.updateMobil(id, body);
  }
  @Delete(':id')
  deleteMobil(@Param('id') id: string): Promise<string> {
    return this.service.deleteMobil(id);
  }
}
