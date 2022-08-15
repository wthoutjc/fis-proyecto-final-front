import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { DeleteEntry } from "../../components/entries";

// Interfaces
import { IPublication } from "../../interfaces";

interface Props {
  document: IPublication;
}

const DeleteEntryPage = ({ document }: Props) => {
  return (
    <Layout title="Delete - WriteLibrary">
      <ConnectedLayout>
        {document ? <DeleteEntry document={document} /> : "No hay documento"}
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
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const document = await response.json();

    console.log(document);

    return {
      props: {
        document,
      },
    };
  } catch (error) {
    return {
      props: {
        document: null,
      },
    };
  }
};

export default DeleteEntryPage;
