import { int } from '../customtype';
export interface MobilModel {
  id: string;
  brand: string;
  tipe: string;
  harga: int;
  stock: int;
}
export interface MobilModelManipulasi {
  brand: string;
  tipe: string;
  harga: int;
  stock: int;
}
