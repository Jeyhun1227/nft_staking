import React from "react";
import { CheckoutContentMethodsButton } from "./content-methods-button";
import cryptoIcon from "@/public/images/checkout/crypto-rounded.svg";
import { Stack, Typography } from "@mui/material";
import NextImage from "next/image";

import metamaskFox from "@/public/images/checkout/metamask-fox.svg";
import { useTranslation } from "next-i18next";

export const CheckoutContentMethodsButtonMetamask = () => {
  const { t } = useTranslation("common");

  return (
    <CheckoutContentMethodsButton
      icon={cryptoIcon as string}
      title={t("checkout.metamaskTitle")}
      instruction={t("checkout.metamaskInstruction")}
      logo={
        <Stack spacing={1} direction="row" alignItems={"center"}>
          <NextImage src={metamaskFox} />
          <Typography
            display={{ xs: "none", md: "block" }}
            variant="body3"
            textTransform={"uppercase"}
          >
            {t("checkout.metamaskLogo")}
          </Typography>
        </Stack>
      }
    />
  );
};
