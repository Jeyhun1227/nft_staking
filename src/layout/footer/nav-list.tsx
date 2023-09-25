import Stack from "@mui/material/Stack";
import { FooterNavListCol } from "./nav-list-col";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@/config/navigation";

export const FooterNavList = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      component="nav"
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, md: 10 }}
      aria-label="footer nav"
    >
      {[
        {
          title: t("header.explore"),
          data: [
            { label: t("footer.artists"), href: ROUTES.explore },
            { label: t("footer.nfts"), href: ROUTES.explore },
          ],
        },
        {
          title: t("footer.more"),
          titleColor: "secondary.main",
          data: [
            { label: t("header.join"), href: ROUTES.join },
            { label: t("faq.title"), href: ROUTES.faq },
          ],
        },
        {
          title: "Legal",
          data: [{ label: t("footer.terms") }, { label: t("footer.privacy") }],
        },
      ].map((col) => (
        <FooterNavListCol key={col?.title} {...col} />
      ))}
    </Stack>
  );
};
