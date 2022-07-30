export interface IDocument {
  id: string;
  title: string;
  type: "libro" | "ponencia" | "artículo científico";
  date: number;
  autors: string[];
  editorial: string;
}
