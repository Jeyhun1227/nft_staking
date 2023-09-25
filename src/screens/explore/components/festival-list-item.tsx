import { CARD_STYLES } from "@/config/data";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  NftRankInfo,
  NftRankType,
} from "../../../components/cards/nft-rank-info";

export interface NftItemCardProps {
  imgSrc?: string;
  albumCategory?: NftRankType;
  width?: string;
  height?: string;
}

// @ts-ignore: Unreachable code error
const border: { [k: NftRankType]: string } = {
  gold: "linear-gradient(110.56deg, rgba(179, 117, 25, 0.5) 2.43%, rgba(255, 224, 116, 0.4) 54.82%, rgba(255, 255, 255, 0) 106.69%)",
  platinium:
    "linear-gradient(110.56deg, rgba(255, 255, 255, 0.5) 2.43%, rgba(230, 230, 230, 0.5) 54.82%, rgba(173, 172, 171, 0) 106.69%)",
  diamond:
    "linear-gradient(153deg, #BCDFFF 1.05%, #42A4FF 48.78%, #1B4770 100%)",
};

export const ExploreFestivalListItem = ({
  albumCategory = "gold",
}: NftItemCardProps) => {
  const { description, ...cardStyle } = CARD_STYLES[albumCategory];
  return (
    <Box
      // @ts-ignore: Unreachable code error
      sx={{borderRadius: "10px", padding: "3px", background: border[albumCategory] }} >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          color: "white",
          ...cardStyle,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // margin: "3px",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          image={`/images/${albumCategory}-festival.jpg`}
          alt="orelsan album cover"
        />
        <CardContent sx={{ padding: 2 }}>
          <Stack sx={{ marginBottom: 1 }}>
            <Typography variant="body3">ULTRA MUSIC FESTIVAL 2022</Typography>
            <Typography variant="title4">PARIS, FRANCE (20 -24 FEB)</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Stack>
              <Typography variant="body3" marginBottom={1}>
                Artists
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Stack direction="row" alignItems="center" spacing={"-20px"}>
                  {["", "", "", ""].map((_, idx) => (
                    <Avatar
                      key={idx}
                      src={`/images/explore-avatar-${idx}.jpg`}
                      sx={{ height: 30, width: 30 }}
                    />
                  ))}
                </Stack>
                <Typography>+ 20</Typography>
              </Stack>
            </Stack>
            <NftRankInfo rank={albumCategory} />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
