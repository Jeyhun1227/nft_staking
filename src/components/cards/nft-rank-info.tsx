import { theme } from "@/config/theme";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const RANK_INFO = {
  basic: ["", ""],
  gold: ["Gold", "Rare"],
  platinium: ["Platinum", "Royalties"],
  diamond: ["Diamond", "Royalties"],
};

export type NftRankType = "basic" | "gold" | "platinium" | "diamond";

interface Props {
  rank: NftRankType;
}

export const NftRankInfo = ({ rank }: Props) => {
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const description = RANK_INFO[rank];

  const ImgSize = downSm ? 24 : 34;

  if (rank === "basic") {
    return null;
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"flex-end"}
      spacing={{ xs: 0.5, sm: 1 }}
    >
      <img src={`/images/${rank}-disk.svg`} height={ImgSize} width={ImgSize} />
      <Stack>
        <Typography
          variant="body3"
          sx={(appTheme) => ({
            [appTheme.breakpoints.down("mobile")]: {
              fontSize: 7,
            },
          })}
        >
          {description[0]}
        </Typography>
        <Typography
          variant="body3"
          sx={(appTheme) => ({
            [appTheme.breakpoints.down("mobile")]: {
              fontSize: 7,
            },
          })}
        >
          {description[1]}
        </Typography>
      </Stack>
    </Stack>
  );
};
