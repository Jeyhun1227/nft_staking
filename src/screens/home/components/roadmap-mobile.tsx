import { HomeRoadmapQuarter } from "@/screens/home/components/roadmap-quarter";

import NextImage from "next/image";
import Stack from "@mui/material/Stack";

import { HomeRoadmapContent } from "./roadmap";

import q1Img from "@/public/images/home/q1-rect.jpg";
import q2Img from "@/public/images/home/q2-rect.jpg";
import q3Img from "@/public/images/home/q3-rect.jpg";
import q4Img from "@/public/images/home/q4-rect.jpg";
import { HomeRoadmapProgress } from "./roadmap-progress";

const Images: { [k: number]: string } = {
  0: q1Img as unknown as string,
  1: q2Img as unknown as string,
  2: q3Img as unknown as string,
  3: q4Img as unknown as string,
};

export const HomeRoadmapMobile = ({ content }: HomeRoadmapContent) => {
  return (
    <Stack
      spacing={6}
      alignItems="center"
      display={{ xs: "flex", md: "none" }}
      sx={{
        ".img-rect": {
          borderRadius: "8px",
        },
      }}
    >
      <HomeRoadmapProgress />
      {content.map((item, idx) => {
        return (
          <Stack key={item.title} spacing={3}>
            <NextImage
              // @ts-ignore
              src={Images[idx]}
              height={173}
              width={258}
              layout="fixed"
              className="img-rect"
            />
            <HomeRoadmapQuarter
              title={item.title}
              subtitile={item.subtitle}
              textList={item.textList}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};
