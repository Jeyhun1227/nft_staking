import { LayoutAuth } from "@/layout/pages/layout-auth";
import { useTranslation } from "next-i18next";
import { ForgotPasswordContent } from "./components/content";

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutAuth
      title={t("forgotPassword.metaTitle")}
      description={t("forgotPassword.metaDescription")}
    >
      <ForgotPasswordContent />
    </LayoutAuth>
  );
};
