import { ExploreFestivalListItem } from "@/screens/explore/components/festival-list-item";
import { Carousel } from "@/components/carousel";

import { Box, Grid } from "@mui/material";
import { NftRankType } from "@/components/cards/nft-rank-info";

const FESTIVAL_LIST: { albumCategory: NftRankType }[] = [
  { albumCategory: "diamond" },
  { albumCategory: "gold" },
  { albumCategory: "platinium" },
  { albumCategory: "diamond" },
  { albumCategory: "gold" },
  { albumCategory: "platinium" },
  { albumCategory: "diamond" },
  { albumCategory: "gold" },
  { albumCategory: "platinium" },
];

interface Props {
  data?: { albumCategory: NftRankType }[];
}

const Desktop = ({ data = [] }: Props) => (
  <Grid display={{ xs: "none", sm: "flex" }} container spacing={7}>
    {data.map((artist, index) => (
      <Grid key={index} item md={4} sm={6} xs={12}>
        <ExploreFestivalListItem {...artist} />
      </Grid>
    ))}
  </Grid>
);

const Mobile = ({ data = [] }: Props) => (
  <Box display={{ xs: "block", sm: "none" }}>
    <Carousel
      slidesToShow={1}
      responsive={[
        {
          breakpoint: 820,
          settings: {
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {data.map((artist, index) => (
        <Box
          key={index}
          minWidth={270}
          maxWidth={366}
          paddingLeft={{ xs: 2, md: 0 }}
        >
          <ExploreFestivalListItem {...artist} />
        </Box>
      ))}
    </Carousel>
  </Box>
);

export const ExploreFestivalList = ({ data = FESTIVAL_LIST }: Props) => {
  return (
    <Box>
      <Desktop data={data} />
      <Mobile data={data} />
    </Box>
  );
};
