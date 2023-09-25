import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { JoinSafetyBackground } from "./safety-background";

export const JoinSafety = () => {
  const { t } = useTranslation("common");

  const iconGroup = [
    { icon: "/images/secure.svg", text: t("join.secure") },
    { icon: "/images/cb.svg", text: t("join.green") },
    { icon: "/images/wallet.svg", text: t("join.wallet") },
  ];

  return (
    <JoinSafetyBackground>
      <Stack
        marginBottom={{ xs: 4, md: 2 }}
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <Typography component="span" variant={"headline1"} color="primary.main">
          {t("join.safety")}
        </Typography>
        <Typography component="span" variant={"headline1"}>
          {t("join.first")}
        </Typography>
      </Stack>
      <Typography
        variant={"typography7"}
        marginBottom={{ xs: 11, md: 4 }}
        maxWidth={{ xs: 325, md: 840 }}
        textAlign={"center"}
      >
        {t("join.safetyDescription")}
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyItems="center"
        spacing={"40px"}
      >
        {iconGroup.map((item) => {
          return (
            <Stack
              direction={"row"}
              spacing={2}
              alignItems="center"
              key={item.text}
            >
              <img
                src={item.icon}
                alt=""
                style={{ width: "36px", height: "36px" }}
              />
              <Typography variant={"body1"}>{item.text}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </JoinSafetyBackground>
  );
};
