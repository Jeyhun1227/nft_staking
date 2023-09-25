import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";
import setupIcon from "@/public/images/setup.svg";
import discIcon from "@/public/images/disc.svg";
import peopleIcon from "@/public/images/people.svg";
import dressIcon from "@/public/images/dress.svg";
import { useTranslation } from "next-i18next";

export const HomeBenefits = () => {
  const { t } = useTranslation("common");

  const items = [
    {
      icon: setupIcon,
      title: t("home.benefitsEventsTitle"),
      text: t("home.benefitsEventsText"),
    },
    {
      icon: discIcon,
      title: t("home.benefitsDigitalTitle"),
      text: t("home.benefitsDigitalText"),
    },
    {
      icon: peopleIcon,
      title: t("home.benefitsPrivateTitle"),
      text: t("home.benefitsPrivateText"),
    },
    {
      icon: dressIcon,
      title: t("home.benefitsMerchandizingTitle"),
      text: t("home.benefitsMerchandizingText"),
    },
  ];
  return (
    <Container sx={{ marginBottom: 15 }}>
      <Typography
        component="h3"
        variant={"headline3"}
        textAlign={{ xs: "center", sm: "left" }}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 25,
          },
        })}
      >
        {t("home.benefitsTitle")}
      </Typography>

      <Grid container spacing={4} marginTop={{ xs: 4, sm: 8 }}>
        {items.map((item) => {
          return (
            <Grid key={item.title} item xs={12} sm={6} lg={3}>
              <Stack
                maxWidth={300}
                marginX={{ xs: "auto", sm: 0 }}
                alignItems={{ xs: "center", sm: "flex-start" }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                <NextImage
                  src={item.icon}
                  alt={`${item?.title} icon`}
                  height={48}
                />
                <Typography
                  variant={"title2"}
                  marginTop={2}
                  marginBottom={1}
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      fontSize: 22,
                    },
                  })}
                >
                  {item.title}
                </Typography>
                <Typography variant={"body1"}>{item.text}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
