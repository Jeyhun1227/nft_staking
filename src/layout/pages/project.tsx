import { FooterNav } from "@/layout/footer/nav";
import { Header } from "@/layout/header/header";
import { Meta, IMetaProps } from "@/layout/meta";
import { Main } from "@/templates/main";
import { Container, Stack, Box } from "@mui/material";

import { ButtonBack } from "@/components/buttons/back";

import { ReactNode } from "react";

interface Props extends IMetaProps {
  children: ReactNode;
}

const LayoutProject = ({ children, ...metaProps }: Props) => {
  return (
    <Main meta={<Meta {...metaProps} />}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(180deg, rgba(25, 18, 37, 0.06) 0%, #191225 97.74%), url(/images/bg/project.jpg)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Container>
          <Stack
            textAlign="center"
            alignItems="center"
            minHeight={"100vh"}
            paddingY={2}
          >
            <Box marginBottom={{ xs: 0, sm: 10 }} alignSelf={"flex-start"}>
              <ButtonBack variant="icon" />
            </Box>
            {children}
          </Stack>
        </Container>
      </Box>
      <FooterNav />
    </Main>
  );
};

export default LayoutProject;
