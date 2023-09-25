import { SectionDefault } from "@/layout/section";

import { useTranslation } from "next-i18next";

import { HomeRoadmapMobile } from "./roadmap-mobile";
import { HomeRoadmapDesktop } from "./roadmap-desktop";
import { Box, SxProps } from "@mui/material";
import { CSSProperties } from "react";

type QuarterType = "Q1" | "Q2" | "Q3" | "Q4";

type HomeRoadmapContentItem = {
  title: string;
  subtitle: string;
  textList: string[];
  sx?: SxProps;
  img: string;
  imgStyle: CSSProperties;
};
export interface HomeRoadmapContent {
  content: HomeRoadmapContentItem[];
}

const OtherContent: {
  [k in QuarterType]: Pick<HomeRoadmapContentItem, "img" | "imgStyle" | "sx">;
} = {
  Q1: {
    img: "/images/img-0.svg",
    imgStyle: { position: "absolute", top: -700 },
    sx: { bottom: "10%", left: "10%" },
  },
  Q2: {
    img: "/images/img-25.svg",
    imgStyle: { position: "absolute", top: -500 },
    sx: { bottom: "-22%", left: "22%" },
  },
  Q3: {
    img: "/images/img-75.svg",
    imgStyle: { position: "absolute", top: -680 },
    sx: { bottom: "-5%", right: "25%" },
  },
  Q4: {
    img: "/images/img-100.svg",
    imgStyle: { position: "absolute", top: -580 },
    sx: { bottom: "0%", right: "-5%" },
  },
};

export const HomeRoadmap = () => {
  const { t } = useTranslation("common");

  const data: HomeRoadmapContentItem[] = ["Q1", "Q2", "Q3", "Q4"].map(
    (quarter) => {
      return {
        title: t(`home.roadmap${quarter}Title`),
        subtitle: t(`home.roadmap${quarter}Subtitle`),
        textList: [
          t(`home.roadmap${quarter}Info1`),
          t(`home.roadmap${quarter}Info2`),
          t(`home.roadmap${quarter}Info3`),
          t(`home.roadmap${quarter}Info4`),
        ],
        // @ts-ignore
        ...OtherContent[quarter],
      };
    }
  );

  return (
    <Box paddingTop={10} paddingBottom={{ xs: 10, md: 40 }}>
      <SectionDefault title="our goals" subtitle="roadmap">
        <HomeRoadmapDesktop content={data} />
        <HomeRoadmapMobile content={data} />
      </SectionDefault>{" "}
    </Box>
  );
};
