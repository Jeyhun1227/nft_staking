import { CardFaq } from "@/components/cards/faq";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const FaqGettingStartedList = () => {
  return (
    <Container sx={{ paddingRight: { xs: 0, md: "initial" } }}>
      <Grid
        width={{ xs: undefined, md: "95%" }}
        marginX={{ xs: undefined, md: "auto" }}
        container
        spacing={{ xs: 4, md: 7 }}
        justifyItems="center"
        justifyContent={{ xs: "flex-start", md: "center" }}
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        overflow={{ xs: "auto", md: "hidden" }}
        sx={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {["", "", "", "", "", ""].map((_, index) => (
          <Grid
            minWidth={{ xs: "282px", md: undefined }}
            xs={12}
            sm={6}
            md={4}
            key={index}
            item
            justifySelf={"center"}
          >
            <CardFaq />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
