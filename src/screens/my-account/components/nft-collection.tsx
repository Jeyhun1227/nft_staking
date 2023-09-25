import { useTranslation } from "next-i18next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

import { CardNewNft } from "@/components/card-nft";
import { NftRankInfo } from "@/components/cards/nft-rank-info";
import { CardNftBlockPrice } from "@/components/cards/nft-block-price";
import { NoItems } from "./no-items";
import { NFTCard } from "@/types/nft";

const List: NFTCard[] = [];
export const NftCollection = () => {
  const { t } = useTranslation("common");

  return (
    <Container disableGutters maxWidth="lg" sx={{ marginBottom: 9 }}>
      <Typography
        component="h2"
        variant="subheadline"
        textAlign={{ xs: "center", md: "left" }}
        marginBottom={{ md: 6, xs: 3 }}
      >
        {t("account.nftCollection")}
      </Typography>
      {List.length === 0 ? (
        <NoItems />
      ) : (
        <Box
        display="grid"
        justifyContent={"center"}
        gridTemplateColumns={{
          xs: "repeat(auto-fit, minmax(150px, 1fr))",
          mobile: "repeat(2, minmax(150px, 300px))",
          // sm: "repeat(2, minmax(150px, 270px))",
          md: "repeat(4, minmax(150px, 1fr))",
        }}
        gap={{ xs: "22px", lg: 5 }}
      >
        {List.map((nft, index) => (
          <CardNewNft
            key={index}
            nftRank={nft?.nftRank}
            width={"100%"}
            height={"auto"}
            padding={{ xs: "10px 12px", mobile: "13px 16px", sm: "21px 24px" }}
            imgHeight={{ xs: 100, md: 128 }}
            imgSrc={nft?.imgSrc}
          >
            <Stack
              marginBottom={2}
              direction="row"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography
                  variant="typography4"
                  sx={{ fontSize: { xs: 8, mobile: "inherit" } }}
                >
                  {nft?.author}
                </Typography>
                <Typography
                  variant="subheadline"
                  sx={{ fontSize: { xs: 9, mobile: "inherit" } }}
                >
                  {nft?.title}
                </Typography>
              </Stack>
              <NftRankInfo rank={nft?.nftRank} />
            </Stack>

            <CardNftBlockPrice
              year={"2021"}
              day={nft?.tokens}
              price={nft?.price}
            />
          </CardNewNft>
        ))}
      </Box>
      )}
    </Container>
  );
};
