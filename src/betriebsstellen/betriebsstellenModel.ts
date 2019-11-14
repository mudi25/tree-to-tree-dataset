import { int } from '../customType';
import { State, TYPE } from './betriebsstellenCustomType';

export interface Station {
  RB: int;
  UIC: string;
  abbrev: string;
  borderStation: boolean;
  id: int;
  locationCode: string;
  name: string;
  short: string;
  status: State;
  timeTableRelevant: boolean;
  type: TYPE;
  validFrom: string;
  validTill: string;
}
