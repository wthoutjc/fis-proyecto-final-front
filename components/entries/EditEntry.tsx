import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
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
  Tooltip,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

// Redux
import { useAppSelector } from "../../hooks";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import QrCodeIcon from "@mui/icons-material/QrCode";
import InventoryIcon from "@mui/icons-material/Inventory";

// Interfaces
import { IPublication, IAuthor } from "../../interfaces";

interface Props {
  document: IPublication;
  authors: IAuthor[];
}

interface UpdateDocument {
  name: string;
  description: string;
  type: string;
  authorId: string;
  idISBN: string | null;
  idSSN: string | null;
  file: FileList | null;
  stock: number | null;
  inPhysical: boolean | null;
}

const EditEntry = ({ document, authors }: Props) => {
  const [typeFile, setTypeFile] = useState("libro");
  const [loading, setLoading] = useState(false);

  const { accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateDocument>({
    defaultValues: {
      name: document.name,
      description: document.description,
      type: document.type,
      idISBN: document.idISBN,
      idSSN: document.idSSN,
      file: null,
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFile(event.target.value);
  };

  const handleUpdateDocument = async (updateDocument: UpdateDocument) => {
    setLoading(true);
    const inPhysical = typeof updateDocument.inPhysical === "string";

    const data = new FormData();
    data.append("name", updateDocument.name);
    data.append("description", updateDocument.description);
    data.append("type", updateDocument.type);

    if (updateDocument.file) data.append("file", updateDocument.file[0]);
    if (updateDocument.idISBN) data.append("idISBN", updateDocument.idISBN);
    if (updateDocument.idSSN) data.append("idSSN", updateDocument.idSSN);
    if (updateDocument.authorId)
      data.append("authorId", String(updateDocument.authorId));
    if (updateDocument.stock)
      data.append("stock", String(updateDocument.stock));
    if (updateDocument.inPhysical)
      data.append("inPhysical", String(inPhysical));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/publications/${document.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
      }
    );
    if (response) setLoading(false);

    const result = await response.json();
    console.log(result);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#123" }}>
      <form onSubmit={handleSubmit(handleUpdateDocument)}>
        <Box sx={{ backgroundColor: "#222f3e", p: 3, borderRadius: 2 }}>
          <TextField
            fullWidth
            type="text"
            autoComplete="name"
            sx={{ marginBottom: "1em" }}
            placeholder="Nombre"
            label="Nombre"
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
            label="Descripción"
            error={!!errors.description}
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
                defaultValue={document.type}
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
                  los documentos de tipo artículo científico tendrán un código
                  diferente al de los libros y ponencias.
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
            type="number"
            autoComplete="stock"
            sx={{ marginBottom: "1em" }}
            placeholder="Stock"
            label="Stock"
            error={!!errors.stock}
            helperText={
              !!errors.stock
                ? errors.stock.message
                : "Escribe el stock del documento"
            }
            {...register("stock", {
              required: "El stock es un campo requerido",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InventoryIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="body2" color="text.secondary" fontWeight={200}>
            Nota:{" "}
            <i>
              el stock es la cantidad de documentos que se tienen disponibles
              para prestar.
            </i>
          </Typography>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="body1" fontWeight={500} color="white">
              ¿El documento es físico?
            </Typography>
            <Controller
              name="inPhysical"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <Tooltip title="Sí">
                  <Checkbox
                    {...field}
                    {...register("inPhysical")}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Tooltip>
              )}
            />
          </Box>
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
            {loading ? "Cargando..." : "Actualizar"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { EditEntry };
