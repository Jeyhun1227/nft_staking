import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { JoinWhyUsList } from "./why-us-list";
import { useTranslation } from "next-i18next";

export const JoinWhyUs = () => {
  const { t } = useTranslation("common");

  return (
    <Container sx={{ marginBottom: { xs: 7, sm: 19 } }}>
      <Stack alignItems={{ xs: "center", sm: "flex-start" }}>
        <Typography
          variant={"headline3"}
          marginBottom={8}
          maxWidth={{ xs: 200, sm: "100%" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {t("join.whyUs")}
        </Typography>
        <JoinWhyUsList />
      </Stack>
    </Container>
  );
};
