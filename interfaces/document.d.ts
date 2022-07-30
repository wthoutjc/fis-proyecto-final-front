export interface IDocument {
  title: string;
  type: "libro" | "ponencia" | "artículo científico";
  date: number;
  autors: string[];
  editorial: string;
}
