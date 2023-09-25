import { ForgotPasswordScreen } from "@/screens/forgot-password";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
      // Will be passed to the page component as props
    },
  };
};

const SignInPage = () => <ForgotPasswordScreen />;

export default SignInPage;
