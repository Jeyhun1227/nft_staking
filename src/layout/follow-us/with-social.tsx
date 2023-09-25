import { Typography, Grid } from "@mui/material";

import React from "react";
import { FollowUsBlock } from "./block";

import { ButtonSocialNetwork } from "../../components/buttons/social-network";
import { useTranslation } from "next-i18next";
import { SocialLinks } from "@/config/data";

interface FollowUsProps {
  subject: "NFT'S" | "artists";
}

export const FollowUsWithSocial = ({ subject }: FollowUsProps) => {
  const { t } = useTranslation("common");

  return (
    <FollowUsBlock>
      <Grid container spacing={3}>
        <Grid
          xs={12}
          lg={7}
          item
          sx={{
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            marginBottom={{ xs: 3, md: 5 }}
            color="#7A3EE0"
            variant="subheadline"
            component="h2"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 18,
              },
            })}
          >
            {t("followUs.titleDefault")}
          </Typography>
          <Typography
            variant="headline1"
            color="#191225"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 32,
              },
            })}
          >
            {t("followUs.subtitleNews", { subject })}
          </Typography>
        </Grid>

        <Grid item xs={12} lg={5} container spacing={3}>
          {SocialLinks.sort((a, b) => a.order-b.order).map((btn) => (
            <Grid key={btn?.label} item xs={6} md={3} lg={6}>
              <ButtonSocialNetwork {...btn} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </FollowUsBlock>
  );
};
