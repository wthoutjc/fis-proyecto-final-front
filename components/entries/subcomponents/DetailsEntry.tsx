import { Box, Grid, Typography, capitalize, Button } from "@mui/material";
import { IDocument } from "../../../interfaces";

interface Props {
  document: IDocument;
}

const DetailsEntry = ({ document }: Props) => {
  const {
    id,
    typeId,
    title,
    ownerName,
    type,
    dateCreated,
    dateLastModified,
    editorial,
    autors,
    lastModifiedName,
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
            {typeId}:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{id}</Typography>
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
          <Typography variant="body1">{title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Propietario
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{ownerName}</Typography>
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
          <Typography variant="body1">{dateCreated}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Última modificación
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            {dateLastModified} por {lastModifiedName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Editorial
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{editorial}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="text.secondary">
            Autor(es)
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            {autors.map((autor) => autor.concat(", "))}
          </Typography>
        </Grid>
      </Grid>
      <Button variant="contained">Gestionar autores</Button>
    </Box>
  );
};

export { DetailsEntry };
