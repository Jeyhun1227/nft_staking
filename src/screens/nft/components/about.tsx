import { Box, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { SectionDefault } from "../../../layout/section";
import ReactPlayer from "react-player";
import { useTranslation } from "next-i18next";
import { IProject } from "@/props/IProject";
import { SocialLink } from "@/components/social-link";

export const ProjectAbout = ({project}:{project:IProject}) => {
  const { t } = useTranslation("common");
  
  const artist = project.artistOwner;
  return (
    <SectionDefault
      title={t("nftProject.aboutTitle")}
      subtitle={t("nftProject.aboutSubtitle")}
      titleColor={t("secondary.main")}
    >
      <Grid
        container
        spacing={10}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={5}>
          <Typography paragraph variant="subheader3">
            {project.aboutDescription?.split('\\n')[0]}
          </Typography>
          <br />
          <br />
          <Typography paragraph variant="subheader3">
            {project.aboutDescription?.split('\\n')[1]}
          </Typography>
          <Typography
            paragraph
            variant="bodyB1"
            marginTop={5}
            marginBottom={4}
            textAlign={{ xs: "center", md: "start" }}
          >
            Follow {artist?.name} on
          </Typography>
          <Stack marginY={2} direction="row" alignItems="center" spacing={3}>
            {artist?.socials?.map((social) => SocialLink(social))}
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              height: 370,
              width: "100%",
              borderRadius: "8px",
              zIndex: 10,
            }}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              style={{
                zIndex: 1,
                borderRadius: "80px",
              }}
              url={project.videoUrl}
            />
          </Box>
        </Grid>
      </Grid>
    </SectionDefault>
  );
};
