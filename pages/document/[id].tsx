import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { ReadEntry } from "../../components/entries";
import { IDocument } from "../../interfaces";

interface Props {
  document: IDocument;
}

const EntryPage = ({ document }: Props) => {
  return (
    <Layout title="Document">
      <ConnectedLayout>
        <ReadEntry document={document} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const response = await fetch(`http://localhost:3000/api/data/${id}`);
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

export default EntryPage;
