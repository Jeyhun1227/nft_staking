import { IMetaProps, Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { FooterNav } from "../footer/nav";

import { Header } from "../header/header";
import { HeaderButtonsProps } from "../header/header-buttons";

interface Props extends HeaderButtonsProps, IMetaProps {
  children: ReactNode;
}

export const LayoutProfile = ({
  children,
  ...metaProps
}: Props) => {
  return (
    <Main meta={<Meta {...metaProps} />}>
      <Box
        sx={{background: "#1A1C20"}}>
        <Header />
        <main>{children}</main>
        <FooterNav />
      </Box>
    </Main>
  );
};
