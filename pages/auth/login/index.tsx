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
  Tooltip,
  Typography,
} from "@mui/material";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { incrementClicks } from "../../../reducers";

// Components
// UI
import { ActiveLink } from "../../../components/ui";
import { Layout, AuthLayout } from "../../../components/layout";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import NextLink from "next/link";

// API - Next
import { getProviders } from "next-auth/react";

// Next Auth
import { signIn } from "next-auth/react";

// React Hook Form
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";

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

  const [providers, setProviders] = useState<any | null>(null);

  const onLoginUser = async ({ email, password }: LoginInfo) => {
    setShowError(false);

    try {
      await signIn("credentials", { email, password });
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

  useEffect(() => {
    getProviders().then((provs) => setProviders(provs));
  }, []);

  return (
    <Layout title={"App - Login"}>
      <AuthLayout>
        <form onSubmit={handleSubmit(onLoginUser)}>
          <Box className="login__container">
            <Box
              className={
                clicksCurrent > 1
                  ? "login__left login__animation-toRight"
                  : "login__left fade-animation"
              }
            >
              <Typography variant="h4">Iniciar sesión</Typography>
              {providers && (
                <Box display={"flex"}>
                  {Object.values(providers).map((provider: any) => {
                    if (provider.id === "credentials") {
                      return null;
                    }

                    return (
                      <Tooltip
                        title={`Inicia sesión con ${provider.name}`}
                        key={provider.id}
                      >
                        <Button
                          variant="outlined"
                          className="login__providers"
                          onClick={async () => await signIn(provider.id)}
                        >
                          {provider.name === "Google" && <GoogleIcon />}
                          {provider.name === "GitHub" && <GitHubIcon />}
                        </Button>
                      </Tooltip>
                    );
                  })}
                </Box>
              )}
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                ó usa tu cuenta de email
              </Typography>
              <Box
                sx={{ boxSizing: "border-box", padding: "1em", width: "100%" }}
              >
                <TextField
                  fullWidth
                  sx={{ marginBottom: "1em" }}
                  type="email"
                  placeholder="E-mail"
                  label="E-mail"
                  autoComplete="username"
                  error={!!errors.email}
                  helperText={
                    !!errors.email
                      ? errors.email.message
                      : "Escribe tu e-mail..."
                  }
                  {...register("email", {
                    required: "E-mail is required",
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
                  autoComplete="current-password"
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
