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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

const formSchema = Yup.object().shape({});

const NewEntry = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDocument>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      autores: [],
    },
  });

  const handleNewDocument = (registerDocument: RegisterDocument) => {
    console.log(registerDocument);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Nuevo documento
      </Typography>
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
            {...register("date", {
              required: "La fecha de publicación es un campo requerido",
            })}
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
            <Button variant="contained" endIcon={<PeopleAltIcon />}>
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
                  {...register("type", {
                    required: "El tipo de documento es un campo requerido",
                  })}
                  control={<Radio />}
                  label="Libro"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="ponencia"
                  {...register("type", {
                    required: "El tipo de documento es un campo requerido",
                  })}
                  control={<Radio />}
                  label="Ponencia"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  value="artículo científico"
                  {...register("type", {
                    required: "El tipo de documento es un campo requerido",
                  })}
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
                sx={{ mb: 2 }}
              >
                Nota: los documentos de tipo ponencia y artículo científico
                tendrán un campo adicional para la revista o conferencia en la
                que fueron publicados.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
              >
                Nota: los documentos de tipo libro tendrán un campo adicional
                para la editorial.
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
            {...register("editorial", {
              required: "La editorial es un campo requerido",
            })}
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
