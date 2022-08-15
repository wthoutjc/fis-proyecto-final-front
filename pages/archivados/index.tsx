import { ConnectedLayout, Layout } from "../../components/layout";
import { GetServerSideProps } from "next";

// Components
import { Archivados } from "../../components/archivados";

// Interface
import { IPublication } from "../../interfaces";

interface Props {
  publications: IPublication[];
}

const ArchivadosPage = ({ publications }: Props) => {
  return (
    <Layout title="Home - WriteLibrary">
      <ConnectedLayout>
        <Archivados publications={publications} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const token = req.cookies["request_token"];
    const response = await fetch(
      `${process.env.API_URL}/publications/archived-files/all`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const publications = await response.json();

    console.log(publications);

    return {
      props: {
        publications,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        publications: [],
      },
    };
  }
};

export default ArchivadosPage;
