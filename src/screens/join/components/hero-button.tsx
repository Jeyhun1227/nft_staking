import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";

export const JoinHeroButton = () => {
  const { t } = useTranslation("common");

  return (
    <Button
      size="large"
      sx={{
        mawWidth: "387px",
        color: "white",
        boxShadow: "0px 8px 32px rgba(191, 255, 98, 0.3)",
        textTransform: "uppercase",
      }}
    >
      {t("join.contactBtn")}
    </Button>
  );
};
