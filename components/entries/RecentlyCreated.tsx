import { Box, Typography } from "@mui/material";
import { IPublication } from "../../interfaces";

// Component
import { Card } from "../entries";

interface Props {
  publications: IPublication[];
}

const RecentlyCreated = ({ publications }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Agregados recientemente
      </Typography>
      <Box
        display={"flex"}
        flexDirection="column"
        sx={{ maxHeight: "100vh", overflow: "auto" }}
      >
        {publications.map((document, i) => (
          <Card key={i} document={document} />
        ))}
      </Box>
    </Box>
  );
};

export { RecentlyCreated };
