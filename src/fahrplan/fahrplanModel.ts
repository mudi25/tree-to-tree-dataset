import { float } from '../customType';

export interface Board {
  boardId: string;
  dateTime: string;
  detailsId: string;
  name: string;
  origin: string;
  stopId: string;
  stopName: string;
  track: string;
  type: string;
}
export interface Location {
  id: string;
  lat: float;
  lon: float;
  name: string;
}
export interface TrainLocation {
  arrTime: string;
  depTime: string;
  lat: float;
  lon: float;
  operator: string;
  stopId: string;
  stopName: string;
  train: string;
  type: string;
}
