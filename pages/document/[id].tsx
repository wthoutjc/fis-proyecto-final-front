import { Box } from "@mui/material";
import { ConnectedLayout, Layout } from "../../components/layout";

const EntryPage = () => {
  return (
    <Layout title="Document">
      <ConnectedLayout>
        <Box sx={{ padding: "0 1em" }}></Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default EntryPage;
