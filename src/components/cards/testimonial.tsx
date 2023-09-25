import { Stack, Typography } from "@mui/material";
import React from "react";
import { HeroArtistsListItem } from "../../screens/home/components/hero-artists-list-item";

interface props {
  img: string;
  bg: string;
  title: string;
  message: string;
  borderColor: string;
}

export const CardTestimonial = ({
  img,
  title,
  message,
  bg,
  borderColor,
}: props) => {
  return (
    <Stack
      width="100%"
      height={"352px"}
      sx={{
        background: `linear-gradient(360deg, #191225 0%, rgba(25, 18, 37, 0) 61.19%), url(${bg})`,
        backgroundBlendMode: "normal, lighten, normal",
        borderRadius: "12px",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      justifyContent={"flex-end"}
      padding={5}
      spacing={1}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <HeroArtistsListItem background={img} borderColor={borderColor} />
        <Typography
          variant={"title2"}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              fontSize: 22,
            },
          })}
        >
          {title}
        </Typography>
      </Stack>

      <Typography
        variant={"title2"}
        marginBottom={"8px"}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: 17,
          },
        })}
      >
        {message}
      </Typography>
    </Stack>
  );
};
