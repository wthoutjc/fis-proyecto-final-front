import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { ReadEntry } from "../../components/entries";
import { IPublication, IAuthor } from "../../interfaces";

interface Props {
  document: IPublication;
  authors: IAuthor[];
}

const EntryPage = ({ document, authors }: Props) => {
  return (
    <Layout title="Document">
      <ConnectedLayout>
        {document ? <ReadEntry document={document} authors={authors} /> : "No hay documento"}
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const { id } = params as { id: string };

  const token = req.cookies["request_token"];

  try {
    const response = await fetch(`${process.env.API_URL}/publications/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const document = await response.json();

    const response_ = await fetch(`${process.env.API_URl}/authors`);
    const authors = await response_.json();

    return {
      props: {
        document,
        authors,
      },
    };
  } catch (error) {
    return {
      props: {
        document: null,
        authors: [],
      },
    };
  }
};

export default EntryPage;
