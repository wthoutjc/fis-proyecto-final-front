import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { CreateLoan } from "../../components/loan";
import { IPublication, IAuthor } from "../../interfaces";

interface Props {
  document: IPublication;
}

const LoanPage = ({ document }: Props) => {
  return (
    <Layout title="Document">
      <ConnectedLayout>
        <CreateLoan document={document} />
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

    return {
      props: {
        document,
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

export default LoanPage;