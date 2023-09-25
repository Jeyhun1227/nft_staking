import { LayoutPayment } from "@/layout/pages/payment";
import { useTranslation } from "next-i18next";

export const PaymentScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutPayment
      title={t("payment.metaTitle")}
      description={t("payment.metaDescription")}
    />
  );
};
