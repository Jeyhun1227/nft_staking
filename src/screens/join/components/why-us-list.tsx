import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";

export const JoinWhyUsList = () => {
  const { t } = useTranslation("common");

  const items = [
    {
      icon: "/images/thunder.svg",
      title: t("join.adviseTitle"),
      text: t("join.adviseText"),
    },
    {
      icon: "/images/setup.svg",
      title: t("join.setupTitle"),
      text: t("join.setupText"),
    },
    {
      icon: "/images/disc.svg",
      title: t("join.fansTitle"),
      text: t("join.fansText"),
    },
    {
      icon: "/images/people.svg",
      title: t("join.fundsTitle"),
      text: t("join.fundsText"),
    },
  ];
  return (
    <Grid container spacing={4}>
      {items.map((item) => {
        return (
          <Grid key={item?.title} item xs={12} sm={6} md={3}>
            <Stack
              key={item.title}
              alignItems={{ xs: "center", sm: "flex-start" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <img
                src={item.icon}
                alt=""
                style={{
                  width: "48px",
                  height: "60px",
                  paddingBottom: "12px",
                }}
              />
              <Typography variant={"title2"} marginBottom={1}>
                {item.title}
              </Typography>
              <Typography variant={"body1"}>{item.text}</Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};
