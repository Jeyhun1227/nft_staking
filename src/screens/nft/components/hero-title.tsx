import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NftProjectHeroImg } from "./hero-img";


interface INftProjectHeroTitleProps
{ 
  title:string; 
  description: string;
  artistName:string; 
  artistAvatarUrl:string;
  coverImageUrl:string;
}

export const NftProjectHeroTitle = ({title, description, artistName, artistAvatarUrl, coverImageUrl}:INftProjectHeroTitleProps) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={artistName} src={artistAvatarUrl} />
        <Typography variant="title2">{artistName}</Typography>
      </Stack>
      <Typography
        variant="headline1"
        component="h1"
        marginTop={2}
        marginBottom={3}
      >
        {title}
      </Typography>
      <Box marginBottom={4} display={{ md: "none", xs: "block" }}>
        <NftProjectHeroImg imageUrl={coverImageUrl}/>
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
