import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";

export const IncompleteProfile = () => {
  const { t } = useTranslation("common");

  return (
    <Box bgcolor={"primary.main"} paddingY={2} marginBottom={2}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent="space-between"
          spacing={2}
          paddingX={1}
        >
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <Typography variant="bodyB1">{t("account.incomplet")}</Typography>
            <Typography>{t("account.please")}</Typography>
          </Stack>

          <Button
            size="small"
            sx={(theme) => ({
              background: "#191225",
              color: "white",
              ...theme.typography.bodyB2,
            })}
          >
            {t("account.completBtn")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
