import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { HeroArtistsListItem } from "@/screens/home/components/hero-artists-list-item";

export const HomeHeroArtistsList = () => {
  const avatars = [
    {
      img: "url(/images/angele.jpg), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)",
      borderColor: "#E7A5A9",
    },
    { img: "url(/images/damso.jpg), #C4C4C4", borderColor: "#9D3BCB" },
    {
      img: "url(/images/orelsan.jpg), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)",
      borderColor: "#2B5184",
    },
    {
      img: "url(/images/angele.jpg), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)",
      borderColor: "#E7A5A9",
    },
    {
      img: "url(/images/orelsan.jpg), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)",
      borderColor: "#2B5184",
    },
  ];
  return (
    <Stack
      direction={"row"}
      spacing={"20px"}
      justifyContent={{
        xs: "space-between",
        sm: "center",
        md: "space-between",
      }}
      width={{ xs: "100%", md: "380px" }}
    >
      {avatars.map((avatar, i, arr) => {
        if (i == arr.length - 1 || i == 0) {
          const rotate = i == 0 ? { transform: "rotate(-180deg)" } : null;
          const rightPos = i == arr.length - 1 ? { right: -10 } : null;
          return (
            <Box position="relative" key={i}>
              <Box
                position="absolute"
                // top={"-25%"}
                width={80}
                height="100%"
                style={{
                  background:
                    "linear-gradient(270deg, #000 0%, rgba(25, 18, 37, 0) 105.45%)",
                  ...rightPos,
                  ...rotate,
                }}
              />
              <HeroArtistsListItem
                background={avatar.img}
                borderColor={avatar.borderColor}
              />
            </Box>
          );
        }

        return (
          <HeroArtistsListItem
            key={i}
            background={avatar.img}
            borderColor={avatar.borderColor}
          />
        );
      })}
    </Stack>
  );
};
