import React from "react";
import { CheckoutContentMethodsButton } from "./content-methods-button";
import cryptoIcon from "@/public/images/checkout/crypto-rounded.svg";
import { Stack } from "@mui/material";

import moonpayTextLogo from "@/public/images/checkout/moonpay-text-logo.svg";
import moonpayImgLogo from "@/public/images/checkout/moonpay-img-logo.svg";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";

export const CheckoutContentMethodsButtonMeoonpay = () => {
  const { t } = useTranslation("common");

  return (
    <CheckoutContentMethodsButton
      icon={cryptoIcon as string}
      title={t("checkout.moonpayTitle")}
      instruction={t("checkout.moonpayInstruction")}
      logo={
        <Stack spacing={3} direction="row" alignItems={"center"}>
          <NextImage src={moonpayImgLogo} />
          <NextImage src={moonpayTextLogo} />
        </Stack>
      }
    />
  );
};
