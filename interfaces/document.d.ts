export interface IPublication {
  id: number;
  name: string;
  description: string;
  author: string;
  type: string;
  idISBN: string | null;
  idSSN: string | null;
  archivied: boolean;
  inPhysical: boolean;
  stock: number;
  file: File | null;
  createdAt: string;
}
