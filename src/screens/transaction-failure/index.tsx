import { LayoutPayment } from "@/layout/pages/payment";
import { useTranslation } from "next-i18next";

export const TransactionFailureScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutPayment
      title={t("transactionFailure.metaTitle")}
      description={t("transactionFailure.metaDescription")}
      failure
    />
  );
};
