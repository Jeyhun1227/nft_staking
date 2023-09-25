import Grid from "@mui/material/Grid";
import {
  HomePartnersListItem,
  HomePartnersListItemType,
} from "./partners-list-item";

const PARTNERS: HomePartnersListItemType[] = [
  "sony",
  "universal",
  "banger",
  "trax",
  "believe",
  "centimes",
];

export const HomePartnersList = () => {
  return (
    <Grid
      container
      marginBottom={8}
      sx={(theme) => ({
        border: "1px solid rgba(255, 255, 255, 0.2)",
        [theme.breakpoints.down("lg")]: {
          border: 0,
        },
      })}
    >
      {PARTNERS.map((partner, index) => (
        <Grid key={partner} item xs={6} sm={4} lg={2}>
          <HomePartnersListItem partner={partner} idx={index} />
        </Grid>
      ))}
    </Grid>
  );
};
