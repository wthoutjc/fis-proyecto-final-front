export interface IDocument {
  id: number;
  title: string;
  type: "libro" | "ponencia" | "artículo científico";
  date: number;
  autors: string[];
  editorial: string;
}
