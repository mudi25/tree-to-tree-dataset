import { Injectable } from '@nestjs/common';
import { UserJenisKelaminType, UserModel, UserModelCreate } from './usermodel';
import { int } from 'src/customtype';

const nama = 'Mudi';
const alamat = 'BTP';
const nomorHp = '081354756912';
const email = 'mudiarta.tauda52@gmail.com';
const isPremium = true;
const jenisKelamin = UserJenisKelaminType.L;
const umur = 24;
const userModelCreate: UserModelCreate = {
  nama,
  alamat,
  nomorHp,
  email,
  jenisKelamin,
  umur,
};
const createUserModel = (id: string): UserModel => ({
  id,
  ...userModelCreate,
  isPremium,
});

@Injectable()
export class UserService {
  async findUserById(id: string): Promise<UserModel> {
    return createUserModel(id);
  }
  async findUser(page: int): Promise<UserModel[]> {
    return [createUserModel('123'), createUserModel('456')];
  }
  async findUserByJenisKelamin(
    page: int,
    jenisKelamins: UserJenisKelaminType,
  ): Promise<UserModel[]> {
    const one = createUserModel('123');
    const two = createUserModel('456');
    return [
      { ...one, jenisKelamin: jenisKelamins },
      { ...two, jenisKelamin: jenisKelamins },
    ];
  }
  async createNewUser(body: UserModelCreate): Promise<void> {
    return;
  }
  async updateUser(id: string, body: UserModelCreate): Promise<UserModel> {
    return { id, ...body, isPremium };
  }
  async deleteUser(id: string): Promise<string> {
    return id;
  }
}
