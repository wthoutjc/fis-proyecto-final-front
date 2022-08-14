import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

// Interface
import { IAuthor } from "../../interfaces";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  author: IAuthor;
}

const Author = ({ author }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {author.alive ? "Vivo" : "Muerto"}
          </Typography>
          <Typography variant="h5" component="div">
            {author.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {author.email}
          </Typography>
          <Typography variant="body2">{author.phone}</Typography>
          <Typography variant="body2">{author.address}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export { Author };
