import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTranslation } from "next-i18next";
import { HomeTeamsList } from "./teams-list";

const FOUNDER_LIST = [
  {
    imgSrc: "/images/member-ceo.jpg",
    job: "CEO",
    description: "Tech entrepreneur depuis 10+ ans",
    name: "Guillaume",
  },
  {
    imgSrc: "/images/member-cto.jpg",
    job: "CTO",
    description: "Ex-CTO\nEthernaal NFT",
    name: "Jean-Michel",
  },
  {
    imgSrc: "/images/member-luc.jpg",
    job: "Artist relations manager",
    description: "Manager Artiste\nThe Answer Management",
    name: "Luc",
  },
  {
    imgSrc: "/images/member-maxime.jpg",
    job: "Growth associate",
    description: "Ex- Community Manager\nprojets\nblockchain",
    name: "Maxime",
  },
];

const ADVISOR_LIST = [
  {
    imgSrc: "/images/member.jpg",
    job: "Advisor/Investor",
    description: "Head of Product (web3/Token) @ TechTree",
    name: "Matthew Eisner",
  },
];

export const HomeTeams = () => {
  const { t } = useTranslation("common");

  return (
    <Box
      component="section"
      position="relative"
      sx={{
        background: "url(/images/bg/bg-black-sky.png)",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* <CircleBlur
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
          zIndex: 0,
        }}
      />
      <CircleBlur
        background="primary.main"
        width="100%"
        height="100%"
        blur="100px"
        propsStyle={{
          maxWidth: "614px",
          maxHeight: "614px",
          position: "absolute",
          right: "-215px",
          bottom: "-248px",
          opacity: "0.2",
          zIndex: 0,
        }}
      /> */}
      <Container
        sx={{
          paddingY: { xs: 7, sm: 14 },
        }}
      >
        <Typography
          component="h2"
          marginBottom={2}
          textAlign="center"
          variant="subheadline"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: 18,
            },
          })}
          color={"secondary.main"}
        >
          {t("home.team")}
        </Typography>
        <Stack spacing={{ xs: 10, sm: 13 }}>
          <HomeTeamsList
            data={FOUNDER_LIST}
            subtitle={t("home.teamFounders")}
            titleColor="secondary.main"
          />
          <HomeTeamsList
            data={ADVISOR_LIST}
            subtitle={t("home.teamAdvisors")}
          />
        </Stack>
      </Container>
    </Box>
  );
};
