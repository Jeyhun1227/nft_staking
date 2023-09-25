import Box from "@mui/material/Box";

import { HomeHeroDesktop } from "./hero-desktop";
import { HomeHeroMobile } from "./hero-mobile";

export const HomeHero = () => {
  return (
    <Box
      component="section"
      paddingTop={{ xs: 5, md: 10 }}
      paddingBottom={{ xs: 6, md: 12 }}
    >
      <HomeHeroDesktop />
      <HomeHeroMobile />
    </Box>
  );
};
