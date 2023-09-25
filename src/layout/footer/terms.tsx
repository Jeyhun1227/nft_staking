import { Logo } from "@/components/images/logo";
import { MUILink } from "@/components/mui-link";
import { Copyright } from "@/components/typography/copyright";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";
import { SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

export const FooterTerms = ({ sx }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Container
      component="footer"
      sx={{ paddingTop: { xs: 4, md: 11 }, paddingBottom: 4, ...sx }}
    >
      <Grid container spacing={7} textAlign={{ xs: "center", md: "left" }}>
        <Grid item xs={12}>
          <Logo height={"36px"} />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={6} direction={{ xs: "column", md: "row" }}>
            <MUILink
              underline="none"
              href="/"
              variant="subheader2"
              color="primary.main"
            >
              {t("footer.terms")}
            </MUILink>
            <MUILink
              underline="none"
              href="/"
              variant="subheader2"
              color="secondary.main"
            >
              {t("footer.privacy")}
            </MUILink>
          </Stack>
        </Grid>
        <Grid item xs={12} textAlign={{ xs: "center", md: "right" }}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};
