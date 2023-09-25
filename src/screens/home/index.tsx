import { FollowUsWithSocial } from "@/layout/follow-us/with-social";
import { HomeHero } from "./components/hero";
import { FollowUsWithNewsletter } from "@/layout/follow-us/with-newsletter";
import { HomePartners } from "./components/partners";
import { HomeTeams } from "./components/teams";
import { HomeLaunches } from "./components/launches";
import { HomeHowItWorks } from "./components/how-it-works";
import { HomeRoadmap } from "./components/roadmap";
import { HomeBenefits } from "./components/benefits";
import { TestimonialList } from "@/components/lists/testimonial";
import { useTranslation } from "next-i18next";
import { Header } from "@/layout/header/header";
import { Box } from "@mui/material";
import { CircleBlur } from "@/components/backgrounds/circle-blur";
import { Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { FooterNav } from "@/layout/footer/nav";

export const HomeScreen = () => {
  const { t } = useTranslation("common");

  return (
    <Main
      meta={
        <Meta
          title={t("home.metaTitle")}
          description={t("home.metaDescription")}
        />
      }
    >
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
      <Box
        sx={{
          background: "url(/images/bg/bg-black-sky.png)",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <HomeHero />
      </Box>
      <main style={{ marginTop: 87 }}>
        <HomeLaunches />
        <HomeHowItWorks />
        <HomeBenefits />
        <FollowUsWithNewsletter />
        <HomeRoadmap />
        <HomePartners />
        <TestimonialList />
        <HomeTeams />
        <FollowUsWithSocial subject="NFT'S" />
      </main>
      <FooterNav />
    </Main>
  );
};
