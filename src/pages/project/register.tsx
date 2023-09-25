import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProjectRegisterScreen } from "@/screens/project-register";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
};

const ProjectRegisterPage = () => <ProjectRegisterScreen />;

export default ProjectRegisterPage;