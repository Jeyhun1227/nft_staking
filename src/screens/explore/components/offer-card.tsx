import { CardNewNft } from "@/components/card-nft";

import { Box, Stack, Typography } from "@mui/material";

const AuthorAndTitle = () => {
  return (
    <Stack>
      <Typography sx={{ fontSize: 8 }}>Orelsan</Typography>
      <Typography sx={{ fontSize: 10, textTransform: "uppercase" }}>
        Civilisation
      </Typography>
    </Stack>
  );
};

const RankInfo = () => (
  <Stack
    spacing={"2px"}
    direction="row"
    alignItems="center"
    justifyContent={"space-between"}
  >
    <img src="/images/gold-disk.svg" width={17} height={17} alt="nft gold" />
    <Stack spacing={"2px"}>
      <Typography sx={{ fontSize: 7, fontWeight: "600" }}>Gold</Typography>
      <Typography sx={{ fontSize: 7, fontWeight: "600" }}>Rare</Typography>
    </Stack>
  </Stack>
);

const TokenInfo = () => (
  <Stack spacing={"2px"}>
    <Typography sx={{ fontSize: 8 }}>2021</Typography>
    <Typography sx={{ fontSize: 9 }}>01 / 500</Typography>
  </Stack>
);

const Price = () => (
  <Stack
    alignItems="center"
    justifyContent={"space-between"}
    sx={{ background: "white", borderRadius: "17px", padding: "2px 3px" }}
  >
    <Typography sx={{ fontSize: 8, fontWeight: "600", color: "black" }}>
      €800
    </Typography>
  </Stack>
);

export const ExploreOfferCard = () => {
  return (
    <Box alignSelf="center">
      <CardNewNft
        width={{ xs: 158, md: 169 }}
        height={"auto"}
        padding={{ xs: "12px 14px", md: "12px 14px" }}
        imgHeight={{ xs: 130, md: 140 }}
        imgSrc={"/images/hero-nft.jpg"}
        nftRank="gold"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <AuthorAndTitle />
          <RankInfo />
        </Stack>

        <Stack
          marginTop={{ xs: "10px" }}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <TokenInfo />
          <Price />
        </Stack>
      </CardNewNft>
    </Box>
  );
};
