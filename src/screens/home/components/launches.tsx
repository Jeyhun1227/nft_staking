import { useState, useEffect } from "react";
import { SectionDefault } from "@/layout/section";
import { useTranslation } from "next-i18next";
import { Carousel } from "@/components/carousel";
import { CardNewNft } from "@/components/card-nft";
import { IconButton, Stack, Typography } from "@mui/material";
import { HeroArtistsListItem } from "./hero-artists-list-item";
import { MUILink } from "@/components/mui-link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ROUTES } from "@/config/navigation";
import { IProject } from "@/props/IProject";
import { fetchProjects } from "@/services/parse/functions/srr/project";
import { NextLaunchCardBanner } from "@/screens/my-account/components/next-lauch-card-banner";
import Box from "@mui/material/Box";

export const HomeLaunches = () => {
  const { t } = useTranslation("common");
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    (async () => {
      let projects = await fetchProjects(undefined,true);
      setProjects(projects);
    })();
  }, []);

  return (
    <SectionDefault
      title={t("home.lauchesTitle")}
      subtitle={t("home.lauchesSubtitle")}
      titleColor="secondary.main"
    >
      <Carousel
        slidesToShow={3}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },

          {
            breakpoint: 820,
            settings: {
              swipeToSlide: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {projects.map((project) => {
          return (
            <CardNewNft
              width={{ xs: 270, sm: 366 }}
              height={{ xs: 400, sm: 512 }}
              padding={{ xs: "14px 16px 40px", sm: "32px 36px" }}
              imgHeight={{ xs: 216, sm: 304 }}
              imgSrc={project.coverImage.url}
            >
              <Stack direction={"row"} spacing={1}>
                <HeroArtistsListItem
                  background={`url(${project?.artistOwner?.avatarImage?.url}), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)`}
                />
                <Stack spacing={1}>
                  <Typography variant="p2" fontSize={{ xs: 13, sm: "inherit" }}>
                    {project.artistOwner.name}
                  </Typography>
                  <Typography
                    variant="subheadline"
                    fontSize={{ xs: 15, sm: "inherit" }}
                  >
                    {project.title.toLowerCase()}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
                marginTop={2}
              >
                {project.status === "ongoing" && <Stack spacing={1}>
                  <Typography
                    variant="bodyB1"
                    fontSize={{ xs: 12, sm: "inherit" }}
                  >
                    Drop in progress
                  </Typography>
                  <Typography fontSize={{ xs: 12, sm: "inherit" }}>
                    100 tokens left
                  </Typography>
                </Stack>}
              { project.status === "ongoing" &&  <MUILink
                  href={{
                    pathname: ROUTES.project,
                    query: { id: project.objectId},
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "#42A4FF",
                      borderRadius: "50%",
                      boxShadow: "0px 2px 8px rgba(191, 255, 98, 0.29)",
                      height: { xs: 35, sm: 48 },
                      width: { xs: 35, sm: 48 },
                    }}
                    aria-label="artist link"
                  >
                    <ChevronRightIcon fontSize="inherit" />
                  </IconButton>
                </MUILink>}
              </Stack>
              {
                  (project.status === "unknown" || project.status === "scheduled") &&  <Box paddingY={2}>
                <NextLaunchCardBanner
                  deg={-5}
                  variantText="subheadline"
                  bottom={"5%"}
                  left={"-10%"}
                  counter={[
                    { value: "22", unit: "APR" },
                    { value: "AT 17:00", unit: "GMT+1" },
                  ]}
                />
             
              </Box>   }
            </CardNewNft>
          );
        })}
      </Carousel>
    </SectionDefault>
  );
};
