import React, { ReactNode } from "react";
import { Main } from "@/templates/main";
import { IMetaProps, Meta } from "@/layout/meta";
import { FooterTerms } from "../footer/terms";
import { PaymentBackground } from "@/components/backgrounds/payment-background";
import Box from "@mui/material/Box";
import { PaymentItem, PaymentItemProps } from "@/templates/payment-item";
import { Header } from "../header/header";

interface Props extends IMetaProps, PaymentItemProps {
  children?: ReactNode;
}

export const LayoutPayment = ({ children, failure, ...metaProps }: Props) => {
  return (
    <Main meta={<Meta {...metaProps} />}>
      <Box display={{ xs: "block", md: "none" }}>
        <Header />
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1.3fr 1fr" }}
        component="main"
        borderBottom={{ xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <PaymentBackground failure={failure} />
        <Box display={{ xs: "none", md: "block" }}>
          <PaymentItem failure={failure} />
        </Box>
      </Box>
      <FooterTerms />
    </Main>
  );
};
