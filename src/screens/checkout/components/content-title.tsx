import { CardNewNft } from "@/components/card-nft";
import { CardNftAccess } from "@/components/cards/nft-access";
import { CardNftTitle } from "@/components/cards/nft-title";
import { TextCounter } from "@/components/typography/counter";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import RCountdown from "react-countdown";

export const CheckoutContentTitle = () => {
  const { t } = useTranslation("common");

  return (
    <Stack spacing={5} textAlign={{ xs: "center", md: "left" }}>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <RCountdown
          date={Date.now() + 1000 * 60 * 15}
          renderer={({
            minutes,
            seconds,
          }: {
            minutes: number;
            seconds: number;
          }) => (
            <TextCounter
              counter={[
                { value: `${minutes}`, unit: t("time.minutes") },
                { value: `${seconds}`, unit: t("time.seconds") },
              ]}
              variantColor="light"
            />
          )}
        />

        <Typography variant="headline1">
          {t("checkout.purchase")}{" "}
          <Typography variant="headline1" component="span" color="primary.main">
            nft
          </Typography>
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="headline3">{t("checkout.oneStep")}</Typography>
        <Typography variant="headline3" color="primary.main">
          {t("checkout.toJoin")}
        </Typography>
      </Stack>
      <Box
        alignSelf="center"
        maxWidth={"300px"}
        display={{ xs: "block", md: "none" }}
        textAlign="left"
      >
        <CardNftTitle albumCategory="basic" />
        <CardNewNft
          width={"100%"}
          maxWidth={241}
          height={"auto"}
          padding={"14px 16px"}
          imgSrc="/images/hero-nft.jpg"
          imgHeight={200}
        >
          <Stack spacing={0.5}>
            <Typography
              variant="typography4"
              sx={{ fontSize: { xs: 12, md: "inherit" } }}
            >
              Orelsan
            </Typography>
            <Typography
              variant="subheadline"
              sx={{ fontSize: { xs: 14, md: "inherit" } }}
            >
              Civilisation
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={{ xs: "21px" }}
          >
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: { xs: 10, md: "inherit" } }}>
                2021
              </Typography>
              <Typography
                variant="typography3"
                sx={{ fontSize: { xs: 12, md: "inherit" } }}
              >
                01 / 10
              </Typography>
            </Stack>
            <Chip
              sx={(theme) => ({
                borderRadius: "8px",
                backgroundColor: "white",
                color: "black",
                ...theme.typography.bodyB2,
              })}
              label={"€ 500"}
            />
          </Stack>
        </CardNewNft>
        <CardNftAccess />
      </Box>
    </Stack>
  );
};
