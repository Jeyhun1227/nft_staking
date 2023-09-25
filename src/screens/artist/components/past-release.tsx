import { CardNewNft } from "@/components/card-nft";
import { Stack, Typography } from "@mui/material";

import { SectionDefault } from "@/layout/section";
import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

const List = [
  {
    title: "Renegade",
    nfts: "100",
    imgSrc: "/images/artists/kavinsky-preview-renegade.jpg",
  },
  {
    title: "Renegade",
    nfts: "500",
    imgSrc: "/images/artists/kavinsky-preview-sword.jpg",
  },
  {
    title: "Upcoming",
    nfts: "200",
    imgSrc: "/images/artists/kavinsky-preview-reborn.jpg",
  },
];

export const ArtistPastRelase = () => {
  const { t } = useTranslation("common");

  return (
    <SectionDefault
      title={t("artist.releaseTitle")}
      subtitle={t("artist.releaseSubtitle")}
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(auto-fit, minmax(150px, 1fr))",
          mobile: "repeat(2, minmax(150px, 366px))",
          md: "repeat(3, minmax(150px, 366px))",
        }}
        justifyContent="center"
        gap={{ xs: 2, mobile: 3, md: 5, lg: 7 }}
      >
        {List.map((project, index) => (
          <CardNewNft
            width={"100%"}
            height={{ xs: "max-content", sm: 512 }}
            key={index}
            padding={{ xs: "14px 16px", sm: "32px 36px" }}
            imgHeight={{ xs: 140, sm: 304 }}
            imgSrc={project?.imgSrc}
          >
            <Stack spacing={1} marginBottom={2}>
              <Typography variant="p2">{project?.title}</Typography>
              <Typography variant="subheadline">
                {project?.nfts} nft release
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subheadline" color={"#BD482B"}>
                SOLD OUT
              </Typography>
              <Typography textTransform={"uppercase"}>
                {project?.nfts} sold out
              </Typography>
            </Stack>
          </CardNewNft>
        ))}
      </Box>
    </SectionDefault>
  );
};
