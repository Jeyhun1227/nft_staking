import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Custom404Screen from "@/screens/custom-404";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
      // Will be passed to the page component as props
    },
  };
};

const Custom404Page = () => <Custom404Screen />;

export default Custom404Page;
