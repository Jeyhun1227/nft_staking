import { CardTestimonial } from "@/components/cards/testimonial";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const TestimonialList = () => {
  const cards = [
    {
      img: "url(/images/orelsan.jpg), linear-gradient(138.24deg, #E5A0A5 23.58%, #E7A5A9 76.75%)",
      bg: "/images/orelsan-card.jpg",
      title: "Orelsan",
      message:
        "“With rhapsody I share back 100% of my project without any majors”",
      borderColor: "#2B5184",
    },
    {
      img: "url(/images/damso.jpg), #C4C4C4",
      bg: "/images/damso-card.jpg",
      title: "Damso",
      message:
        "“With rhapsody I share back 100% of my project without any majors”",
      borderColor: "#9D3BCB",
    },
  ];
  return (
    <Container
      component="section"
      sx={{ marginBottom: 10, paddingRight: { xs: 0, md: 3 } }}
    >
      <Grid
        container
        spacing={2}
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
        {cards.map((card) => {
          return (
            <Grid
              minWidth={{ xs: "430px", md: undefined }}
              item
              xs={12}
              md={6}
              key={card.title}
            >
              <CardTestimonial
                img={card.img}
                title={card.title}
                message={card.message}
                bg={card.bg}
                borderColor={card.borderColor}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
