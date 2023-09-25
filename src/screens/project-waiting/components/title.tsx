import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

const ProjectWaitingTitle = () => {
  const { t } = useTranslation("common");

  return (
    <Box maxWidth={650} textAlign="center">
      <Typography
        fontSize={{ xs: 20, sm: 25 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        color="primary.main"
        fontWeight={"600"}
      >
        KAVINSKY
      </Typography>
      <Typography
        fontSize={{ xs: 35, sm: 40 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
        marginTop={1}
        marginBottom={{ xs: 0, sm: 3 }}
        textTransform="uppercase"
      >
        {t("projectWaiting.metaDescription", { project: "REBORN" })}
      </Typography>
      <Typography
        fontSize={{ xs: 18, sm: 30 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
      >
        {t("projectWaiting.saleNotStarted")}
      </Typography>
    </Box>
  );
};

export default ProjectWaitingTitle;
