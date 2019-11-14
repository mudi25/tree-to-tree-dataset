import { Controller, Get, Param } from '@nestjs/common';
import { Service } from './betriebsstellenService';
import { Station } from './betriebsstellenModel';

@Controller('betriebsstellen')
export class BetriebsstellenController {
  constructor(private readonly service: Service) {}
  @Get()
  getbetriebsstellen(): Promise<Station[]> {
    return this.service.getBetriebsstellen();
  }
  @Get(':abbrev')
  getbetriebsstellenAbbrev(
    @Param('abbrev') abbrev: string,
  ): Promise<Station[]> {
    return this.service.getBetriebsstellenAbbrev(abbrev);
  }
}
