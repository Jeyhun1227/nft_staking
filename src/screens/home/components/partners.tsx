import { SectionDefault } from "@/layout/section";
import { useTranslation } from "next-i18next";
import { HomePartnersList } from "./partners-list";

export const HomePartners = () => {
  const { t } = useTranslation("common");

  return (
    <SectionDefault
      title={t("home.partnersTitle")}
      subtitle={t("home.partnersSubtitle")}
    >
      <HomePartnersList />
    </SectionDefault>
  );
};
