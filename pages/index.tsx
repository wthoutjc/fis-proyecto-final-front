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
      title: "Success:",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur?",
      severity: "error",
    };
    dispatch(newNotification(payload));
  };

  return (
    <>
      <Layout title={"Home - FileManager"}>
        <Box className="index__container">
          <Box className="index__landing">
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              FileManager
            </Typography>
            <Typography variant="h5">
              El mejor sitio para crear, editar y eliminar tus documentos.
            </Typography>
            <Box className="index__options">
              <Button onClick={handleNotification}> Learn more </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="contained"> About </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
