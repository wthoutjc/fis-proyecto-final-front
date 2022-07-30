import { Box, Typography } from "@mui/material";

// Components
import { Card } from "../../components/entries";

// Interfaces
import { IDocument } from "../../interfaces";

const OwnDocs = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600}>
        Mis documentos
      </Typography>
      <Box display="flex" sx={{ overflow: "auto", mb: 2 }}>
        {DATA_TEST.map((document, i) => (
          <Card key={i} document={document} />
        ))}
      </Box>
    </Box>
  );
};

export { OwnDocs };

const DATA_TEST: IDocument[] = [
  {
    title: "Document 1",
    type: "libro",
    date: 123,
    autors: ["Autor 1", "Autor 2"],
    editorial: "Editorial 1",
  },
  {
    title: "Document 2",
    type: "artículo científico",
    date: 123,
    autors: ["Autor 3", "Autor 4"],
    editorial: "Editorial 2",
  },
  {
    title: "Document 2",
    type: "ponencia",
    date: 123,
    autors: ["Autor 5", "Autor 6"],
    editorial: "Editorial 3",
  },
  {
    title: "Document 4",
    type: "libro",
    date: 123,
    autors: ["Autor 7", "Autor 8"],
    editorial: "Editorial 4",
  },
  {
    title: "Document 5",
    type: "artículo científico",
    date: 123,
    autors: ["Autor 9", "Autor 10"],
    editorial: "Editorial 5",
  },
  {
    title: "Document 6",
    type: "artículo científico",
    date: 123,
    autors: ["Autor 11", "Autor 12"],
    editorial: "Editorial 6",
  },
  {
    title: "Document 7",
    type: "libro",
    date: 123,
    autors: ["Autor 13", "Autor 14"],
    editorial: "Editorial 7",
  },
];
