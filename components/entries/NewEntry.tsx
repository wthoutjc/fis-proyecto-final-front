import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

// Redux
import { useAppSelector } from "../../hooks";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import QrCodeIcon from "@mui/icons-material/QrCode";

// Interfaces
import { IAuthor } from "../../interfaces";
import { useState } from "react";

interface RegisterDocument {
  name: string;
  description: string;
  type: "book" | "paper" | "article";
  idISBN: string | null;
  idSSN: string | null;
  file: FileList | null;
  authorId: number | null;
}

interface Props {
  authors: IAuthor[];
}

const NewEntry = ({ authors }: Props) => {
  const [typeFile, setTypeFile] = useState("libro");
  const [loading, setLoading] = useState(false);

  const { accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDocument>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFile(event.target.value);
  };

  const handleNewDocument = async (registerDocument: RegisterDocument) => {
    setLoading(true);
    const data = new FormData();
    data.append("name", registerDocument.name);
    data.append("description", registerDocument.description);
    data.append("type", registerDocument.type);

    if (registerDocument.file) data.append("file", registerDocument.file[0]);
    if (registerDocument.idISBN) data.append("idISBN", registerDocument.idISBN);
    if (registerDocument.idSSN) data.append("idSSN", registerDocument.idSSN);
    if (registerDocument.authorId)
      data.append("authorId", String(registerDocument.authorId));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/publications`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
      }
    );
    if (response) setLoading(false);
    const result = await response.json();
  };

  return (
    <Box sx={{ p: 2, width: "70%" }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Nuevo documento
      </Typography>
      <form onSubmit={handleSubmit(handleNewDocument)}>
        <Box sx={{ backgroundColor: "#222f3e", p: 3, borderRadius: 2 }}>
          <TextField
            fullWidth
            type="text"
            autoComplete="name"
            sx={{ marginBottom: "1em" }}
            placeholder="Nombre"
            label="Nombre *"
            error={!!errors.name}
            helperText={
              !!errors.name
                ? errors.name.message
                : "Escribe el nombre del documento"
            }
            {...register("name", {
              required: "El nombre es un campo requerido",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            type="text"
            autoComplete="description"
            sx={{ marginBottom: "1em" }}
            placeholder="Descripción"
            label="Descripción *"
            error={!!errors.name}
            multiline
            rows={3}
            helperText={
              !!errors.description
                ? errors.description.message
                : "Escribe la descripción del documento"
            }
            {...register("description", {
              required: "La descripción es un campo requerido",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <FormControl sx={{ width: "70%", marginBottom: "1em" }}>
              <InputLabel id="autores-label">Autor</InputLabel>
              <Select
                labelId="autores-label"
                id="autores-label"
                label="Autor"
                defaultValue={""}
                {...register("authorId")}
                startAdornment={
                  <InputAdornment position="start">
                    <PeopleAltIcon />
                  </InputAdornment>
                }
              >
                {authors.map((author, i) => (
                  <MenuItem key={i} value={author.id}>
                    <ListItemText primary={author.name} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Seleccione el autor</FormHelperText>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent={"space-between"} sx={{ mb: 2 }}>
            <FormControl>
              <FormLabel id="tipo-doc">Tipo de documento *</FormLabel>
              <RadioGroup
                aria-labelledby="tipo-doc"
                defaultValue="libro"
                name="tipo-libro"
                onChange={handleChange}
              >
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="book"
                  {...register("type")}
                  control={<Radio />}
                  label="Libro"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="paper"
                  {...register("type")}
                  control={<Radio />}
                  label="Ponencia"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="article"
                  {...register("type")}
                  control={<Radio />}
                  label="Artículo científico"
                />
              </RadioGroup>
            </FormControl>

            <Box sx={{ color: "white", width: "50%" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
                fontWeight={200}
                fontSize={12}
                sx={{ mb: 2 }}
              >
                Nota:{" "}
                <i>
                  los documentos de tipo artículo científico tendrán
                  un código diferente al de los libros y ponencias.
                </i>
              </Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            type="text"
            autoComplete={typeFile === "article" ? "SSN" : "ISBN"}
            sx={{ marginBottom: "1em" }}
            placeholder={typeFile === "article" ? "Código SSN" : " Código ISBN"}
            label={typeFile === "article" ? "Código SSN" : " Código ISBN"}
            error={!!errors.type}
            helperText={
              !!errors.type
                ? errors.type.message
                : `Escribe el ${
                    typeFile === "article" ? "código SSN" : " código ISBN"
                  } del documento`
            }
            {...register(`${typeFile === "article" ? "idSSN" : "idISBN"}`)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <QrCodeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            type="file"
            hidden
            autoComplete="file"
            sx={{ marginBottom: "1em" }}
            placeholder="Archivo"
            label="Archivo"
            error={!!errors.file}
            helperText={
              !!errors.file ? errors.file.message : "Selecciona tu archivo"
            }
            {...register("file")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachFileIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            color="success"
            variant="contained"
          >
            {loading ? "Cargando..." : "Añadir"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewEntry };
