import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { NewEntry, RecentlyCreated } from "../../components/entries";
import { Box } from "@mui/material";

const NewDocumentPage = () => {
  return (
    <Layout title="New Document - WriteLibraryr">
      <ConnectedLayout>
        <Box display="flex">
          <NewEntry />
          <RecentlyCreated />
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default NewDocumentPage;
