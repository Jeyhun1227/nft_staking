import { IMetaProps, Meta } from "@/layout/meta";
import { LayoutAuthCaroussel } from "@/components/layouts/layout-auth-caroussel";
import { Main } from "@/templates/main";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import { Header } from "../header/header";

interface Props extends IMetaProps {
  children: ReactNode;
}

export const LayoutAuth = ({ children, ...metaProps }: Props) => {
  return (
    <Main meta={<Meta {...metaProps} />}>
      <Box display={{ xs: "block", md: "none" }}>
        <Header />
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        component="main"
      >
        <Box gridRow={"1"} display={{ xs: "none", md: "block" }}>
          {children}
        </Box>
        <Container sx={{ display: { xs: "block", md: "none" }, gridRow: "2" }}>
          {children}
        </Container>

        <LayoutAuthCaroussel />
      </Box>
    </Main>
  );
};
