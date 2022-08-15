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
        {loans ? loans.map((loan) => (
          <Card key={loan.id} document={loan.publication} />
        )) : "No hay préstamos"}
      </Box>
    </Box>
  );
};

export { Loans };
