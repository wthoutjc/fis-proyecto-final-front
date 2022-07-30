import { Box, Typography } from "@mui/material";

// Components
import { Card } from "../../components/entries";

// Interfaces
import { IDocument } from "../../interfaces";

const OwnDocs = () => {
  return (
    <Box sx={{ p: 2, mb: 2 }}>
      <Typography variant="body1" fontWeight={600}>
        Mis documentos
      </Typography>
      <Box display="flex" sx={{ overflow: "auto", mb: 2 }}>
        {DATA.map((document, i) => (
          <Card key={i} document={document} />
        ))}
      </Box>
    </Box>
  );
};

export { OwnDocs };

const DATA: IDocument[] = [
  {
    id: "1",
    title: "Test 1",
    type: "ponencia",
    ownerName: "Pepito 1 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 1 Perez",
    dateCreated: 12344,
    dateLastModified: 12344,
    autors: ["Test"],
    editorial: "Test 1",
  },
  {
    id: "2",
    title: "Test 2",
    type: "libro",
    ownerName: "Pepito 2 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 2 Perez",
    dateCreated: 12344,
    dateLastModified: 12344,
    autors: ["Test", "Test 3"],
    editorial: "Test 2",
  },
  {
    id: "3",
    title: "Test 3",
    type: "artículo científico",
    ownerName: "Pepito 3 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 3 Perez",
    dateCreated: 32344,
    dateLastModified: 32344,
    autors: ["Test", "Test 2"],
    editorial: "Test 3",
  },
  {
    id: "4",
    title: "Test 4",
    type: "libro",
    ownerName: "Pepito 4 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 4 Perez",
    dateCreated: 42344,
    dateLastModified: 42344,
    autors: ["Test"],
    editorial: "Test 4",
  },
];
