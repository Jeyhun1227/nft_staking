import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SignUpScreen } from "@/screens/sign-up";

const SignUpPage = () => <SignUpScreen />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      step: ctx?.params?.step || 1,
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = [1, 2, 3, 4, 5].map((step) => ({
    params: { step: step.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default SignUpPage;
