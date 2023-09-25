import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { Logo } from "../images/logo";
import NextImage from "next/image";
import moonpayLogo from "@/public/images/moonpay.svg";
import backButton from "@/public/images/left-arrow.svg";
import cbLogo from "@/public/images/cb-logo.svg";
import { PaymentItemProps } from "@/templates/payment-item";
import { FailureCard } from "../cards/failure";
import { useTranslation } from "next-i18next";
interface Props extends PaymentItemProps {
  children?: ReactNode;
}

export const PaymentBackground = ({ children, failure }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Box
      paddingTop={{ xs: 1, md: 4 }}
      paddingBottom={{ xs: 3, md: 7 }}
      sx={{
        backgroundColor: { xs: "transparent", md: "rgba(255, 255, 255, 0.05)" },
        width: "100%",
      }}
    >
      <Stack direction="column" alignItems="flex-start" spacing={8}>
        <Stack
          width={"100%"}
          spacing={7}
          paddingLeft={{ xs: 2, md: 4 }}
          paddingRight={{ xs: 2, md: 5, lg: 7 }}
        >
          <Box marginLeft={15} display={{ xs: "none", md: "block" }}>
            <Logo height="25px" />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 4, md: 12 }}
          >
            <NextImage src={backButton} alt="back button" height={"20px"} />
            <Stack direction="row" alignItems="center" spacing={2}>
              <NextImage src={cbLogo} alt="credit card logo" height={"30px"} />
              <Typography variant="typography1">
                {t("payment.creditCard")}
              </Typography>
            </Stack>
          </Stack>
          {failure ? (
            <Box display={{ md: "none", xs: "block" }}>
              <FailureCard />
            </Box>
          ) : null}
        </Stack>

        {children ? (
          children
        ) : (
          <Box
            paddingLeft={{ xs: 0, md: 4 }}
            paddingRight={{ xs: 0, md: 5, lg: 7 }}
            width="100%"
          >
            <Box
              height={"900px"}
              width="100%"
              borderRadius={{ xs: 0, md: "10px" }}
              sx={{ background: "white" }}
            />
          </Box>
        )}
        <Box alignSelf={"center"} marginTop={4}>
          <NextImage src={moonpayLogo} alt="logo Moonpay" />
        </Box>
      </Stack>
    </Box>
  );
};
