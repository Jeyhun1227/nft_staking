import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useTranslation } from "next-i18next";

export const CardFaq = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      borderRadius={"7px"}
      alignItems={"center"}
      justifyContent="center"
      height={"157px"}
      sx={{
        background:
          "url(/images/card-pattern.svg), linear-gradient(156.16deg, rgba(255, 255, 255, 0.3) -2.49%, rgba(255, 255, 255, 0.2) -0.65%, rgba(255, 255, 255, 0.05) 97.17%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px 100%, center",
        backgroundSize: "cover",
        ":hover": {
          background: "url(/images/card-pattern.svg), rgba(66, 164, 255, 0.31)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0px 100%, center",
          backgroundSize: "cover",
          border: "3px solid",
          borderColor: "primary.main",
          borderRadius: "12px",
          boxShadow: "0px 16px 40px rgba(66, 164, 255, 0.33)",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        align="center"
        variant="title1"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: 22,
          },
        })}
      >
        {t("faq.cardContent")}
      </Typography>
    </Stack>
  );
};
