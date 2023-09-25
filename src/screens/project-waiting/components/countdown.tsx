import Countdown from "@/components/countdown";
import { TextCounter } from "@/components/typography/counter";
import { Typography, Stack } from "@mui/material";
import { useTranslation } from "next-i18next";

const ProjectWaitingCountdown = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      alignItems="center"
      marginY={{ xs: 5, sm: 7 }}
      paddingY={8}
      paddingX={2}
      width="100%"
      borderRadius="10px"
      sx={{ background: "rgba(87, 87, 108, 0.3)" }}
    >
      <Stack direction="row" alignItems="center" marginBottom={3} spacing={1}>
        <Typography
          fontSize={{ xs: 16, sm: 24 }}
          lineHeight="110%"
          letterSpacing={"-1px"}
        >
          {t("projectWaiting.eventBegin")}
        </Typography>
        <TextCounter
          variantColor="light"
          counter={[{ unit: "GMT", value: "17:00 PM" }]}
        />
      </Stack>
      <Countdown />
    </Stack>
  );
};

export default ProjectWaitingCountdown;
