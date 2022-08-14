import { Box, Grid, Typography, capitalize, Button } from "@mui/material";
import { IPublication } from "../../../interfaces";

interface Props {
  document: IPublication;
}

const DetailsEntry = ({ document }: Props) => {
  const {
    id,
    name,
    description,
    archivied,
    createdAt,
    file,
    idISBN,
    idSSN,
    inPhysical,
    stock,
    type,
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
          <Typography variant="body1">{archivied}</Typography>
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
      </Grid>
    </Box>
  );
};

export { DetailsEntry };
