import { Box, Container, Stack } from "@mui/material";
import { ExploreOfferCard } from "./offer-card";
import { ExploreOfferCountdown } from "./offer-countdown";

export const ExploreOffer = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(180deg, #587794 0%, #191225 96.3%)" }}
      paddingY={4}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          spacing={3}
        >
          <ExploreOfferCard />
          <ExploreOfferCountdown />
        </Stack>
      </Container>
    </Box>
  );
};
