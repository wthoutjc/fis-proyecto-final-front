import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import { ConnectedLayout, Layout } from "../../components/layout";

// Interfaces
import { IAuthor } from "../../interfaces";

// Components
import { Authors } from "../../components/authors";

interface Props {
  authors: IAuthor[];
}

const AutoresPage = ({ authors }: Props) => {
  return (
    <Layout title="Autores - WriteLibrary">
      <ConnectedLayout>
        <Authors authors={authors} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await fetch(`${process.env.API_URL}/authors`);
    const authors = await response.json();

    return {
      props: {
        authors,
      },
    };
  } catch (error) {
    return {
      props: {
        authors: [],
      },
    };
  }
};

export default AutoresPage;
