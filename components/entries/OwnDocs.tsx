import { Box, Typography } from "@mui/material";

// Components
import { Card } from "../../components/entries";

// Interfaces
import { IPublication } from "../../interfaces";

interface Props {
  publications: IPublication[];
}

const OwnDocs = ({ publications }: Props) => {
  return (
    <Box sx={{ p: 2, mb: 2 }}>
      <Typography variant="body1" fontWeight={600}>
        Mis documentos
      </Typography>
      <Box display="flex" sx={{ overflow: "auto", mb: 2 }}>
        {publications.map((document, i) => (
          <Card key={i} document={document} />
        ))}
      </Box>
    </Box>
  );
};

export { OwnDocs };
