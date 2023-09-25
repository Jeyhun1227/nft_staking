import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export const AccountInfoTotal = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={4}
      sx={{
        background: "#483D58",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <Typography variant="body2">{t("account.totalEarned")}</Typography>
      <Typography variant="bodyB2">12 345,78€</Typography>
    </Stack>
  );
};
