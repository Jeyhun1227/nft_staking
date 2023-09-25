import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { useTranslation } from "next-i18next";
import { ButtonSecondary } from "./styles";

export const ButtonHeaderSignIn = () => {
  const { t } = useTranslation("common");

  return (
    <MUILink sx={{ textDecoration: "none" }} href={ROUTES.signIn}>
      <ButtonSecondary
        size="small"
        sx={{
          borderRadius: "2px",
        }}
      >
        {t("header.logIn")}
      </ButtonSecondary>
    </MUILink>
  );
};
