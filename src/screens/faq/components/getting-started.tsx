import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";
import { FaqGettingStartedList } from "./getting-started-list";

export const FaqGettingStarted = () => {
  const { t } = useTranslation("common");

  return (
    <Box component={"section"} sx={{ py: { xs: 3, md: 10 } }}>
      <Container>
        <Stack
          alignItems={{ xs: "flex-start", md: "center" }}
          textAlign={{ xs: "left", md: "center" }}
          marginBottom={7}
          spacing={3}
        >
          <Typography
            variant="subheadline"
            color="primary.main"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 18,
              },
            })}
          >
            {t("faq.title")}
          </Typography>
          <Typography
            variant="headline1"
            maxWidth={"700px"}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 32,
              },
            })}
          >
            {t("faq.subtitle")}
          </Typography>
        </Stack>
      </Container>

      <FaqGettingStartedList />
    </Box>
  );
};
