import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useTranslation } from "next-i18next";

import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { ButtonPrimary } from "@/components/buttons/styles";
import { HomeHeroTitle } from "./hero-title";
import { HomeHeroCard } from "./hero-card";

export const HomeHeroMobile = () => {
  const { t } = useTranslation("common");

  return (
    <Grid
      sx={{ display: { xs: "flex", md: "none" } }}
      container
      alignItems={"center"}
    >
      <Grid item xs={12}>
        <Container>
          <HomeHeroTitle />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <HomeHeroCard />
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <MUILink
            href={ROUTES.explore}
            sx={{
              width: "100%",
            }}
          >
            <ButtonPrimary
              size="large"
              fullWidth
              sx={{
                textTransform: "uppercase",
                boxShadow: "0px 8px 32px rgba(191, 255, 98, 0.3)",
              }}
            >
              {t("home.participateAirdrop")}
            </ButtonPrimary>
          </MUILink>
        </Container>
      </Grid>
    </Grid>
  );
};
