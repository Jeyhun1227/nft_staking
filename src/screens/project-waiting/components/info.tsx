import { Typography, Box, Stack } from "@mui/material";
import { useTranslation } from "next-i18next";

const ProjectWaitingInfo = () => {
  const { t } = useTranslation("common");

  return (
    <Box maxWidth={600} textAlign="center">
      <Typography
        fontSize={{ xs: 14, sm: 18 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
      >
        {t("projectWaiting.paragraph")}
      </Typography>
      <Stack
        marginTop={3}
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        spacing={2}
      >
        <Stack
          justifyContent={"center"}
          alignItems="center"
          borderRadius={"50%"}
          padding={"3px"}
          sx={{
            height: 21,
            width: 21,
            background: "rgba(66, 164, 255, 0.25)",
          }}
        >
          <Box
            borderRadius={"50%"}
            height="100%"
            width="100%"
            sx={{
              background: "rgba(66, 164, 255, 1)",
            }}
          />
        </Stack>
        <Typography
          fontSize={{ xs: 13, sm: 16 }}
          lineHeight="110%"
          letterSpacing={"-1px"}
          color="primary.main"
        >
          {t("projectWaiting.update")}
          <Typography component="span" textTransform={"uppercase"}>
            1:07 PM GMT
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProjectWaitingInfo;
