import { useEffect } from "react";
import { Box } from "@mui/material";
import Head from "next/head";

// Components
import { Navbar } from "../ui";

// Redux
import { useAppDispatch } from "../../hooks";
import { login, setAccessToken, setUser } from "../../reducers";

// Interface - Enum - Types
import { StatusAuth } from "../../enum";

// NextAuth
import { useSession } from "next-auth/react";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Layout = ({ title = "WriteLibrary", children }: Props) => {
  const { data, status } = useSession();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === StatusAuth.authenticated) {
      dispatch(login());
      if (data) {
        const { accessToken, user } = data;

        dispatch(setAccessToken(accessToken as any));
        dispatch(setUser(user as any));
      }
    }
  }, [status, data, dispatch]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ width: "100%", height: "100%" }}
    >
      <Head>
        <title> {title} </title>
      </Head>

      <Navbar />

      {children}
    </Box>
  );
};

export { Layout };
