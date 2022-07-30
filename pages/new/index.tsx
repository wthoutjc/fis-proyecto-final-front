import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { NewEntry } from "../../components/entries";

const NewDocumentPage = () => {
  return (
    <Layout title="New Document - App">
      <ConnectedLayout>
        <NewEntry />
      </ConnectedLayout>
    </Layout>
  );
};

export default NewDocumentPage;
