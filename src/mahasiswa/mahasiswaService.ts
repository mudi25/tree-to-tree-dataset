import { Injectable } from '@nestjs/common';
import {
  MahasiswaModel,
  MahasiswaJenisKelamin,
  MahasiswaJurusan,
} from './mahasiswaModel';
import { int } from '../customtype';
const nim = 'D032172008';
const nama = 'Mudiarta';
const jurusan = MahasiswaJurusan.TEKNIK;
const jk = MahasiswaJenisKelamin.L;
const createMahasiswaModelWithNim = (dnim: string): MahasiswaModel => ({
  nim: dnim,
  nama,
  jurusan,
  jk,
});
@Injectable()
export class MahasiswaService {
  async findNim(dnim: string): Promise<MahasiswaModel> {
    return createMahasiswaModelWithNim(dnim);
  }
  async find(page: int): Promise<MahasiswaModel[]> {
    return [
      createMahasiswaModelWithNim(nim),
      createMahasiswaModelWithNim('D032172009'),
    ];
  }
  async create(body: MahasiswaModel): Promise<MahasiswaModel> {
    return body;
  }
  async update(id: string, body: MahasiswaModel): Promise<MahasiswaModel> {
    return { nim: id, ...body };
  }
  async delete(id: string): Promise<MahasiswaModel> {
    return createMahasiswaModelWithNim(id);
  }
}
