import { ButtonPrimary } from "@/components/buttons/styles";
import { TextCounter } from "@/components/typography/counter";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import RCountdown from "react-countdown";
export const ExploreOfferCountdown = () => {
  const { t } = useTranslation("common");

  return (
    <Stack spacing={3} textAlign="center" alignItems={"center"}>
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
            variantText="headline1"
            variantColor="light"
            variantStyle="offer"
          />
        )}
      />

      <Typography fontSize={[18, 18, 22]}>
        Time left to purchase this NFT.
      </Typography>
      <ButtonPrimary
        fullWidth
        size="large"
        sx={{ borderRadius: "40px", maxWidth: 288, fontSize: [14, 14, 22] }}
      >
        Purchase NFT
      </ButtonPrimary>
    </Stack>
  );
};
