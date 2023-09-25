import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { CircleBlur } from "@/components/backgrounds/circle-blur";

import { HomeHowItWorksDesktop } from "./how-it-works-desktop";
import { useTranslation } from "next-i18next";
import { JoinContactList } from "../../join/components/contact.list";

export const HomeHowItWorks = () => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ position: "relative", paddingBottom: 15, paddingTop: 10 }}>
      <Container>
        <CircleBlur
          background={"secondary.main"}
          width={"100%"}
          height={"100%"}
          blur="300px"
          propsStyle={{
            position: "absolute",
            top: "25%",
            right: -300,
            maxWidth: 298,
            maxHeight: 334,
          }}
        />
        <Stack direction={"row"} spacing={{ xs: 5, md: 10 }}>
          <Stack spacing={4}>
            <Typography
              variant={"subheadline"}
              color="primary.main"
              sx={{
                marginBottom: 4,
                maxWidth: 160,
              }}
            >
              {t("home.howTitle")}
            </Typography>
            <Typography variant={"headline1"} sx={{ maxWidth: 375 }}>
              {t("home.howSubtitle")}
            </Typography>
          </Stack>
          <HomeHowItWorksDesktop />
        </Stack>
      </Container>
      <Box marginTop={13} display={{ xs: "block", md: "none" }}>
        <JoinContactList />
      </Box>
    </Box>
  );
};
