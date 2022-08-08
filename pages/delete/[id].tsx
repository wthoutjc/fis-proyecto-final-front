import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { DeleteEntry } from "../../components/entries";

// Interfaces
import { IDocument } from "../../interfaces";

interface Props {
  document: IDocument;
}

const DeleteEntryPage = ({ document }: Props) => {
  return (
    <Layout title="Delete - WriteLibrary">
      <ConnectedLayout>
        <DeleteEntry document={document} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const response = await fetch(`${process.env.HOST_NAME}/api/data/${id}`);
    const document = await response.json();

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
