import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";
import { JoinHeroButton } from "@/screens/join/components/hero-button";

interface Props {
  number: string;
  image: string;
  text: string;
  ellipse: string;
  revert?: boolean;
  showBtn?: boolean;
}

export const CardWithNumber = ({
  number,
  image,
  text,
  ellipse,
  revert,
  showBtn,
}: Props) => {
  const numberPosition = revert
    ? { top: { xs: -40, md: -50 }, left: { xs: 75, md: 0 } }
    : {
        top: { xs: -40, md: -50 },
        left: { xs: undefined, md: 50 },
        right: { xs: 50, md: undefined },
      };

  const ellipsePosition = revert
    ? {
        top: { xs: -30.47, md: -60.47 },
        right: { xs: null, md: null },
        left: { xs: -75, md: -47 },
      }
    : {
        top: { xs: -30.47, md: -60.47 },
        left: { xs: undefined, md: -47 },
        right: { xs: -75, md: null },
      };

  const rotate = revert ? { transform: "rotate(45deg)" } : null;

  return (
    <Stack
      sx={{
        position: "relative",
        alignItems: revert ? "flex-end" : "flex-start",
      }}
    >
      <Stack
        spacing={3.5}
        marginLeft={{ md: 0, xs: revert ? 10 : 0 }}
        marginRight={{ md: 0, xs: revert ? 0 : 10 }}
      >
        <Box position="relative">
          <NextImage
            src={image}
            alt="ellipse blue"
            width="400px"
            height="248px"
          />
          <Box
            position="absolute"
            top={ellipsePosition.top}
            left={ellipsePosition.left}
            right={ellipsePosition.right}
            width={228}
          >
            <Box sx={{ ...rotate }}>
              <NextImage
                src={ellipse}
                alt="ellipse blue"
                width={"228px"}
                height="120px"
              />
            </Box>

            <Typography
              variant={"typography9"}
              top={numberPosition.top}
              left={numberPosition.left}
              right={numberPosition.right}
              position="absolute"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  fontSize: 139,
                },
              })}
            >
              {number}
            </Typography>
          </Box>
        </Box>

        <Stack>
          <Typography
            variant={"title1"}
            maxWidth={364}
            textAlign={{ xs: revert ? "start" : "end", md: "left" }}
          >
            {text}
          </Typography>
          <Box
            marginTop={4}
            alignSelf="end"
            display={{ xs: showBtn ? "block" : "none", md: "none" }}
          >
            <JoinHeroButton />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
