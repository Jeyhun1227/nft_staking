import React from "react";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import Stack from "@mui/material/Stack";
import { useTranslation } from "next-i18next";

import { ButtonPrimary } from "@/components/buttons/styles";

export const HomeHeroArtists = () => {
  const { t } = useTranslation("common");

  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <MUILink
        href={ROUTES.explore}
        sx={{
          width: "100%",
          order: { xs: 1, md: 0 },
          marginTop: { xs: 6.5, md: 0 },
        }}
      >
        <ButtonPrimary
          size="large"
          fullWidth
          sx={{
            textTransform: "uppercase",
            boxShadow: "0px 8px 32px rgba(191, 255, 98, 0.3)",
            maxWidth: "387px",
          }}
        >
          {t("home.participateAirdrop")}
        </ButtonPrimary>
      </MUILink>
    </Stack>
  );
};
