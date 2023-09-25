import Box from "@mui/material/Box";

import { FooterNavListColDesktop } from "./nav-list-col-desktop";
import { FooterNavListColMobile } from "./nav-list-col-mobile";

interface Props {
  title: string;
  titleColor?: string;
  data: { label: string }[];
}

export const FooterNavListCol = (props: Props) => {
  return (
    <Box>
      <FooterNavListColDesktop {...props} />
      <FooterNavListColMobile {...props} />
    </Box>
  );
};
