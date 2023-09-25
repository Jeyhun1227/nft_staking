import { LayoutDefault } from "@/layout/pages/layout-default";
import { JoinHero } from "./components/hero";
import { FollowUsWithContact } from "@/layout/follow-us/with-contact";
import { TestimonialList } from "@/components/lists/testimonial";

import { JoinWhyUs } from "./components/why-us";
import { JoinSafety } from "./components/safety";
import { useTranslation } from "next-i18next";
import { JoinContact } from "./components/contact";

import Box from "@mui/material/Box";

export const JoinScreen = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutDefault
      contact
      title={t("join.metaTitle")}
      description={t("join.metaDescription")}
    >
      <JoinHero />
      <Box sx={{ background: "bg.dark", zIndex: 2, marginTop: 17 }}>
        <JoinContact showBtn />
        <JoinSafety />
        <JoinWhyUs />

        <TestimonialList />
      </Box>

      <FollowUsWithContact />
    </LayoutDefault>
  );
};
