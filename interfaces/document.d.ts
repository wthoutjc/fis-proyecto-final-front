export interface IDocument {
  id: string;
  typeId: "ISBN" | "SSN";
  title: string;
  type: "libro" | "ponencia" | "artículo científico";
  ownerName: string;
  ownerEmail: string;
  lastModifiedName: string;
  dateLastModified: number;
  dateCreated: number;
  autors: string[];
  editorial: string;
}
