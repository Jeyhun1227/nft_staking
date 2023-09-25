import { LayoutAuth } from "@/layout/pages/layout-auth";
import { useTranslation } from "next-i18next";
import { SignUpContent } from "./components/content";

export const SignUpScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutAuth
      title={t("signUp.metaTitle")}
      description={t("signUp.metaDescription")}
    >
      <SignUpContent />
    </LayoutAuth>
  );
};
