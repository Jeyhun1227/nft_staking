import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { IProject } from "@/props/IProject";

import { ArtistCurrentImg } from "./current-img";
import { ProjectCurrentButton } from "./current-buttons";
import { ProjectCurrentTitle } from "./current-title";
import { ArtistCurrentDate } from "./current-date";

export const ArtistCurrent = ({project}:{project:IProject}) => {
  return (
    <Container component="section" sx={{ marginBottom: 16 }}>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 5 }}
      >
        <Grid item xs={12} md={6} sx={{ marginTop: { xs: 3, md: 11 } }}>
          <ProjectCurrentTitle title={project?.title} description={project?.description}/>
          <Divider sx={{ marginY: 3 }} />
          <ArtistCurrentDate releaseDate={project?.releaseDate?.iso} endDate={project?.endDate?.iso}/>
          <Divider sx={{ marginY: 3 }} />
          <ProjectCurrentButton id={project?.objectId}/>
        </Grid>
        <Grid display={{ xs: "none", md: "block" }} item xs={12} md={6}>
          <ArtistCurrentImg imageUrl={project?.coverImage?.url}/>
        </Grid>
      </Grid>
    </Container>
  );
};
