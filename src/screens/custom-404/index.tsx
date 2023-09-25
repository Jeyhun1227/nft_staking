import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { FooterNav } from "@/layout/footer/nav";
import { Header } from "@/layout/header/header";
import { Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { Container, Stack, Typography, Box } from "@mui/material";

import { useTranslation } from "next-i18next";

import { ButtonBack } from "@/components/buttons/back";
import { ButtonPrimary } from "@/components/buttons/styles";

const Custom404Screen = () => {
  const { t } = useTranslation("common");

  return (
    <Main
      meta={
        <Meta
          title={t("404.metaTitle")}
          description={t("404.metaDescription")}
        />
      }
    >
      <Stack minHeight={"100vh"}>
        <Stack
          flex={{ xs: "auto", md: 1 }}
          sx={{
            backgroundImage: "url(/images/bg/404.jpg)",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Header />

          <Stack flex={1} height={"100%"} paddingY={{ xs: 4, md: 0 }}>
            <Container maxWidth="sm">
              <Box display={{ xs: "block", sm: "none" }}>
                <ButtonBack variant="icon" />
              </Box>
            </Container>

            <Stack
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <Container maxWidth="sm">
                <Typography
                  fontSize={{ xs: 80, sm: 120 }}
                  lineHeight="110%"
                  letterSpacing={"-1px"}
                  color="primary.main"
                  fontWeight={"600"}
                >
                  {t("404.metaTitle")}
                </Typography>
                <Typography
                  fontSize={{ xs: 18, sm: 30 }}
                  lineHeight="110%"
                  letterSpacing={"-1px"}
                  fontWeight={"600"}
                >
                  {t("404.metaDescription")}
                </Typography>
                <Typography
                  marginY={3}
                  fontSize={{ xs: 15, sm: 20 }}
                  lineHeight="110%"
                  letterSpacing={"-1px"}
                >
                  {t("404.paragraph")}
                </Typography>
                <MUILink href={ROUTES.explore} sx={{ width: "100%" }}>
                  <ButtonPrimary fullWidth size="large" sx={{ maxWidth: 334 }}>
                    {t("404.button")}
                  </ButtonPrimary>
                </MUILink>
              </Container>
            </Stack>
          </Stack>
        </Stack>
        <FooterNav sx={{ paddingY: 2 }} />
      </Stack>
    </Main>
  );
};

export default Custom404Screen;
