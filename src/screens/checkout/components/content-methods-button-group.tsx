import { ButtonPrimary } from "@/components/buttons/styles";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import { CheckoutContentMethodsButtonMetamask } from "./content-methods-button-metamask";
import { CheckoutContentMethodsButtonMeoonpay } from "./content-methods-button-moonpay";
import { CheckoutContentMethodsButtonPaypal } from "./content-methods-button-paypal";

export const CheckoutContentMethodsButtonGroup = () => {
  const [method] = React.useState<number | null>(null);
  const { t } = useTranslation("common");

  return (
    <Stack spacing={3} width={1}>
      <Typography variant="title3">{t("checkout.choose")}</Typography>
      <Stack spacing={2} width={1}>
        <CheckoutContentMethodsButtonMetamask />
        <CheckoutContentMethodsButtonPaypal />
        <CheckoutContentMethodsButtonMeoonpay />
      </Stack>
      <ButtonPrimary disabled={!method}>
        {t("checkout.chooseBtn", { product: "Basic Civilisation" })}
      </ButtonPrimary>
    </Stack>
  );
};
