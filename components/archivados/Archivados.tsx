import { Box, Typography } from "@mui/material";

// Interfaces
import { IPublication } from "../../interfaces";

// Components
import { Archivado } from "./";

interface Props {
  publications: IPublication[];
}

const Archivados = ({ publications }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600}>
        Documentos archivados
      </Typography>
      {publications ? (
        publications.map((publication) => {
          return <Archivado key={publication.id} publication={publication} />;
        })
      ) : (
        <Typography></Typography>
      )}
    </Box>
  );
};

export { Archivados };
