import { GetServerSideProps } from "next";
import { ConnectedLayout, Layout } from "../../components/layout";

// Interfaces
import { ILoan } from "../../interfaces";

// Components
import { Loans } from "../../components/loan";

interface Props {
  loans: ILoan[];
}

const LoanPage = ({ loans }: Props) => {
  return (
    <Layout title="Home - WriteLibrary">
      <ConnectedLayout>
        <Loans loans={loans} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await fetch(`${process.env.API_URL}/loans/`);
    const loans = await response.json();

    console.log(loans);

    return {
      props: {
        loans,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        loans: [],
      },
    };
  }
};

export default LoanPage;
