import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export const Copyright = () => {
  const { t } = useTranslation("common");

  return (
    <Typography color="rgba(225,225,225,0.4)" variant="body3">
      {t("footer.copyright")}
    </Typography>
  );
};
