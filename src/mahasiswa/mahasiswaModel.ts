export enum MahasiswaJurusan {
  TEKNIK = 'TEKNIK',
  HUKUM = 'HUKUM',
  KEDOKTERAN = 'KEDOKTERAN',
}
export enum MahasiswaJenisKelamin {
  L = 'L',
  P = 'P',
}
export interface MahasiswaModel {
  nim: string;
  nama: string;
  jurusan: MahasiswaJurusan;
  jk: MahasiswaJenisKelamin;
}
