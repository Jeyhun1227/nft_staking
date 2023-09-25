import Stack from "@mui/material/Stack";

import { CardWithNumber } from "@/components/cards/card-with-number";

export const HomeHowItWorksDesktop = () => {
  return (
    <Stack
      display={{ xs: "none", md: "flex" }}
      direction="row"
      spacing={10}
      alignItems="center"
    >
      <Stack spacing={15}>
        <CardWithNumber
          number="1"
          ellipse="/images/ellipse-blue.svg"
          image="/images/join-1.jpg"
          text="Creating and developing a recurring and sustainable income with new assets"
        />
        <CardWithNumber
          number="3"
          ellipse="/images/ellipse-blue.svg"
          image="/images/join-3.jpg"
          text="Creating and developing a recurring and sustainable income with new assets"
        />
      </Stack>
      <CardWithNumber
        number="2"
        ellipse="/images/ellipse-purple.svg"
        image="/images/join-2.jpg"
        text="Creating and developing a recurring and sustainable income with new assets"
      />
    </Stack>
  );
};
