import { Injectable } from '@nestjs/common';
import { MobilModel, MobilModelManipulasi } from './mobilModel';
import { int } from 'src/customtype';
const brand = 'HONDA';
const tipe = 'SPORT';
const harga = 100000000;
const stock = 100;
const mobilModelCreate: MobilModelManipulasi = {
  brand,
  tipe,
  harga,
  stock,
};
const createMobilModel = (id: string): MobilModel => ({
  id,
  ...mobilModelCreate,
});

@Injectable()
export class MobilService {
  async findMobilById(id: string): Promise<MobilModel> {
    return createMobilModel(id);
  }
  async findMobil(page: int): Promise<MobilModel[]> {
    return [createMobilModel('123'), createMobilModel('456')];
  }
  async findMobilByMaxPrize(page: int, hargas: int): Promise<MobilModel[]> {
    const one = createMobilModel('123');
    const two = createMobilModel('456');
    return [{ ...one, harga: hargas }, { ...two, harga: hargas }];
  }
  async createNewMobil(body: MobilModelManipulasi): Promise<void> {
    return;
  }
  async updateMobil(
    id: string,
    body: MobilModelManipulasi,
  ): Promise<MobilModel> {
    return { id, ...body };
  }
  async deleteMobil(id: string): Promise<string> {
    return id;
  }
}
