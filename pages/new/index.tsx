import { Box } from "@mui/material";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { NewEntry } from "../../components/entries";

const NewDocumentPage = () => {
  return (
    <Layout title="New Document - App">
      <ConnectedLayout>
        <Box sx={{ padding: "0 1em" }}>
          <NewEntry />
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default NewDocumentPage;
