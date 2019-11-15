import { Controller, Post, Body, Get, Query, Put } from '@nestjs/common';
import { FootballPlayerService } from './footballPlayerService';
import { FootballPlayerModel } from './footballPlayerModel';
import { int } from '../customtype';

@Controller('football')
export class FootballPlayerController {
  constructor(private readonly service: FootballPlayerService) {}
  @Get()
  find(): Promise<FootballPlayerModel[]> {
    return this.service.find();
  }
  @Get()
  findAge(@Query('age') age: int): Promise<FootballPlayerModel[]> {
    return this.service.findAge(age);
  }
  @Post()
  add(@Body() model: FootballPlayerModel): Promise<FootballPlayerModel> {
    return this.service.add(model);
  }
  @Put()
  update(@Body() model: FootballPlayerModel): Promise<FootballPlayerModel> {
    return this.service.update(model);
  }
  @Post()
  delete(@Body() model: FootballPlayerModel): Promise<FootballPlayerModel> {
    return this.service.delete(model);
  }
}
