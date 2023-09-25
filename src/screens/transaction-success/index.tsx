import { FooterTerms } from "@/layout/footer/terms";
import { Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { useTranslation } from "next-i18next";
import { TransactionSuccessCongratulation } from "./components/congratulation";

export const TransactionSuccessScreen = () => {
  const { t } = useTranslation("common");

  return (
    <Main
      meta={
        <Meta
          title={t("transactionSuccess.metaTitle")}
          description={t("transactionSuccess.metaDescription")}
        />
      }
    >
      <TransactionSuccessCongratulation />
      <FooterTerms sx={{ paddingTop: 1, paddingBottom: 3 }} />
    </Main>
  );
};
