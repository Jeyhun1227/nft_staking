import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NftRankType } from "./nft-rank-info";

interface Props {
  albumCategory?: NftRankType;
}

export const CardNftTitle = ({ albumCategory }: Props) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="headline3" sx={{ textTransform: "capitalize" }}>
        {albumCategory}
      </Typography>
    </Box>
  );
};
