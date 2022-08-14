import { Box, Typography } from "@mui/material";

// Interfaces
import { ILoan } from "../../interfaces";

// Components
import { Card } from "../entries";

interface Props {
  loans: ILoan[];
}

const Loans = ({ loans }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Mis préstamos</Typography>
      <Box>
        {loans.map((loan) => (
          <Card key={loan.id} document={loan.publication} />
        ))}
      </Box>
    </Box>
  );
};

export { Loans };
