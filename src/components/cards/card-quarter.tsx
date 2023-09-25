import { Stack, SxProps, Typography } from "@mui/material";
import { InfoCard } from "./info-card";

interface props {
  textList: Array<string>;
  title: string;
  subtitile: string;
  sx?: SxProps;
}

export const CardQuarter = ({ textList, title, subtitile, sx }: props) => {
  return (
    <Stack sx={{ position: "absolute", ...sx }}>
      <Typography variant={"headline3"} color={"primary.main"} marginBottom={2}>
        {title}
      </Typography>
      <Typography
        maxWidth={{ xs: undefined, md: 260 }}
        variant={"title1"}
        marginBottom={2}
      >
        {subtitile}
      </Typography>
      {textList.map((text) => {
        return <InfoCard key={text} text={text} />;
      })}
    </Stack>
  );
};
