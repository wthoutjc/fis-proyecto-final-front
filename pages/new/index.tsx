import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { NewEntry, RecentlyCreated } from "../../components/entries";
import { Box } from "@mui/material";

// Interface
import { IAuthor, IPublication } from "../../interfaces";

interface Props {
  authors: IAuthor[];
  publications: IPublication[];
}

const NewDocumentPage = ({ authors, publications }: Props) => {
  return (
    <Layout title="New Document - WriteLibraryr">
      <ConnectedLayout>
        <Box display="flex">
          <NewEntry authors={authors} />
          <RecentlyCreated publications={publications} />
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await fetch(`${process.env.API_URl}/authors`);
    const authors = await response.json();

    const response_ = await fetch(`${process.env.API_URl}/publications`);
    const publications = await response_.json();

    console.log(authors);
    console.log(publications);

    return {
      props: {
        authors,
        publications,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        authors: [],
        publications: [],
      },
    };
  }
};

export default NewDocumentPage;
