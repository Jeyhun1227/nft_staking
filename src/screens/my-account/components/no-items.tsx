import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ButtonGradient } from "@/components/buttons/button-gradient";
import { ROUTES } from "@/config/navigation";

export const NoItems = () => {
  const { t } = useTranslation("common");
  
  const router = useRouter();

  const goTo = () => {
      router.push({
        pathname: ROUTES.explore,
      });
  }


  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        padding: "50px",
        border: "1px dashed rgba(255, 255, 255, 0.2)",
        borderRadius: "4px"
      }}
    >
      <Typography 
        color="#2F98FB" 
        fontSize={{ xs: 14, sm: 16 }}
        fontWeight="600"
      >
        {t("account.noItemsFound")}
      </Typography>
      <Typography
        color="rgba(255, 255, 255, 0.4)"
        fontSize={{ xs: 10, sm: 12 }}
      >
        {t("account.noUpcomingCollections")}
      </Typography>
      <ButtonGradient label="Explore collections" onClick={()=>goTo()} />
    </Stack>
  );
};
