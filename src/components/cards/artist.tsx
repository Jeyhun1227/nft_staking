import { Card, CardMedia } from "@mui/material";

import { CardArtistInfo } from "./artist-info";
import { IArtist } from "@/props/IArtist";

export const CardArtist = ({ name, avatarImage, musicCategory, objectId }: IArtist) => {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        background:
          "linear-gradient(119.34deg, rgba(255, 255, 255, 0.2) 17.99%, rgba(255, 255, 255, 0.3) 18%, rgba(255, 255, 255, 0.05) 81.29%)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={avatarImage?.url}
        alt={`${name} cover`}
      />
      <CardArtistInfo name={name} category={musicCategory?.type} id={objectId}/>
    </Card>
  );
};
