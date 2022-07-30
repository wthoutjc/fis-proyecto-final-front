import { Box, Typography } from "@mui/material";
import { IDocument } from "../../interfaces";

// Component
import { Card } from "../entries";

const RecentlyCreated = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Agregados recientemente
      </Typography>
      <Box
        display={"flex"}
        flexDirection="column"
        sx={{ maxHeight: "750px", overflow: "auto" }}
      >
        {DATA.map((document, i) => (
          <Card key={i} document={document} />
        ))}
      </Box>
    </Box>
  );
};

export { RecentlyCreated };

const DATA: IDocument[] = [
  {
    id: "1",
    typeId: "ISBN",
    title: "Test 1",
    type: "libro",
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
    typeId: "ISBN",
    title: "Test 2",
    type: "libro",
    ownerName: "Pepito 2 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 2 Perez",
    dateCreated: 12344,
    dateLastModified: 12344,
    autors: ["Test"],
    editorial: "Test 2",
  },
  {
    id: "3",
    typeId: "ISBN",
    title: "Test 3",
    type: "libro",
    ownerName: "Pepito 3 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 3 Perez",
    dateCreated: 32344,
    dateLastModified: 32344,
    autors: ["Test"],
    editorial: "Test 3",
  },
  {
    id: "4",
    typeId: "ISBN",
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
