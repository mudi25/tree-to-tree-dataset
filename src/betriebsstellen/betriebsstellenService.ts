import {} from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import { Station } from './betriebsstellenModel';
import { State, TYPE } from './betriebsstellenCustomType';
import { int } from '../customType';

@Injectable()
export class Service {
  private RB: int = 1;
  private UIC: string = 'UIC';
  private abbrev: string = 'abbrev';
  private borderStation: boolean = true;
  private id: int = 123;
  private locationCode: string = 'location code';
  private name: string = 'name';
  private short: string = 'short';
  private status: State = State.FORMERLY;
  private timeTableRelevant: boolean = true;
  private type: TYPE = TYPE.ABZW;
  private validFrom: string = 'valid from';
  private validTill: string = 'valid till';
  private dummyData(): Station {
    return {
      RB: this.RB,
      UIC: this.UIC,
      abbrev: this.abbrev,
      borderStation: this.borderStation,
      id: this.id,
      locationCode: this.locationCode,
      name: this.name,
      short: this.short,
      status: this.status,
      timeTableRelevant: this.timeTableRelevant,
      type: this.type,
      validFrom: this.validFrom,
      validTill: this.validTill,
    };
  }
  async getBetriebsstellen(): Promise<Station[]> {
    return [this.dummyData(), this.dummyData()];
  }
  async getBetriebsstellenAbbrev(abbrev: string): Promise<Station[]> {
    return [
      { ...this.dummyData(), abbrev },
      { ...this.dummyData(), abbrev },
    ];
  }
}
