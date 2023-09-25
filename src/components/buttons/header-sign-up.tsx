import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { useTranslation } from "next-i18next";
import { ButtonPrimary } from "./styles";

export const ButtonHeaderSignUp = () => {
  const { t } = useTranslation("common");

  return (
    <MUILink
      href={{
        pathname: ROUTES.signUp,
        query: { step: "1" },
      }}
      sx={{ textDecoration: "none" }}
    >
      <ButtonPrimary
        size="small"
        sx={{
          borderRadius: "2px",
        }}
      >
        {t("header.signUp")}
      </ButtonPrimary>
    </MUILink>
  );
};
