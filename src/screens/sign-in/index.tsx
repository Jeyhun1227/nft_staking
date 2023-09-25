import { LayoutAuth } from "@/layout/pages/layout-auth";
import { useTranslation } from "next-i18next";
import { SignInContent } from "./components/content";

export const SignInScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutAuth
      title={t("signIn.logIn")}
      description={t("signIn.metaDescription")}
    >
      <SignInContent />
    </LayoutAuth>
  );
};
