import { Box } from "@mui/material";
import { Layout } from "../../components/layout";

// Components
import { ConnectedLayout } from "../../components/layout";
import { OwnDocs, Explore } from "../../components/entries";
import { CTable } from "../../components/ui/table";

// Redux
import { useAppSelector } from "../../hooks";

//Interface
import { IDocument } from "../../interfaces";

interface Props {
  data: IDocument[];
}

const HomePage = ({ data }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Layout title="Welcome - App">
      <ConnectedLayout>
        <OwnDocs />
        <Explore />
      </ConnectedLayout>
    </Layout>
  );
};

export default HomePage;
