import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";

export const SignInButtonSignUp = () => {
  const { t } = useTranslation();

  return (
    <Stack alignItems={"center"} width="100%" spacing="10px">
      <Typography>{t("signIn.noAccountYet")}</Typography>
      <MUILink
        href={{
          pathname: ROUTES.signUp,
        }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {t("signIn.signUp")}
        </Button>
      </MUILink>
    </Stack>
  );
};
