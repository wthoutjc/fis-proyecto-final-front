import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  Divider,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { incrementClicks, login } from "../../../reducers";

// Components
// UI
import { ActiveLink } from "../../../components/ui";
import { Layout, AuthLayout } from "../../../components/layout";

// Icons
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import NextLink from "next/link";

// React Hook Form
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";

// Auth
import { loginToken } from "../../../actions";

interface LoginInfo {
  email: string;
  password: string;
}

const LogInPage = () => {
  const dispatch = useAppDispatch();

  const { ux } = useAppSelector((state) => state);

  const clicksCurrent = useMemo(() => ux.clicks, [ux.clicks]);

  const [clicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>();

  const [showError, setShowError] = useState(false);

  const onLoginUser = async ({ email, password }: LoginInfo) => {
    setShowError(false);
    try {
      loginToken({ email, password });
    } catch (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  return (
    <Layout title={"App - Login"}>
      <AuthLayout>
        <form onSubmit={handleSubmit(onLoginUser)} style={{ width: "100%" }}>
          <Box className="login__container">
            <Box
              className={
                clicksCurrent > 1
                  ? "login__left login__animation-toRight"
                  : "login__left fade-animation"
              }
            >
              <Typography variant="h4">Iniciar sesión</Typography>
              <Box
                sx={{ boxSizing: "border-box", padding: "1em", width: "100%" }}
              >
                <TextField
                  fullWidth
                  sx={{ marginBottom: "1em" }}
                  type="email"
                  placeholder="Email"
                  label="Email"
                  autoComplete="current-user-1"
                  error={!!errors.email}
                  helperText={
                    !!errors.email
                      ? errors.email.message
                      : "Escribe tu email..."
                  }
                  {...register("email", {
                    required: "Email is required",
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
                  placeholder="Password"
                  type="password"
                  label="Password"
                  error={!!errors.password}
                  autoComplete="current-password-1"
                  helperText={
                    !!errors.password
                      ? errors.password.message
                      : "Escribe tu password..."
                  }
                  {...register("password", {
                    required: "Password is required",
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
                {showError && (
                  <Alert severity="error" sx={{ mt: 1, mb: 1 }}>
                    <AlertTitle>Error</AlertTitle>
                    E-mail or password is not valid
                  </Alert>
                )}
                <Divider sx={{ marginBottom: "1em" }}>
                  <Chip
                    label={
                      <NextLink href="/auth/restore-password" passHref>
                        <Link sx={{ textDecoration: "none" }}>
                          ¿Olvidaste la contraseña?
                        </Link>
                      </NextLink>
                    }
                  />
                </Divider>
                <Button type="submit" variant="contained" fullWidth>
                  CONECTARSE
                </Button>
              </Box>
            </Box>
            <Box
              className={
                clicksCurrent > 1
                  ? "login__right login__animation-toLeft"
                  : "login__right fade-animation"
              }
            >
              <Typography variant="h4" className="fade-animation">
                ¡Bienvenido de nuevo!
              </Typography>
              <Typography variant="body1" className="fade-animation">
                Para mantenerte conectado con nosotros, debes iniciar sesión con
                tu información personal.
              </Typography>
              <ActiveLink href="/auth/signup">
                <Button
                  variant={"outlined"}
                  className="fade-animation"
                  onClick={() => setClicked(true)}
                >
                  <Typography variant="body1">REGÍSTRATE</Typography>
                </Button>
              </ActiveLink>
            </Box>
          </Box>
        </form>
      </AuthLayout>
    </Layout>
  );
};

export default LogInPage;
