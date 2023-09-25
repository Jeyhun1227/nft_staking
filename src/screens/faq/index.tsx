import { CircleBlur } from "@/components/backgrounds/circle-blur";
import { FollowUsWithSocial } from "@/layout/follow-us/with-social";
import { LayoutDefault } from "@/layout/pages/layout-default";
import { useTranslation } from "next-i18next";
import { FaqGettingStarted } from "./components/getting-started";
import { FaqHowTo } from "./components/how-to";

export const FaqScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutDefault title={t("faq.title")} description={t("faq.subtitle")}>
      <FaqGettingStarted />
      <FaqHowTo />
      <FollowUsWithSocial subject="artists" />
      <CircleBlur
        width="614px"
        height="614px"
        blur="100px"
        propsStyle={{
          position: "absolute",
          left: "80%",
          top: "416px",
          opacity: "0.2",
        }}
      />
    </LayoutDefault>
  );
};
