import {
  Box,
  Grid,
  Typography,
  capitalize,
  IconButton,
  Tooltip,
} from "@mui/material";
import { IPublication } from "../../../interfaces";

// Icons
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

interface Props {
  document: IPublication;
}

const DetailsEntry = ({ document }: Props) => {
  const {
    id,
    name,
    description,
    archived,
    createdAt,
    idISBN,
    idSSN,
    inPhysical,
    stock,
    type,
    file,
  } = document;

  return (
    <Box sx={{ p: 2, backgroundColor: "#123" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        justifyContent={"center"}
        sx={{ mb: 2 }}
      >
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            ID:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            {id} - {idISBN || idSSN}{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Propiedades</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Título
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Descripción
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{description}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Propietario
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">creador</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Tipo
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{capitalize(type)}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Creado el
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{createdAt}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Archivado
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{archived ? "Si" : "No"}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Stock
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{stock}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Existencia en físico
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{inPhysical ? "Sí" : "No"}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            PDF
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {file ? (
            <Typography variant="body1">
              <Tooltip
                title="Ir al PDF"
                onClick={() => {
                  const w = window.open(file.documentLink, "_blank");
                  if (w) {
                    w.focus();
                  }
                }}
              >
                <IconButton>
                  <PictureAsPdfIcon />
                </IconButton>
              </Tooltip>
            </Typography>
          ) : (
            <Typography variant="body1" color="white">
              No tiene link
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export { DetailsEntry };
