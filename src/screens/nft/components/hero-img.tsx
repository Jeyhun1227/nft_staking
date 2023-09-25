import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import NextImage from "next/image";
import heroImg from "@/public/images/hero-nft.jpg";

export const NftProjectHeroImg = ({imageUrl}:{imageUrl:string}) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ".little-hero": {
          backgroundBlendMode: "lighten, normal, normal",
          filter:
            "drop-shadow(0px 23.17px 100px rgba(0, 0, 0, 0.1)) drop-shadow(0px 64.99px 50px rgba(0, 0, 0, 0.2))",
          borderRadius: "4.33154px",
        },
      }}
      padding={{ xs: 11, sm: 20, md: 0 }}
      height="100%"
      maxHeight={{ xs: 940, md: "100%" }}
    >
      <Box width={{ xs: "100%", md: 250 }} height={{ xs: "100%", md: 250 }}>
        <NextImage className="little-hero" src={heroImg} />
      </Box>
    </Stack>
  );
};
