// Interfaces
import { IAuthor, IFile } from "./";

export interface IPublication {
  id: number;
  name: string;
  description: string;
  author: IAuthor;
  type: string;
  idISBN: string | null;
  idSSN: string | null;
  archived: boolean;
  inPhysical: boolean;
  stock: number;
  file: IFile;
  createdAt: string;
}
