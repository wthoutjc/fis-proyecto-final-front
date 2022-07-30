import { Layout } from "../../components/layout";

// Components
import { ConnectedLayout } from "../../components/layout";
import { OwnDocs, Explore } from "../../components/entries";

const HomePage = () => {
  return (
    <Layout title="Home - FileManager">
      <ConnectedLayout>
        <OwnDocs />
        <Explore />
      </ConnectedLayout>
    </Layout>
  );
};

export default HomePage;
