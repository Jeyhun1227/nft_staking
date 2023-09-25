import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import secureIcon from "@/public/images/checkout/secure.svg";
import walletIcon from "@/public/images/checkout/wallet.svg";
import greenIcon from "@/public/images/checkout/green.svg";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";

export const CheckoutContentMethodsDescription = () => {
  const { t } = useTranslation("common");

  const Infos = [
    { img: secureIcon, label: t("checkout.secure") },
    { img: greenIcon, label: t("checkout.green") },
    { img: walletIcon, label: t("checkout.wallet") },
  ];

  return (
    <Stack spacing={6}>
      <Stack spacing={2}>
        {Infos.map((info) => (
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            key={info?.label}
          >
            <NextImage src={info.img} />
            <Typography>{info?.label}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack spacing={3}>
        <Typography>{t("checkout.whatIsNft")}</Typography>
        <Button sx={{ background: "#574E65", color: "white" }}>
          {t("checkout.learnMore")}
        </Button>
      </Stack>
    </Stack>
  );
};
