import {
  Card as MUICard,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";

// Interface
import { IDocument } from "../../interfaces";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  document: IDocument;
}

const Card = ({ document }: Props) => {
  return (
    <MUICard
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 185,
        mr: 2,
        mb: 2,
        mt: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 120, p: 2 }}
        image={
          document.type === "libro"
            ? "/img/libros.png"
            : document.type === "artículo científico"
            ? "/img/research.png"
            : document.type === "ponencia"
            ? "/img/documents.png"
            : "/img/book.png"
        }
        alt="a"
      />
      <Box sx={{ width: "100%", p: 0 }}>
        <CardContent sx={{ paddingBottom: "3px !important" }}>
          <Typography
            gutterBottom
            variant="body1"
            fontWeight={600}
            component="div"
          >
            {document.title}
          </Typography>
          {document.autors.map((autor, i) => (
            <Typography key={i} variant="body2" color="text.primary">
              {autor}
            </Typography>
          ))}

          <Typography variant="body2" color="text.secondary">
            {document.date}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button size="small" variant="contained">
          Ver
        </Button>
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </MUICard>
  );
};

export { Card };
