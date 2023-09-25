import { Main } from "@/templates/main";
import { Meta } from "@/layout/meta";

import Box from "@mui/material/Box";
import { PaymentItem } from "@/templates/payment-item";
import { FooterTerms } from "@/layout/footer/terms";
import { CheckoutContent } from "./components/content";
import { Container } from "@mui/material";
import { useTranslation } from "next-i18next";

export const CheckoutScreen = () => {
  const { t } = useTranslation("common");

  return (
    <Main
      meta={
        <Meta
          title={t("checkout.metaTitle")}
          description={t("checkout.metaTitle")}
        />
      }
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1.3fr 1fr" }}
        component="main"
        borderBottom={{ xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <Box display={{ xs: "none", md: "block" }}>
          <CheckoutContent />
        </Box>

        <Container
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <CheckoutContent />
        </Container>
        <Box display={{ xs: "none", md: "block" }}>
          <PaymentItem />
        </Box>
      </Box>
      <FooterTerms />
    </Main>
  );
};
