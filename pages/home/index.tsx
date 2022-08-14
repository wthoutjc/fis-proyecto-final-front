import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";

// Components
import { ConnectedLayout } from "../../components/layout";
import { OwnDocs, Explore } from "../../components/entries";

// Interface
import { IPublication } from "../../interfaces";

interface Props {
  ownPublications: IPublication[];
  publications: IPublication[];
}

const HomePage = ({ ownPublications, publications }: Props) => {
  return (
    <Layout title="Home - WriteLibrary">
      <ConnectedLayout>
        <OwnDocs publications={ownPublications} />
        <Explore publications={publications} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["request_token"];

  const response = await fetch(`${process.env.API_URl}/publications`);
  const publications = await response.json();

  const response_ = await fetch(
    `${process.env.API_URl}/publications/my-publications/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const ownPublications = await response_.json();

  return {
    props: {
      ownPublications,
      publications,
    },
  };
};

export default HomePage;
