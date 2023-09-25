import { useTranslation } from "next-i18next";

import LayoutProject from "@/layout/pages/project";
import ProjectWaitingTitle from "./components/title";
import ProjectWaitingInfo from "./components/info";
import ProjectWaitingCountdown from "./components/countdown";

export const ProjectWaitingScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutProject
      title={"REBORN"}
      description={t("projectWaiting.metaDescription", { project: "REBORN" })}
    >
      <ProjectWaitingTitle />
      <ProjectWaitingCountdown />
      <ProjectWaitingInfo />
    </LayoutProject>
  );
};
