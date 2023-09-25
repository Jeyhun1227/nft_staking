import Countdown from "@/components/countdown";
import { TextCounter } from "@/components/typography/counter";
import { IProject } from "@/props/IProject";
import { convertFromISODate } from "@/utils/date-util";
import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

interface Props {
  tokensAll?: number;
  tokensSold?: number;
  project?: IProject;
}

const ProjectRegisterCountdown = ({
  tokensAll = 2500,
  tokensSold = 500,
  project,
}: Props) => {
  const { t } = useTranslation("common");
  return (
    <Box
      marginTop={{ xs: 0, sm: 7 }}
      marginBottom={4}
      padding={4}
      width="100%"
      borderRadius="10px"
      sx={{ background: "rgba(87, 87, 108, 0.3)" }}
    >
      <Typography
        fontSize={{ xs: 16, sm: 20 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
      >
        {t("projectRegister.saleBegins")}
      </Typography>
      {project?.objectId !== "" && <Countdown date={new Date(project?.startDate?.iso || 0)}/>}
      <Typography
        marginTop={3}
        marginBottom={1}
        fontSize={{ xs: 16, sm: 18 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
      >
        {t("projectRegister.deadline")}
      </Typography>
      <TextCounter
        reverse
        variantColor="light"
        counter={convertFromISODate(project?.startDate.iso)}
      />
      <Typography
        marginTop={3}
        marginBottom={1}
        fontSize={{ xs: 16, sm: 18 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
      >
        {t("projectRegister.tokensSold")}
      </Typography>
      <Box
        marginY={2}
        marginX="auto"
        height={24}
        width="100%"
        maxWidth={277}
        borderRadius={"10px"}
        sx={{
          background: "rgba(87, 87, 108, 0.3)",
        }}
      >
        <Box
          borderRadius={"10px"}
          height="100%"
          width={`${(tokensSold / tokensAll) * 100}%`}
          sx={{
            background:
              "linear-gradient(264.43deg, #2189E9 11.25%, rgba(33, 137, 233, 0) 97.04%)",
          }}
        />
      </Box>
      <Typography
        fontSize={{ xs: 13, sm: 15 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
      >
        {t("projectRegister.sold", { sold: tokensSold, max: tokensAll })}
      </Typography>
    </Box>
  );
};

export default ProjectRegisterCountdown;
