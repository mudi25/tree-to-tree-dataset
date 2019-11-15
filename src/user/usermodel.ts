import { int } from '../customtype';
export enum UserJenisKelaminType {
  L = 'L',
  P = 'P',
}
export interface UserModelCreate {
  email: string;
  nama: string;
  alamat: string;
  nomorHp: string;
  umur: int;
  jenisKelamin: UserJenisKelaminType;
}
export interface UserModel {
  id: string;
  email: string;
  nama: string;
  alamat: string;
  nomorHp: string;
  umur: int;
  jenisKelamin: UserJenisKelaminType;
  isPremium: boolean;
}
