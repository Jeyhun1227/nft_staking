import { ButtonSocialNetwork } from "@/components/buttons/social-network";
import { SocialLinks } from "@/config/data";
import { Grid } from "@mui/material";
import React from "react";

export const FollowUsWithNewsletterButtons = () => {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      {SocialLinks.map(({ order, ...btn }, index) => (
        <Grid
          xs={6}
          md={3}
          key={btn?.label}
          order={{ xs: order, md: index }}
          item
        >
          <ButtonSocialNetwork {...btn} size="md" />
        </Grid>
      ))}
    </Grid>
  );
};
