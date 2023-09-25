import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { HomeRoadmapQuarterInfo } from "./roadmap-quarter-info";

interface Props {
  textList: Array<string>;
  title: string;
  subtitile: string;
}

export const HomeRoadmapQuarter = ({ textList, title, subtitile }: Props) => {
  return (
    <Stack spacing={2}>
      <Typography variant={"headline3"} color={"primary.main"}>
        {title}
      </Typography>
      <Typography variant={"title1"}>{subtitile}</Typography>
      <Stack spacing={2}>
        {textList.map((text) => {
          return <HomeRoadmapQuarterInfo key={text} text={text} />;
        })}
      </Stack>
    </Stack>
  );
};
