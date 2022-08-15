import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { Archivados } from "../../components/archivados";

const ArchivadosPage = () => {
  return (
    <Layout title="Home - WriteLibrary">
      <ConnectedLayout>
        <Archivados />
      </ConnectedLayout>
    </Layout>
  );
};

export default ArchivadosPage;
