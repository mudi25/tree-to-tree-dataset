import { Controller, Get, Param, Query } from '@nestjs/common';
import { Service } from './fahplanService';
import { Board, TrainLocation, Location } from './fahrplanModel';

@Controller('fahrplan')
export class FahrplanController {
  constructor(private readonly service: Service) {}
  @Get(':id')
  getArrivalBoardWithid(
    @Param('id') id: string,
    @Query('date') date: string,
  ): Promise<Board[]> {
    return this.service.getArrivalBoardWithid(id, date);
  }
  @Get(':id')
  getDepartureBoardWithid(
    @Param('id') id: string,
    @Query('date') date: string,
  ): Promise<Board[]> {
    return this.service.getDepartureBoardWithid(id, date);
  }
  @Get(':id')
  getJourneyDetailsWithid(@Param('id') id: string): Promise<TrainLocation[]> {
    return this.service.getJourneyDetailsWithid(id);
  }
  @Get(':name')
  getLocation(@Param('name') name: string): Promise<Location[]> {
    return this.service.getLocation(name);
  }
}
