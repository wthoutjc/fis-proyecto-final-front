import { Box } from "@mui/material";

// Interfaces
import { IPublication } from "../../interfaces";

// Components
import { Card } from "../../components/entries";

interface Props {
  publication: IPublication;
}

const Archivado = ({ publication }: Props) => {
  return (
    <Box>
      <Card document={publication} />
    </Box>
  );
};

export { Archivado };
