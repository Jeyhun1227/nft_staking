import { FollowUsBlock } from "@/layout/follow-us/block";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FollowUsWithNewsletterButtons } from "./with-newsletter-buttons";
import { FollowUsWithNewsletterInput } from "./with-newsletter-input";

export const FollowUsWithNewsletter = () => {
  const { t } = useTranslation("common");

  return (
    <FollowUsBlock>
      <Stack alignItems={"center"} sx={{ textAlign: "center" }}>
        <Typography
          marginBottom={3}
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
          {t("followUs.subtitleNewsletter")}
        </Typography>
        <FollowUsWithNewsletterInput />
        <FollowUsWithNewsletterButtons />
      </Stack>
    </FollowUsBlock>
  );
};
