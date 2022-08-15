import { Box, Typography } from "@mui/material";

// Components
import { CTable } from "../../components/ui/table";

// Interfaces
import { IPublication } from "../../interfaces";

interface Props {
  publications: IPublication[];
}

const Explore = ({ publications }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Explorar
      </Typography>
      <CTable data={publications || []} />
    </Box>
  );
};

export { Explore };
