import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout, Layout } from "../../../components/layout";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { incrementClicks, newNotification } from "../../../reducers";

// Components
import { ActiveLink } from "../../../components/ui";

// uuid
import { v4 as uuid } from "uuid";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// Interfaces
import { INotification } from "../../../interfaces";
import { validations } from "../../../utils";

// Register - ACTION
import { signUp } from "../../../actions";

interface RegisterInfo {
  email: string;
  name: string;
  lastname: string;
  password: string;
  password2: string;
}

const SignUpPage = () => {
  const dispatch = useAppDispatch();

  const { ux } = useAppSelector((state) => state);

  const currentClicks = useMemo(() => ux.clicks, [ux.clicks]);

  const [clicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInfo>();

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  const handleSignUp = async (registerInfo: RegisterInfo) => {
    const { email, password } = registerInfo;

    signUp(registerInfo);
    // const payload: INotification = {
    //   id: uuid(),
    //   title: "Error:",
    //   message: "Falló el registro",
    //   severity: "error",
    // };
    // dispatch(newNotification(payload));
  };

  return (
    <Layout title={"App - Signup"}>
      <AuthLayout>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Box className={"signup__container"}>
            <Box
              className={
                currentClicks > 1
                  ? "signup__right signup__animation-toLeft"
                  : "signup__right fade-animation"
              }
            >
              <Typography variant="h4">Crear una cuenta</Typography>
              <Box
                sx={{ boxSizing: "border-box", padding: "1em", width: "100%" }}
              >
                <TextField
                  fullWidth
                  type="email"
                  autoComplete="email"
                  sx={{ marginBottom: "1em" }}
                  placeholder="E-mail"
                  label="E-mail"
                  error={!!errors.email}
                  helperText={
                    !!errors.email
                      ? errors.email.message
                      : "Escribe tu e-mail..."
                  }
                  {...register("email", {
                    required: "E-mail es requerido",
                    validate: (val) => validations.isEmail(val),
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
                  autoComplete="name"
                  sx={{ marginBottom: "1em" }}
                  placeholder="Nombre"
                  label="Nombre"
                  error={!!errors.name}
                  helperText={
                    !!errors.name ? errors.name.message : "Escribe tu nombre..."
                  }
                  {...register("name", {
                    required: "Name es requerido",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  autoComplete="lastname"
                  sx={{ marginBottom: "1em" }}
                  placeholder="Apellido"
                  label="Apellido"
                  error={!!errors.lastname}
                  helperText={
                    !!errors.lastname
                      ? errors.lastname.message
                      : "Escribe tu apellido..."
                  }
                  {...register("lastname", {
                    required: "Apellido es requerido",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  type="password"
                  sx={{ marginBottom: "1em" }}
                  placeholder="Contraseña"
                  label="Contraseña"
                  error={!!errors.password}
                  autoComplete="current-password"
                  helperText={
                    !!errors.password
                      ? errors.password.message
                      : "Escribe tu password..."
                  }
                  {...register("password", {
                    required: "Password es requerido",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  type="password"
                  sx={{ marginBottom: "1em" }}
                  placeholder="Confirma contraseña"
                  label="Confirma contraseña"
                  error={!!errors.password2}
                  autoComplete="confirm-password"
                  helperText={
                    !!errors.password2
                      ? errors.password2.message
                      : "Confirma tu contraseña..."
                  }
                  {...register("password2", {
                    required: "This field es requerido",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ThumbUpAltIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button type="submit" variant="contained" fullWidth>
                  RESGISTRARME
                </Button>
              </Box>
            </Box>
            <Box
              className={
                currentClicks > 1
                  ? "signup__left signup__animation-toRight"
                  : "signup__left fade-animation"
              }
            >
              <Typography variant="h4" className="fade-animation">
                ¡Hola, Amigo!
              </Typography>
              <Typography variant="body1" className="fade-animation">
                Digita tus datos personales y comienza a administrat tus
                documentos con nosotros.
              </Typography>
              <ActiveLink href="/auth/login">
                <Button
                  variant={"outlined"}
                  className="fade-animation"
                  size="medium"
                  onClick={() => setClicked(true)}
                >
                  <Typography variant="body1">INICIAR SESIÓN</Typography>
                </Button>
              </ActiveLink>
            </Box>
          </Box>
        </form>
      </AuthLayout>
    </Layout>
  );
};

export default SignUpPage;
