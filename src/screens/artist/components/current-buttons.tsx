import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@/config/navigation";

export const ProjectCurrentButton = ({id}:{id:string}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const goto = () => {
    router.push({
      pathname: ROUTES.project,
      query: { id:id },
    });
  }

  return (
    <Button
      onClick={() => goto()}
      fullWidth
      size="large"
      sx={(theme) => ({
        color: "white",
        [theme.breakpoints.down("sm")]: {
          fontSize: 18,
        },
      })}
    >
      {t("artist.viewBtn")}
    </Button>
  );
};
