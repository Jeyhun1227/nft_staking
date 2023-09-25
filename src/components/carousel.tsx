import Slider from "react-slick";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

interface Props extends Omit<BoxProps, "sx"> {
  children: ReactNode;
  slidesToShow?: number;
  responsive?: {
    breakpoint: number;
    settings: {
      swipeToSlide?: boolean;
      centerPadding?: string;
      centerMode?: boolean;
      slidesToShow?: number;
      slidesToScroll?: number;
    };
  }[];
}

export const Carousel = ({
  children,
  slidesToShow = 4,
  responsive,
  ...boxProps
}: Props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: false,
    dots: true,
    initialSlide: 0,
    // variableWidth: true,
    appendDots: (dots: ReactNode) => (
      <Box>
        <Box component="ul" marginBottom={-2}>
          {dots}
        </Box>
      </Box>
    ),

    responsive: responsive || [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // centerMode: true,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        ".slick-list": {
          overflow: "visible",
        },
        ".slick-dots li": {
          height: 10,
          width: 10,
          "&.slick-active button:before": {
            color: "white",
            opacity: 1,
          },
          "& button:before": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      }}
      {...boxProps}
    >
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};
