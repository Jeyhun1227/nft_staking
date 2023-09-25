import { TransactionFailureScreen } from "@/screens/transaction-failure";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TransactionFailurePage = () => <TransactionFailureScreen />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
      // Will be passed to the page component as props
    },
  };
};

export default TransactionFailurePage;
