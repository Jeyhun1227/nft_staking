import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NextImage from "next/image";
import orelsan from "@/public/images/testimonial-orelsan.jpg";
import damso from "@/public/images/testimonial-damso.jpg";

export const HomePartnersTestimonials = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Box flex={1}>
        <NextImage src={orelsan} />
      </Box>
      <Box flex={1}>
        <NextImage src={damso} />
      </Box>
    </Stack>
  );
};
