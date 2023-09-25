import React from "react";
import NextImage from "next/image";
import { CheckoutContentMethodsButton } from "./content-methods-button";
import paypalIcon from "@/public/images/checkout/paypal-rounded.svg";

import paypalLogo from "@/public/images/checkout/paypal-logo.svg";
import { useTranslation } from "next-i18next";

export const CheckoutContentMethodsButtonPaypal = () => {
  const { t } = useTranslation("common");

  return (
    <CheckoutContentMethodsButton
      icon={paypalIcon as string}
      title={t("checkout.paypalTitle")}
      instruction={t("checkout.paypalInstruction")}
      logo={<NextImage src={paypalLogo} />}
    />
  );
};
