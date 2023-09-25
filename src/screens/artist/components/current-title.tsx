import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { ArtistCurrentImg } from "./current-img";

export const ProjectCurrentTitle = ({title, description}:{title:string, description:string}) => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Typography variant="title2" color="primary.main">
        {t("artist.currentTitle")}
      </Typography>
      <Typography
        variant="headline1"
        component="h2"
        marginTop={2}
        marginBottom={3}
      >
        {title?.toUpperCase()}
      </Typography>
      <Box marginBottom={4} display={{ md: "none", xs: "block" }}>
        <ArtistCurrentImg imageUrl={"/images/artists/kavinsky-cover.jpg"}/>
      </Box>
      <Typography
        variant="subheader2"
        sx={{ display: "flex" }}
        textAlign={{ xs: "center", md: "start" }}
      >
        {description}
      </Typography>
    </Box>
  );
};
