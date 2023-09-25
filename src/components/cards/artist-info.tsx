import { CardContent, Stack, Typography, useMediaQuery } from "@mui/material";
import NextImage from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ROUTES } from "@/config/navigation";
import { MUILink } from "../mui-link";
import { theme } from "@/config/theme";

interface Props {
  id?:string;
  name: string;
  category?: string;
  drop?: string;
  description?: string;
}

export const CardArtistInfo = ({
  name,
  category = "Rap",
  drop = "Drop in progress",
  description = "Trending artist",
  id
}: Props) => {
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const ICON_SIZE = matches ? 13 : 24;

  return (
    <CardContent
      sx={{
        width: "100%",
        flex: 1,
        padding: { xs: 2, md: 4 },
      }}
    >
      <Stack
        sx={{
          color: "white",
        }}
      >
        <Typography
          marginBottom={1}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: 9,
            },
          })}
        >
          {category}
        </Typography>
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: 16,
            },
          })}
          variant="title1"
          marginBottom={2}
        >
          {name}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          marginBottom={{ xs: 1, sm: 2 }}
        >
          <NextImage
            src={"/images/Crypto.svg"}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: 9,
              },
            })}
          >
            {drop}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <NextImage
              src={"/images/fire.svg"}
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
            <Typography
              marginBottom={{ xs: 1, sm: 2 }}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  fontSize: 9,
                },
              })}
            >
              {description}
            </Typography>
          </Stack>
          <MUILink
            href={{
              pathname: ROUTES.artistProfile,
              query: { id : id },
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#42A4FF",
                borderRadius: "50%",
                boxShadow: "0px 2px 8px rgba(191, 255, 98, 0.29)",
              }}
              aria-label="artist link"
              size="small"
            >
              <ChevronRightIcon fontSize="inherit" />
            </IconButton>
          </MUILink>
        </Stack>
      </Stack>
    </CardContent>
  );
};
