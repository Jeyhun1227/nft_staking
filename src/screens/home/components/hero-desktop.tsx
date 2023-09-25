import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { HomeHeroTitle } from "./hero-title";
import { HomeHeroCard } from "./hero-card";

export const HomeHeroDesktop = () => {
  return (
    <Container sx={{ display: { xs: "none", md: "block" } }}>
      <Grid container alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <HomeHeroTitle />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeHeroCard />
        </Grid>
      </Grid>
    </Container>
  );
};
