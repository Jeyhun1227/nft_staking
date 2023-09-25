import { Logo } from "@/components/images/logo";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";

import { Stack } from "@mui/material";
import { useTranslation } from "next-i18next";
import { HeaderNavLink } from "./header-nav-link";

export const HeaderNav = () => {
  const { t } = useTranslation("common");

  return (
    <Stack direction="row" alignItems={"center"}>
      <MUILink href={ROUTES.home}>
        <Logo height={28} />
      </MUILink>
      <Stack
        spacing={"60px"}
        component="nav"
        direction="row"
        alignItems={"center"}
        marginLeft={"60px"}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {[
          { label: t("header.explore"), path: ROUTES.explore },
          { label: t("header.join"), path: ROUTES.join },
          { label: t("header.about"), path: ROUTES.faq },
        ].map((link) => (
          <HeaderNavLink key={link?.path} {...link} />
        ))}
      </Stack>
    </Stack>
  );
};
