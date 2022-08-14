import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { NewEntry, RecentlyCreated } from "../../components/entries";
import { Box } from "@mui/material";

// Interface
import { IAuthor } from "../../interfaces";

interface Props {
  authors: IAuthor[];
}

const NewDocumentPage = ({ authors }: Props) => {
  return (
    <Layout title="New Document - WriteLibraryr">
      <ConnectedLayout>
        <Box display="flex">
          <NewEntry authors={authors} />
          <RecentlyCreated />
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`${process.env.API_URl}/authors`);
  const authors = await response.json();

  return {
    props: {
      authors,
    },
  };
};

export default NewDocumentPage;
