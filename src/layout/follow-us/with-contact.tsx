import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslation } from "next-i18next";

import { FollowUsBlock } from "./block";

export const FollowUsWithContact = () => {
  const { t } = useTranslation("common");

  return (
    <FollowUsBlock>
      <Grid container spacing={3}>
        <Grid
          xs={12}
          md={8}
          item
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            marginBottom={5}
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
            {t("followUs.subtitleContact")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack justifyContent={"center"} alignItems="center" height="100%">
            <Button
              sx={(theme) => ({
                color: "white",
                borderRadius: "8px",
                ...theme?.typography?.title3,
                [theme.breakpoints.down("md")]: {
                  ...theme?.typography?.bodyB1,
                  textTransform: "uppercase",
                },
                paddingX: { xs: 2, md: 6 },
                paddingY: { xs: 2, md: 4 },
                textTransform: "uppercase",
              })}
            >
              {t("join.contactBtn")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FollowUsBlock>
  );
};
