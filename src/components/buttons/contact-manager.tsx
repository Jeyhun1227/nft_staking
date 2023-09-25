import { useTranslation } from "next-i18next";
import { ButtonPrimary } from "./styles";

export const ButtonContactManager = () => {
  const { t } = useTranslation("common");

  return (
    <ButtonPrimary
      size="small"
      sx={{
        borderRadius: "2px",
      }}
    >
      {t("header.contact")}
    </ButtonPrimary>
  );
};
