import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TextCounter } from "@/components/typography/counter";
import { useTranslation } from "next-i18next";
import { convertFromISODate } from "@/utils/date-util";

interface NftProjectHeroDateProps {
  releaseDate:string | undefined;
  endDate:string | undefined;
}


export const NftProjectHeroDate = ({releaseDate, endDate}:NftProjectHeroDateProps) => {

  const { t } = useTranslation("common");

  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
        <Typography color="rgba(255, 255, 255, 0.8)">
          {t("nftProject.heroRelease")}
        </Typography>
        <TextCounter
          variantColor="light"
          counter={convertFromISODate(releaseDate)}
        />
      </Stack>
      <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
        <Typography color="rgba(255, 255, 255, 0.8)">
          {t("nftProject.heroEnd")}
        </Typography>
        <TextCounter
          variantColor="light"
          counter={convertFromISODate(endDate)}
        />
      </Stack>
    </Stack>
  );
};
