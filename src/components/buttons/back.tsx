import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface Props {
  variant?: "text" | "icon";
}

export const ButtonBack = ({ variant = "text" }: Props) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Box>
      {variant === "text" ? (
        <Button
          onClick={router.back}
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{ color: "#42A4FF" }}
        >
          {t("signIn.backBtn")}
        </Button>
      ) : (
        <IconButton onClick={router.back} aria-label="back icon button">
          <ChevronLeftIcon sx={{ fontSize: 30 }} />
        </IconButton>
      )}
    </Box>
  );
};
