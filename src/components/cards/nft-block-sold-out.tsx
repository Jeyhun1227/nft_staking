import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export interface CardNftBlockSoldOutProps {
  nftSold?: number;
}

export const CardNftBlockSoldOut = ({
  nftSold = 500,
}: CardNftBlockSoldOutProps) => {
  const { t } = useTranslation("common");

  return (
    <Stack
      direction="row"
      alignItems="alignItems"
      justifyContent={"space-between"}
    >
      <Box>
        <Typography
          fontSize={{ xs: 12, sm: 21 }}
          lineHeight="110%"
          letterSpacing={"-0.02em"}
          fontWeight={"800"}
          color="#BD482B"
          textTransform={"uppercase"}
        >
          {t("artist.sodlOut")}
        </Typography>
        <Typography
          fontSize={{ xs: 10, sm: 16 }}
          lineHeight="110%"
          letterSpacing={"-0.02em"}
          textTransform={"uppercase"}
        >
          {t("artist.tokensSold", { nftSold })}
        </Typography>
      </Box>
    </Stack>
  );
};
