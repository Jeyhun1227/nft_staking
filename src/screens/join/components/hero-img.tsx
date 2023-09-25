import { CircleBlur } from "@/components/backgrounds/circle-blur";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NextImage from "next/image";
import artistImage from "@/public/images/join-image.jpg";
import Slider from "react-slick";
import { ReactNode } from "react";

export const JoinHeroImg = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: ReactNode) => (
      <Box>
        <Box component="ul" marginBottom={{ xs: 0, md: 10 }} paddingX={0}>
          {dots}
        </Box>
      </Box>
    ),
  };

  return (
    <Stack
      alignSelf={{ xs: "center", md: "auto" }}
      flex={1}
      sx={{
        position: "relative",
        ".slick-dots li": {
          height: 10,
          width: 10,
          zIndex: 100,
          "&.slick-active button:before": {
            color: "white",
            opacity: 1,
          },
          "& button:before": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      }}
    >
      <Box maxHeight="496.81px" maxWidth={556}>
        <Slider {...settings}>
          <NextImage src={artistImage} alt="Artist" />
          <NextImage src={artistImage} alt="Artist" />
          <NextImage src={artistImage} alt="Artist" />
          <NextImage src={artistImage} alt="Artist" />
          <NextImage src={artistImage} alt="Artist" />
          <NextImage src={artistImage} alt="Artist" />
        </Slider>
      </Box>

      <CircleBlur
        propsStyle={{
          position: "absolute",
          bottom: -200,
          right: -123,
        }}
      />
    </Stack>
  );
};
