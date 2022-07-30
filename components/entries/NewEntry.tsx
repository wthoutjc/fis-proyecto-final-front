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
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

// Redux
import { useAppSelector } from "../../hooks";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

interface RegisterDocument {
  title: string;
  date: number;
  autores: string[];
  type: string;
  editorial: string;
}

const AUTORES = [
  { name: "Oliver Hansen" },
  { name: "Van Henry" },
  { name: "April Tucker" },
  { name: "Ralph Hubbard" },
  { name: "Omar Alexander" },
  { name: "Carlos Abbott" },
  { name: "Miriam Wagner" },
  { name: "Bradley Wilkerson" },
  { name: "Virginia Andrews" },
  { name: "Kelly Snyder" },
];

const NewEntry = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDocument>();

  const { user } = useAppSelector((state) => state.auth);
  const { name } = user;

  const handleNewDocument = (registerDocument: RegisterDocument) => {
    console.log(registerDocument);
  };

  return (
    <Box sx={{ p: 2, width: "70%" }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Nuevo documento
      </Typography>
      <ul style={{ marginLeft: 20 }}>
        <li>
          <Typography variant="body2" fontWeight={400} sx={{ mb: 2 }}>
            {name}, acá podrás crear un nuevo documento, para ello, solo es
            obligatorio poner el título del documento, luego de eso podrás
            añadirlo a tu libreria donde otros podrán verlo y modificarlo.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" fontWeight={400} sx={{ mb: 2 }}>
            Sólo tú puedes borrar los documentos que creas.
          </Typography>
        </li>
      </ul>
      <form onSubmit={handleSubmit(handleNewDocument)}>
        <Box sx={{ backgroundColor: "#222f3e", p: 3, borderRadius: 2 }}>
          <TextField
            fullWidth
            type="text"
            autoComplete="title"
            sx={{ marginBottom: "1em" }}
            placeholder="Título"
            label="Título"
            error={!!errors.title}
            helperText={
              !!errors.title
                ? errors.title.message
                : "Escribe el título del documento"
            }
            {...register("title", {
              required: "El título es un campo requerido",
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
            type="date"
            autoComplete="Fecha de publicación"
            sx={{ marginBottom: "1em" }}
            placeholder="Fecha de publicación"
            label="Fecha de publicación"
            error={!!errors.date}
            helperText={
              !!errors.date
                ? errors.date.message
                : "Selecciona la fecha de publicación del documento"
            }
            {...register("date")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Controller
              control={control}
              name="autores"
              defaultValue={[]}
              render={({ field }) => (
                <FormControl sx={{ width: "70%", marginBottom: "1em" }}>
                  <InputLabel id="autores-label">Autor(es)</InputLabel>
                  <Select
                    {...field}
                    labelId="autores-label"
                    id="autores-label"
                    value={field.value}
                    label="Autor(es)"
                    multiple
                    defaultValue={[]}
                    renderValue={(selected) => selected.join(", ")}
                    startAdornment={
                      <InputAdornment position="start">
                        <PeopleAltIcon />
                      </InputAdornment>
                    }
                  >
                    {AUTORES.map((autor, i) => (
                      <MenuItem key={i} value={autor.name}>
                        <Checkbox
                          checked={field.value.indexOf(autor.name) >= 0}
                        />
                        <ListItemText primary={autor.name} />
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    Seleccione uno o varios autores
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ ml: 1 }}
              endIcon={<PeopleAltIcon />}
            >
              Gestionar autores
            </Button>
          </Box>
          <Box display="flex" justifyContent={"space-between"} sx={{ mb: 2 }}>
            <FormControl>
              <FormLabel id="tipo-doc">Tipo de documento</FormLabel>
              <RadioGroup
                aria-labelledby="tipo-doc"
                defaultValue="libro"
                name="tipo-libro"
              >
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="libro"
                  {...register("type")}
                  control={<Radio />}
                  label="Libro"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="ponencia"
                  {...register("type")}
                  control={<Radio />}
                  label="Ponencia"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="artículo científico"
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
                  los documentos de tipo ponencia y artículo científico tendrán
                  un campo adicional para la revista o conferencia en la que
                  fueron publicados.
                </i>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
                fontWeight={200}
                fontSize={12}
              >
                Nota:{" "}
                <i>
                  los documentos de tipo ponencia y artículo científico tendrán
                  un campo adicional para la revista o conferencia en la que
                  fueron publicados.
                </i>
              </Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            type="text"
            autoComplete="editorial"
            sx={{ marginBottom: "1em" }}
            placeholder="Editorial"
            label="Editorial"
            error={!!errors.editorial}
            helperText={
              !!errors.editorial
                ? errors.editorial.message
                : "Escribe el nombre de la editorial"
            }
            {...register("editorial")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth color="success" variant="contained">
            Añadir
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewEntry };
