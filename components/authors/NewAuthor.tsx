import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

// React hook form
import { useForm } from "react-hook-form";

// Interfaces
import { IAuthor } from "../../interfaces";

// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

// Redux
import { useAppSelector } from "../../hooks";

const NewAuthor = () => {
  const [loading, setLoading] = useState(false);
  const [aliveValue, setAliveValue] = useState(true);

  const { accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthor>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAliveValue(event.target.value === "true");
  };

  const handleNewAuthor = async (authorData: IAuthor) => {
    const alive = String(authorData.alive) === "true";
    const newAuthor = {
      ...authorData,
      alive,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(newAuthor),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Box
      sx={{ width: "100%", backgroundColor: "#112233", p: 2, borderRadius: 2 }}
    >
      <form onSubmit={handleSubmit(handleNewAuthor)}>
        <TextField
          fullWidth
          type="text"
          autoComplete="name"
          sx={{ marginBottom: "1em" }}
          placeholder="Nombre"
          label="Nombre *"
          error={!!errors.name}
          helperText={
            !!errors.name ? errors.name.message : "Escribe el nombre del autor"
          }
          {...register("name", {
            required: "El nombre es un campo requerido",
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          type="email"
          autoComplete="email"
          sx={{ marginBottom: "1em" }}
          placeholder="Email"
          label="Email *"
          error={!!errors.email}
          helperText={
            !!errors.email
              ? errors.email.message
              : "Escribe el correo del autor"
          }
          {...register("email", {
            required: "El email es un campo requerido",
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          type="text"
          autoComplete="phone"
          sx={{ marginBottom: "1em" }}
          placeholder="Número de teléfono"
          label="Número de teléfono *"
          error={!!errors.phone}
          helperText={
            !!errors.phone
              ? errors.phone.message
              : "Escribe el número de teléfono del autor"
          }
          {...register("phone", {
            required: "El número de teléfono es un campo requerido",
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          type="text"
          autoComplete="address"
          sx={{ marginBottom: "1em" }}
          placeholder="Dirección"
          label="Dirección *"
          error={!!errors.address}
          helperText={
            !!errors.address
              ? errors.address.message
              : "Escribe la dirección de teléfono del autor"
          }
          {...register("address", {
            required: "La dirección de teléfono es un campo requerido",
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <FormControl>
            <FormLabel id="tipo-doc">Estado</FormLabel>
            <RadioGroup
              aria-labelledby="tipo-doc"
              defaultValue={true}
              name="tipo-libro"
              onChange={handleChange}
            >
              <FormControlLabel
                sx={{ color: "white" }}
                value={true}
                {...register("alive")}
                control={<Radio />}
                label="Vivo"
              />
              <FormControlLabel
                sx={{ color: "white" }}
                value={false}
                {...register("alive")}
                control={<Radio />}
                label="Muerto"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          disabled={loading}
          type="submit"
          fullWidth
          color="success"
          variant="contained"
        >
          {loading ? "Cargando..." : "Añadir"}
        </Button>
      </form>
    </Box>
  );
};

export { NewAuthor };
