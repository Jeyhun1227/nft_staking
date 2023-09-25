import { CircleBlur } from "@/components/backgrounds/circle-blur";
import { IMetaProps, Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { ReactNode } from "react";
import { FooterNav } from "../footer/nav";

import { Header } from "../header/header";
import { HeaderButtonsProps } from "../header/header-buttons";

interface Props extends HeaderButtonsProps, IMetaProps {
  children: ReactNode;
}

export const LayoutDefault = ({
  children,
  login,
  contact,
  ...metaProps
}: Props) => {
  return (
    <Main meta={<Meta {...metaProps} />}>
      <CircleBlur
        background="secondary.main"
        width="100%"
        height="100%"
        blur="100px"
        propsStyle={{
          maxWidth: "614px",
          maxHeight: "614px",
          position: "absolute",
          left: "-215px",
          top: "-248px",
          opacity: "0.2",
        }}
      />
      <Header contact={contact} />
      <main>{children}</main>
      <FooterNav />
    </Main>
  );
};
