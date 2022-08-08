import { Box, Button, Divider, Typography } from "@mui/material";

// Components
import { Layout } from "../components/layout";

// Redux
import { useAppDispatch } from "../hooks";
import { INotification } from "../interfaces";
import { newNotification } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleNotification = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Información:",
      message: "Sitio en construcción ",
      severity: "info",
    };
    dispatch(newNotification(payload));
  };

  return (
    <>
      <Layout title={"Home - WriteLibrary"}>
        <Box className="index__container">
          <Box className="index__landing">
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            WriteLibrary
            </Typography>
            <Typography variant="h5">
              El mejor sitio para crear, editar y eliminar tus documentos.
            </Typography>
            <Box className="index__options">
              <Button onClick={handleNotification}> Aprender más </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="contained"> Acerca de </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
