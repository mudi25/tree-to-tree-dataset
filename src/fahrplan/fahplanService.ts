import { Injectable } from '@nestjs/common';
import { Board, TrainLocation, Location } from './fahrplanModel';
import { float } from 'src/customType';

@Injectable()
export class Service {
  private boardId: string = 'board id';
  private dateTime: string = 'date time';
  private detailsId: string = 'details id';
  private name: string = 'name';
  private origin: string = 'origin';
  private stopId: string = 'stop id';
  private stopName: string = 'stop name';
  private track: string = 'track';
  private type: string = 'type';
  private board(): Board {
    return {
      boardId: this.boardId,
      dateTime: this.dateTime,
      detailsId: this.detailsId,
      name: this.name,
      origin: this.origin,
      stopId: this.stopId,
      stopName: this.stopName,
      track: this.track,
      type: this.type,
    };
  }

  private arrTime: string = 'arr time';
  private depTime: string = 'dep time';
  private lat: float = 0.1;
  private lon: float = 0.1;
  private operator: string = 'operator';
  private train: string = 'train';
  private trainLocation(): TrainLocation {
    return {
      arrTime: this.arrTime,
      depTime: this.depTime,
      lat: this.lat,
      lon: this.lon,
      operator: this.operator,
      stopId: this.stopId,
      stopName: this.stopName,
      train: this.train,
      type: this.type,
    };
  }
  private id: string = 'id';
  private location(): Location {
    return { id: this.id, name: this.name, lat: this.lat, lon: this.lat };
  }
  async getArrivalBoardWithid(id: string, date: string): Promise<Board[]> {
    return [
      { ...this.board(), boardId: id, dateTime: date },
      { ...this.board(), boardId: id, dateTime: date },
    ];
  }
  async getDepartureBoardWithid(id: string, date: string): Promise<Board[]> {
    return [
      { ...this.board(), boardId: id, dateTime: date },
      { ...this.board(), boardId: id, dateTime: date },
    ];
  }

  async getJourneyDetailsWithid(id: string): Promise<TrainLocation[]> {
    return [
      { ...this.trainLocation(), stopId: id },
      { ...this.trainLocation(), stopId: id },
    ];
  }
  async getLocation(name: string): Promise<Location[]> {
    return [
      { ...this.location(), name },
      { ...this.location(), name },
    ];
  }
}
