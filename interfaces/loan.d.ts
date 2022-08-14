// Intefaces
import { IPublication, IUser } from "./";

export interface ILoan {
  id: number;
  returned: boolean;
  returnDate: string;
  user: IUser;
  publication: IPublication;
}
