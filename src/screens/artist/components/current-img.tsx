import Box from "@mui/material/Box";

export const ArtistCurrentImg = ({imageUrl}:{imageUrl:string }) => {
  return (
    <Box
      maxHeight={{ xs: 940, md: "100%" }}
      sx={{
        position: "relative",
        filter: "drop-shadow(0px 13px 19px rgba(66, 164, 255, 0.7))",
        borderRadius: "10px",
      }}
    >
      <img src={imageUrl} width="100%" />
    </Box>
  );
};
