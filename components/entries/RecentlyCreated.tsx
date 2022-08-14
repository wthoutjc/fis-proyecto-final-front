import { Box, Typography } from "@mui/material";

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
        En construcción
        {/* {DATA.map((document, i) => (
          <Card key={i} document={document} />
        ))} */}
      </Box>
    </Box>
  );
};

export { RecentlyCreated };
