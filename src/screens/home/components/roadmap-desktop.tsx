// @ts-ignore
import { CardQuarter } from "@/components/cards/card-quarter";
import { Box, Stack } from "@mui/material";
import { HomeRoadmapContent } from "./roadmap";

import { HomeRoadmapProgress } from "./roadmap-progress";

export const HomeRoadmapDesktop = ({ content }: HomeRoadmapContent) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      position="relative"
      display={{ xs: "none", md: "flex" }}
      // overflow="hidden"
      paddingBottom={20}
    >
      <HomeRoadmapProgress />
      {content.map((item) => (
        <Box key={item.title} style={item?.imgStyle}>
          <img src={item?.img} alt="" />
          <CardQuarter
            title={item.title}
            subtitile={item.subtitle}
            textList={item.textList}
            sx={item.sx}
          />
        </Box>
      ))}
    </Stack>
  );
};
