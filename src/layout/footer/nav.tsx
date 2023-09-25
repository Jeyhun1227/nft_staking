import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Logo } from "@/components/images/logo";

import { FooterNavList } from "./nav-list";
import { useTranslation } from "next-i18next";
import { Copyright } from "@/components/typography/copyright";
import { SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

export const FooterNav = ({ sx }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Container component="footer" sx={{ paddingY: { xs: 4, md: 8 }, ...sx }}>
      <Grid container columnSpacing={10} rowSpacing={3}>
        <Grid item xs={12} md={5}>
          <Logo height={"36px"} />
          <Typography
            paragraph
            color="rgba(225,225,225,0.8)"
            sx={(theme) => ({
              fontSize: 17,
              marginTop: 2,
              maxWidth: 400,
              [theme.breakpoints.down("md")]: {
                fontSize: 14,
                maxWidth: "100%",
              },
            })}
          >
            {t("footer.description")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <FooterNavList />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: { xs: 0, md: 3 },
            textAlign: { xs: "left", md: "right" },
          }}
        >
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};
