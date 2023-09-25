import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { IProject } from "@/props/IProject";

import { NftProjectHeroImg } from "./hero-img";
import { NftProjectHeroButtons } from "./hero-buttons";
import { NftProjectHeroTitle } from "./hero-title";
import { NftProjectHeroDate } from "./hero-date";

export const NftProjectHero = ({project}:{project:IProject}) => {
  return (
    <Container component="section" sx={{ marginBottom: 16 }}>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 5 }}
      >
        <Grid item xs={12} md={6} sx={{ marginTop: { xs: 3, md: 11 } }}>
          <NftProjectHeroTitle title={project.title} description={project.description} artistName={project.artistOwner?.name} artistAvatarUrl={project.artistOwner?.avatarImage?.url as string} coverImageUrl={project.coverImage?.url}/>
          <Divider sx={{ marginY: 3 }} />
          <NftProjectHeroDate releaseDate={project.releaseDate?.iso} endDate={project.endDate?.iso}/>
          <Divider sx={{ marginY: 3 }} />
          <NftProjectHeroButtons id={project.objectId}/>
        </Grid>
        <Grid display={{ xs: "none", md: "block" }} item xs={12} md={6}>
          <NftProjectHeroImg imageUrl={project.coverImage?.url} />
        </Grid>
      </Grid>
    </Container>
  );
};
