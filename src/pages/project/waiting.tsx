import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProjectWaitingScreen } from "@/screens/project-waiting";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
};

const ProjectWaitingPage = () => <ProjectWaitingScreen />;

export default ProjectWaitingPage;
