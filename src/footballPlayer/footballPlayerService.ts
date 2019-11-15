import { Injectable } from '@nestjs/common';
import { FootballPlayerModel, Positions } from './footballPlayerModel';
import { int, float } from '../customtype';

const id: string = '123';
const name: string = 'Ozil';
const age: int = 27;
const position: Positions = Positions.AMF;
const isInjury: boolean = false;
const salary: float = 35.5;
const information: string | null = null;
const createModel = (uid: string): FootballPlayerModel => ({
  id: uid,
  name,
  age,
  position,
  isInjury,
  salary,
  information,
});
@Injectable()
export class FootballPlayerService {
  async find(): Promise<FootballPlayerModel[]> {
    return [createModel(id), createModel(id)];
  }
  async findAge(usia: int): Promise<FootballPlayerModel[]> {
    const one = createModel(id);
    const two = createModel(id);
    return [{ age: usia, ...one }, { age: usia, ...two }];
  }
  async add(body: FootballPlayerModel): Promise<FootballPlayerModel> {
    return body;
  }
  async update(body: FootballPlayerModel): Promise<FootballPlayerModel> {
    return body;
  }
  async delete(body: FootballPlayerModel): Promise<FootballPlayerModel> {
    return body;
  }
}
