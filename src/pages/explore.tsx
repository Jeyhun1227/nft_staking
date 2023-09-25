import { ExploreScreen } from "@/screens/explore";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
      // ...(await getServerSideArtistProps()),
    },
  };
};

const ExplorePage = () => <ExploreScreen />;

export default ExplorePage;
