import { Box } from "@mui/material";
import { Layout } from "../../components/layout";

// Components
import { ConnectedLayout } from "../../components/layout";
import { CTable } from "../../components/ui/table";

// Redux
import { useAppSelector } from "../../hooks";

//Interface
import { DBDataUsers } from "../../interfaces";

interface Props {
  data: DBDataUsers[];
}

const HomePage = ({ data }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Layout title="Welcome - App">
      <ConnectedLayout>
        <Box sx={{ padding: "0 1em" }}></Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default HomePage;
