import { Box } from "@mui/material";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { HomeHeroArtists } from "./hero-artists";

export const HomeHeroTitle = () => {
  return (
    <Stack>
      <Typography
        variant={"subheadline"}
        marginBottom={"20px"}
        color="primary.main"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: 18,
          },
        })}
      >
        The fight club of music
      </Typography>
      <Typography
        variant={"headline1"}
        marginBottom={"20px"}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: 32,
          },
        })}
      >
        Be part of your favorite artist's next projects
      </Typography>
      <Typography
        variant={"subheader1"}
        marginBottom={10}
        sx={(theme) => ({
          color: "rgba(255, 255, 255, 0.8)",
          [theme.breakpoints.down("md")]: {
            fontSize: 18,
          },
        })}
      >
        Rhapsody is the platform where music fans can invest in their favorite
        artists and be rewarded for supporting them.
      </Typography>

      <Box display={{ xs: "none", md: "block" }}>
        <HomeHeroArtists />
      </Box>
    </Stack>
  );
};
