import { int, float } from '../customtype';

export enum Positions {
  CF = 'CF',
  SS = 'SS',
  LWF = 'LWF',
  RWF = 'RWF',
  AMF = 'AMF',
  RMF = 'RMF',
  LMF = 'LMF',
  CMF = 'CMF',
  DMF = 'DMF',
  CB = 'CB',
  RB = 'RB',
  LB = 'LB',
}
export interface FootballPlayerModel {
  id: string;
  name: string;
  age: int;
  position: Positions;
  isInjury: boolean;
  salary: float;
  information: string | null;
}
