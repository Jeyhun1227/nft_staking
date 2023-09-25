import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeTeamsListItem } from "./teams-list-item";

type MemberType = {
  imgSrc?: string;
  job?: string;
  name?: string;
  description?: string;
};

interface Props {
  titleColor?: string;
  subtitle: string;
  data?: MemberType[];
}

export const HomeTeamsList = ({
  subtitle,
  data,
  titleColor = "primary.main",
}: Props) => {
  return (
    <Box textAlign={{ xs: "left", sm: "center" }}>
      <Typography
        marginBottom={5}
        component="h3"
        variant="headline1"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 32,
          },
        })}
      >
        {subtitle}
      </Typography>
      <Grid
        spacing={4}
        container
        textAlign={"center"}
        justifyContent={"center"}
      >
        {data?.map((member, index) => (
          <Grid xs={6} md={4} lg={12 / 5} item key={index}>
            <HomeTeamsListItem {...member} titleColor={titleColor} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
