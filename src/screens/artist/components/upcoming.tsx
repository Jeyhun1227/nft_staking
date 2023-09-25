import { SectionDefault } from "@/layout/section";
import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

import { CardNewNft } from "@/components/card-nft";
import { Stack, Typography } from "@mui/material";
import { NextLaunchCardBanner } from "@/screens/my-account/components/next-lauch-card-banner";
import { IProject } from "@/props/IProject";

export const ArtistUpcoming = ({projects}:{projects?:IProject[]}) => {
  const { t } = useTranslation("common");

  return (
    <SectionDefault
      title={t("artist.upcomingTitle")}
      subtitle={t("artist.upcomingSubtitle", { artist: "kavinsky" })}
      titleColor="secondary.main"
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
        {projects?.map((project, index) => (
          <CardNewNft
            width={"100%"}
            height={{ xs: "max-content", sm: 512 }}
            key={index}
            padding={{ xs: "14px 16px 40px", sm: "32px 36px" }}
            imgHeight={{ xs: 140, sm: 304 }}
            imgSrc={project?.coverImage?.url}
          >
            <Stack spacing={1}>
              <Typography variant="p2">{project?.title}</Typography>
              <Typography variant="subheadline">{"100 nft realse"}</Typography>
            </Stack>
            <Box paddingY={2}>
              <NextLaunchCardBanner
                deg={-5}
                variantText="subheadline"
                bottom={"5%"}
                left={"-10%"}
                counter={[
                  { value: "22", unit: "FEB" },
                  { value: "AT 17:00", unit: "GMT +1" },
                ]}
              />
            </Box>
          </CardNewNft>
        ))}
      </Box>
    </SectionDefault>
  );
};
