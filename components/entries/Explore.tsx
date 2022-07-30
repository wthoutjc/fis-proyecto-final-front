import { Box, Typography } from "@mui/material";

// Components
import { CTable } from "../../components/ui/table";

// Interfaces
import { IDocument } from "../../interfaces";

const DATA: IDocument[] = [
  {
    id: "1",
    title: "Test 1",
    autors: ["Test"],
    date: 1234,
    editorial: "Test 1",
    type: "libro",
  },
  {
    id: "2",
    title: "Test 2",
    autors: ["Test", "Testt 2"],
    date: 1235,
    editorial: "Test 2",
    type: "ponencia",
  },
  {
    id: "3",
    title: "Test 3",
    autors: ["Test"],
    date: 1233,
    editorial: "Test",
    type: "libro",
  },
  {
    id: "4",
    title: "Test 4",
    autors: ["Test"],
    date: 1238,
    editorial: "Test",
    type: "libro",
  },
];

const Explore = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Explorar
      </Typography>
      <CTable data={DATA} />
    </Box>
  );
};

export { Explore };
